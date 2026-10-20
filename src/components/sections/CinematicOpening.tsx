import { useLayoutEffect, useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '../../utils/motionConfig';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { CINEMATIC_OPENING_MEDIA, type CinematicOpeningMedia } from '../../data/cinematicOpening';
import { EnrollmentCta } from '../ui/EnrollmentCta';
import './cinematic-opening.css';

function DocumentaryMedia({ media, reducedMotion }: { media: CinematicOpeningMedia; reducedMotion: boolean }) {
  if (media.kind === 'typography') return null;
  if (media.kind === 'photograph') return <img src={media.src} alt={media.description} decoding="async" />;
  if (reducedMotion) return <img src={media.poster} alt={media.description} decoding="async" />;
  return <video src={media.src} poster={media.poster} aria-label={media.description} autoPlay muted loop playsInline preload="metadata" />;
}

export function CinematicOpening() {
  const rootRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();
  const pendingFocusCleanup = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    try {
      media.add({
        desktop: '(min-width: 900px)',
        mobile: '(max-width: 899px)',
        motion: '(prefers-reduced-motion: no-preference)',
      }, (context) => {
        const { desktop, motion } = context.conditions ?? {};
        if (!motion) return;
        root.dataset.motion = desktop ? 'desktop' : 'mobile';
        const select = gsap.utils.selector(root);
        const brand = select('.opening-brand');
        const subtitle = select('.opening-subtitle');
        const cue = select('.opening-scroll');
        const manifesto = select('.opening-manifesto');
        const lines = select('.opening-manifesto-line');
        const details = select('.opening-manifesto-details');

        if (desktop) {
          gsap.set(manifesto, { autoAlpha: 0 });
          gsap.set(lines, { yPercent: 110 });
          gsap.set(details, { opacity: 0, y: 16 });
          const timeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              id: 'fauna-cinematic-opening',
              trigger: root,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          });
          timeline
            .to(cue, { autoAlpha: 0, y: -16, duration: 0.12 }, 0)
            .to(subtitle, { autoAlpha: 0, y: -30, duration: 0.2 }, 0.04)
            .to(brand, { scale: 2.8, yPercent: -14, duration: 0.56, transformOrigin: '50% 56%' }, 0)
            .to(brand, { autoAlpha: 0, duration: 0.17 }, 0.35)
            .fromTo(select('.opening-aperture'),
              { clipPath: 'inset(50% 50% 50% 50%)' },
              { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.46 }, 0.22)
            .to(select('.opening-documentary'), { opacity: 0, duration: 0.16 }, 0.58)
            .set(manifesto, { autoAlpha: 1 }, 0.24)
            .to(lines, { yPercent: 0, duration: 0.34, stagger: 0.055, ease: 'power2.out' }, 0.26)
            .to(details, { opacity: 1, y: 0, duration: 0.15 }, 0.73)
            .to({}, { duration: 0.03 }, 0.97);
        } else {
          // No mobile, duas composições em fluxo natural, sem pin ou zoom ampliado.
          gsap.to(brand, {
            y: -38, scale: 1.08, ease: 'none',
            scrollTrigger: { trigger: select('.opening-identity')[0], start: 'top top', end: 'bottom top', scrub: 0.35 },
          });
          gsap.to(cue, {
            opacity: 0, ease: 'none',
            scrollTrigger: { trigger: select('.opening-identity')[0], start: 'top top', end: '35% top', scrub: true },
          });
          gsap.fromTo(lines, { y: 30, opacity: 0.3 }, {
            y: 0, opacity: 1, stagger: 0.07, ease: 'none',
            scrollTrigger: { trigger: manifesto[0], start: 'top 82%', end: 'center 55%', scrub: 0.4 },
          });
        }
        return () => { delete root.dataset.motion; };
      }, root);
    } catch (error) {
      media.revert();
      delete root.dataset.motion;
      console.warn('A abertura FAUNA está sendo exibida sem animação.', error);
    }
    return () => {
      media.revert();
      delete root.dataset.motion;
    };
  }, []);

  function discover(event: MouseEvent<HTMLAnchorElement>) {
    const root = rootRef.current;
    const target = manifestoRef.current;
    if (!root || !target || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const top = root.dataset.motion === 'desktop'
      ? root.getBoundingClientRect().top + window.scrollY + (root.offsetHeight - window.innerHeight) * 0.98
      : target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? 'instant' : 'smooth' });
    pendingFocusCleanup.current?.();
    const previousFocus = document.activeElement;
    const finish = () => {
      pendingFocusCleanup.current?.();
      if (document.querySelector('#menu-mobile') || document.activeElement !== previousFocus) return;
      target.focus({ preventScroll: true });
    };
    const timer = window.setTimeout(finish, reducedMotion ? 0 : 1500);
    window.addEventListener('scrollend', finish, { once: true });
    pendingFocusCleanup.current = () => {
      window.clearTimeout(timer);
      window.removeEventListener('scrollend', finish);
      pendingFocusCleanup.current = null;
    };
  }

  return (
    <section ref={rootRef} className="cinematic-opening" aria-label="A experiência FAUNA">
      <div className="opening-stage">
        <div className="opening-identity">
          <div className="opening-wordmark">
            <h1 className="opening-brand">FAUNA<span className="sr-only"> — Faculdade Universo da Amazônia</span></h1>
            <p className="opening-subtitle">A faculdade boutique</p>
          </div>
          <div className="opening-footline">
            <span className="opening-territory">Barcarena · Pará</span>
            <a className="opening-scroll" href="#primeiro-manifesto" onClick={discover}>
              <span>Um novo olhar sobre a formação</span>
              <ArrowDown aria-hidden="true" size={16} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div className="opening-aperture">
          <div className="opening-documentary">
            <DocumentaryMedia media={CINEMATIC_OPENING_MEDIA} reducedMotion={reducedMotion} />
          </div>
        <div className="opening-manifesto">
          <div className="opening-manifesto-intro" aria-hidden="true">O jeito FAUNA de ser.</div>
          <h2 id="primeiro-manifesto" ref={manifestoRef} tabIndex={-1} className="opening-manifesto-title">
            <span className="opening-line-mask"><span className="opening-manifesto-line">Muito mais</span></span>{' '}
            <span className="opening-line-mask"><span className="opening-manifesto-line">que uma</span></span>{' '}
            <span className="opening-line-mask"><span className="opening-manifesto-line opening-emphasis">faculdade.</span></span>
          </h2>
          <div className="opening-manifesto-details">
            <p>Um território de encontros,<br />ideias e novas trajetórias.</p>
            <div className="opening-actions">
              <Link to="/cursos">Conheça os cursos <ArrowUpRight size={17} strokeWidth={1.25} aria-hidden="true" /></Link>
              <EnrollmentCta kind="vestibular" className="opening-enrollment">Processo Seletivo Barcarena</EnrollmentCta>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
