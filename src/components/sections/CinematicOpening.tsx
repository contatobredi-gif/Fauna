import { useLayoutEffect, useRef, type MouseEvent } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArrowDown } from 'lucide-react';
import { gsap } from '../../utils/motionConfig';
import { InstitutionalImage } from '../ui/InstitutionalImage';
import { OPENING_NARRATIVE, VISUAL_DISCLOSURE } from '../../data/institutionalMedia';
import './institutional-experience.css';

export function CinematicOpening() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    try {
      media.add({ desktop: '(min-width: 900px)', motion: '(prefers-reduced-motion: no-preference)' }, (context) => {
        if (!context.conditions?.motion) return;
        const select = gsap.utils.selector(root);
        if (context.conditions.desktop) {
          root.dataset.motion = 'desktop';
          const scenes = select('.visual-scene');
          const photos = select('.visual-scene img');
          const copies = select('.visual-copy');
          gsap.set(scenes.slice(1), { autoAlpha: 0 });
          gsap.set(copies.slice(1), { autoAlpha: 0, y: 10 });
          const timeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              id: 'fauna-cinematic-opening', trigger: root, start: 'top top', end: 'bottom bottom',
              scrub: 0.45, invalidateOnRefresh: true,
            },
          });
          timeline
            // Dissolve the photographs first; titles never compete in the same frame.
            .fromTo(photos[0], { scale: 1.015, transformOrigin: '65% 48%' }, { scale: 1.065, duration: 0.6 }, 0)
            .to(copies[0], { autoAlpha: 0, y: -8, duration: 0.1 }, 0.14)
            .to(scenes[1], { autoAlpha: 1, duration: 0.24 }, 0.2)
            .fromTo(photos[1], { scale: 1.015, transformOrigin: '65% 48%' }, { scale: 1.055, duration: 0.48 }, 0.24)
            .to(copies[1], { autoAlpha: 1, y: 0, duration: 0.1 }, 0.38)
            .to(copies[1], { autoAlpha: 0, y: -8, duration: 0.08 }, 0.58)
            .to(scenes[2], { autoAlpha: 1, duration: 0.22 }, 0.64)
            .fromTo(photos[2], { scale: 1.01 }, { scale: 1.035, duration: 0.32 }, 0.68)
            .to(copies[2], { autoAlpha: 1, y: 0, duration: 0.12 }, 0.86);
        } else {
          root.dataset.motion = 'mobile';
          select('.visual-scene').forEach((scene: HTMLElement) => {
            gsap.fromTo(scene.querySelector('img'), { yPercent: -1, scale: 1.025 }, {
              yPercent: 1, ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: 0.3 },
            });
          });
        }
        return () => { delete root.dataset.motion; };
      }, root);
    } catch (error) {
      media.revert();
      delete root.dataset.motion;
      console.warn('A experiência está disponível em fluxo estático.', error);
    }
    return () => { media.revert(); delete root.dataset.motion; };
  }, []);

  function discover(event: MouseEvent<HTMLAnchorElement>) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById('primeiro-manifesto');
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
    target.focus({ preventScroll: true });
  }

  return (
    <>
      <section ref={rootRef} className="cinematic-opening institutional-journey" aria-label="Conheça a experiência FAUNA">
        <div className="visual-stage">
          {OPENING_NARRATIVE.map((scene, index) => (
            <section key={scene.id} className="visual-scene" data-scene={scene.id} aria-labelledby={`scene-title-${scene.id}`}>
              <InstitutionalImage media={scene.media} priority={index === 0} eager className="visual-photo" />
              <div className="visual-shade" aria-hidden="true" />
              <div className="visual-copy">
                {index === 0 ? <h1 id={`scene-title-${scene.id}`}>{scene.title}</h1> : <h2 id={`scene-title-${scene.id}`}>{scene.title}</h2>}
                {scene.signature && <p className={index === 0 ? 'visual-brand-signature' : 'visual-scene-subtitle'}>{scene.signature}</p>}
                {index === 0 && <a className="visual-discover" href="#primeiro-manifesto" onClick={discover}>Conheça a experiência <ArrowDown size={16} strokeWidth={1.25} aria-hidden="true" /></a>}
              </div>
              <p className="visual-disclosure">{VISUAL_DISCLOSURE}</p>
            </section>
          ))}
        </div>
      </section>
      <section id="nossa-essencia" className="institutional-manifesto" aria-labelledby="primeiro-manifesto">
        <p className="editorial-label">O jeito FAUNA de ser.</p>
        <h2 id="primeiro-manifesto" tabIndex={-1}>Muito mais<br />que uma <em>faculdade.</em></h2>
        <p className="institutional-manifesto-support">Um lugar para ampliar perspectivas, construir conhecimento e preparar novos caminhos profissionais.</p>
      </section>
    </>
  );
}
