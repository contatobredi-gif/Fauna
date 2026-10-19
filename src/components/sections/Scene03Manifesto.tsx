import React, { useRef } from 'react';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap, MOTION_CONFIG } from '../../utils/motionConfig';
import { SectionEyebrow } from '../ui/SectionEyebrow';

export const Scene03Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const wordsContainerRef = useRef<HTMLParagraphElement>(null);
  const quoteDeckRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current || !wordsContainerRef.current) return;

    const isDesktop = MOTION_CONFIG.isDesktop();
    const wordElements = wordsContainerRef.current.querySelectorAll('.manifesto-word');
    const highlight = wordsContainerRef.current.querySelectorAll('.manifesto-highlight');
    if (!wordElements.length) return;

    if (isDesktop && pinTargetRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=95%',
          pin: pinTargetRef.current,
          scrub: 0.75,
          anticipatePin: 1
        }
      });

      gsap.set(wordElements, { opacity: 0.18, y: 6 });
      tl.to(wordElements, {
        opacity: 1,
        y: 0,
        stagger: 0.09,
        ease: 'none'
      });

      if (highlight.length) {
        tl.to(
          highlight,
          {
            color: '#E5C879',
            textShadow: '0 0 28px rgba(201,164,76,0.28)',
            duration: 0.35,
            ease: 'power1.out'
          },
          '-=0.15'
        );
      }

      if (quoteDeckRef.current) {
        gsap.set(quoteDeckRef.current, { opacity: 0.28, y: 12 });
        tl.to(
          quoteDeckRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'none'
          },
          '-=0.12'
        );
      }
    } else {
      gsap.fromTo(
        wordElements,
        { opacity: 0.28, y: 8 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: wordsContainerRef.current,
            start: 'top 82%',
            end: 'bottom 55%',
            scrub: 0.4
          }
        }
      );

      if (quoteDeckRef.current) {
        gsap.fromTo(
          quoteDeckRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: quoteDeckRef.current,
              start: 'top 88%'
            }
          }
        );
      }
    }
  }, containerRef);

  const line1 = ['“Nascemos', 'na', 'Amazônia.'];
  const line2 = ['Para', 'formar', 'quem', 'vai'];
  const lineHighlight = ['transformar', 'o', 'mundo.”'];

  return (
    <section ref={containerRef} className="relative bg-[#06150E] text-white overflow-hidden">
      <div
        ref={pinTargetRef}
        className="min-h-[100svh] flex flex-col justify-center items-center py-24 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#123524_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#123524]/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
          <SectionEyebrow tone="forest" className="mb-0">
            Manifesto FAUNA
          </SectionEyebrow>

          <blockquote className="space-y-4">
            <span className="sr-only">
              Nascemos na Amazônia. Para formar quem vai transformar o mundo.
            </span>

            <p
              ref={wordsContainerRef}
              aria-hidden="true"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] text-[#FAF8F5] tracking-tight text-balance select-none"
            >
              <span className="block mb-2">
                {line1.map((word, idx) => (
                  <span
                    key={`l1-${idx}`}
                    className={`inline-block mr-[0.28em] manifesto-word ${
                      reducedMotion ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>

              <span className="block">
                {line2.map((word, idx) => (
                  <span
                    key={`l2-${idx}`}
                    className={`inline-block mr-[0.28em] manifesto-word ${
                      reducedMotion ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    {word}
                  </span>
                ))}

                {lineHighlight.map((word, idx) => (
                  <span
                    key={`lh-${idx}`}
                    className={`inline-block mr-[0.25em] manifesto-word manifesto-highlight font-medium text-[#E5C879] underline decoration-[#C9A44C]/50 underline-offset-8 ${
                      reducedMotion ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </p>
          </blockquote>

          <div
            ref={quoteDeckRef}
            className="max-w-2xl mx-auto space-y-3 pt-6 border-t border-[#163A2B]/80 text-[#C1D4CA]"
          >
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Somos daqui. Conhecemos este território. Temos raízes firmes na terra e nas águas do Pará. E nossa ambição acadêmica não reconhece barreiras geográficas.
            </p>
            <p className="text-xs sm:text-sm text-[#8EA89C] uppercase tracking-widest">
              Barcarena · Pará · Amazônia · Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
