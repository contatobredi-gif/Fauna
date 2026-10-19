import React, { useRef } from 'react';
import { Compass } from 'lucide-react';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { MOTION_CONFIG } from '../../utils/motionConfig';

export const Scene03Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const wordsContainerRef = useRef<HTMLParagraphElement>(null);
  const quoteDeckRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  useGSAPScene(({}) => {
    if (reducedMotion || !containerRef.current || !wordsContainerRef.current) return;

    import('../../utils/motionConfig').then(({ gsap }) => {
      const isDesktop = MOTION_CONFIG.isDesktop();
      const wordElements = wordsContainerRef.current?.querySelectorAll('.manifesto-word');

      if (!wordElements || wordElements.length === 0) return;

      if (isDesktop) {
        // Desktop pinned section with progressive word lighting
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=120%', // Controlled pin distance
            pin: pinTargetRef.current,
            scrub: 0.8,
            anticipatePin: 1
          }
        });

        // Initialize words at dimmed state
        gsap.set(wordElements, { opacity: 0.18, y: 6 });

        // Stagger illuminate each word to full vibrancy
        tl.to(wordElements, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power1.inOut'
        });

        // Illuminate the deck text as the climax approaches
        if (quoteDeckRef.current) {
          gsap.set(quoteDeckRef.current, { opacity: 0.3, y: 15 });
          tl.to(quoteDeckRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          }, '-=0.2');
        }
      } else {
        // Mobile: Natural scroll reveal without intrusive screen lock
        gsap.fromTo(
          wordElements,
          { opacity: 0.25, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: wordsContainerRef.current,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: 0.5
            }
          }
        );

        if (quoteDeckRef.current) {
          gsap.fromTo(
            quoteDeckRef.current,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: quoteDeckRef.current,
                start: 'top 85%'
              }
            }
          );
        }
      }
    });
  }, containerRef);

  // Accessible phrase split
  // “Nascemos na Amazônia. Para formar quem vai transformar o mundo.”
  const line1 = ['“Nascemos', 'na', 'Amazônia.'];
  const line2 = ['Para', 'formar', 'quem', 'vai'];
  const lineHighlight = ['transformar', 'o', 'mundo.”'];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#06150E] text-white overflow-hidden"
    >
      {/* Pinned Target Container for Desktop */}
      <div
        ref={pinTargetRef}
        className="min-h-screen flex flex-col justify-center items-center py-24 px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Subtle organic Amazonian background texture & glow */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#123524_1px,transparent_1px)] [background-size:32px_32px]" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#123524]/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
          
          {/* Chapter Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C9A44C] uppercase">
            <Compass className="w-4 h-4" />
            <span>03 / MANIFESTO FAUNA</span>
          </div>

          {/* Monumental Progressive Text */}
          <blockquote className="space-y-4">
            {/* Screen reader only full sentence for zero duplication */}
            <span className="sr-only">
              Nascemos na Amazônia. Para formar quem vai transformar o mundo.
            </span>

            {/* Visual Animated Words */}
            <p
              ref={wordsContainerRef}
              aria-hidden="true"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] text-[#FAF8F5] tracking-tight text-balance select-none"
            >
              <span className="block mb-2">
                {line1.map((w, idx) => (
                  <span
                    key={`l1-${idx}`}
                    className={`inline-block mr-[0.28em] manifesto-word ${
                      reducedMotion ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </span>

              <span className="block">
                {line2.map((w, idx) => (
                  <span
                    key={`l2-${idx}`}
                    className={`inline-block mr-[0.28em] manifesto-word ${
                      reducedMotion ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    {w}
                  </span>
                ))}
                
                {/* Climax highlight */}
                {lineHighlight.map((w, idx) => (
                  <span
                    key={`lh-${idx}`}
                    className={`inline-block mr-[0.25em] manifesto-word font-medium text-[#E5C879] underline decoration-[#C9A44C]/50 underline-offset-8 ${
                      reducedMotion ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </p>
          </blockquote>

          {/* Narrative Expansion */}
          <div
            ref={quoteDeckRef}
            className="max-w-2xl mx-auto space-y-3 pt-6 border-t border-[#163A2B]/80 text-[#C1D4CA]"
          >
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Somos daqui. Conhecemos este território. Temos raízes firmes na terra e nas águas do Pará. E nossa ambição acadêmica não reconhece barreiras geográficas.
            </p>
            <p className="text-xs sm:text-sm text-[#8EA89C] uppercase tracking-widest font-mono">
              Barcarena · Pará · Amazônia · Brasil
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
