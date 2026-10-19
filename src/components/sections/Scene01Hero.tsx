import React, { useRef } from 'react';
import { ArrowDown, ChevronRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  onOpenInterest: () => void;
}

export const Scene01Hero: React.FC<Props> = ({ onOpenInterest }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const deckRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  useGSAPScene(({}) => {
    if (reducedMotion || !containerRef.current) return;

    import('../../utils/motionConfig').then(({ gsap }) => {
      // 1. Initial Entrance Timeline (< 1.8s, non-blocking)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Ensure elements start in correct state
      gsap.set([tagRef.current, titleRef.current, deckRef.current, actionsRef.current, scrollCueRef.current], {
        opacity: 0,
        y: 24
      });

      tl.to(bgImageRef.current, {
        scale: 1.05,
        duration: 1.4,
        ease: 'power2.out'
      }, 0)
      .to(tagRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, 0.2)
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, 0.4)
      .to(deckRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, 0.6)
      .to(actionsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, 0.75)
      .to(scrollCueRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, 0.9);

      // 2. Scroll-Linked Cinematic Scrub
      gsap.to(bgImageRef.current, {
        scale: 1.18,
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to(contentRef.current, {
        yPercent: 35,
        opacity: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '85% top',
          scrub: 1
        }
      });
    });
  }, containerRef);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06150E] text-white"
    >
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src="/assets/amazonia_hero_aerial.jpg"
          alt="Floresta e rios amazônicos em Barcarena, Pará"
          className="w-full h-full object-cover object-center will-change-transform scale-105"
          onError={(e) => {
            // Fallback to secondary path if needed
            (e.target as HTMLImageElement).src = '/assets/amazonia_hero_aerial_1792412120513.jpg';
          }}
        />
        {/* Measured Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06150E] via-[#06150E]/60 to-[#06150E]/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#06150E]/40 to-[#06150E]/80" />
      </div>

      {/* Hero Content Container */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 will-change-transform"
      >
        {/* Step 1: Territorial Tagline */}
        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#C9A44C]/30 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
          <span className="text-[11px] uppercase tracking-widest font-medium text-[#FAF8F5]">
            FAUNA Barcarena · Pará
          </span>
          <span className="text-white/40">·</span>
          <span className="text-[11px] text-[#E5C879]">Da Amazônia para o mundo</span>
        </div>

        {/* Step 2: Monumental Headline */}
        <h1
          ref={titleRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF8F5] leading-[1.05] mb-6 text-balance"
        >
          Formação de excelência.
          <br />
          <span className="italic font-light text-[#E5C879]">Raízes amazônicas.</span>
          <br />
          Horizontes sem fronteiras.
        </h1>

        {/* Step 3: Narrative Deck */}
        <p
          ref={deckRef}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#D0DFD6] font-light leading-relaxed mb-10 text-balance"
        >
          Uma nova experiência de ensino superior em Barcarena, conectando conhecimento contemporâneo, inovação e oportunidades para transformar a Amazônia e alcançar o mundo.
        </p>

        {/* Step 4: Action Buttons */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            type="button"
            onClick={onOpenInterest}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A44C] hover:bg-[#D8B45E] text-[#123524] text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Processo Seletivo Barcarena
          </button>
          
          <Link
            to="/cursos"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF8F5] text-sm font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <span>Conheça os Cursos</span>
            <ChevronRight className="w-4 h-4 text-[#C9A44C]" />
          </Link>
        </div>

        {/* Step 5: Chapter Marker & Scroll Cue */}
        <div
          ref={scrollCueRef}
          className="mt-16 flex flex-col items-center gap-2 text-xs text-[#A3B8AD]"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#C9A44C]/80 font-mono">
            01 / CAPÍTULO ORIGEM
          </span>
          <a
            href="#nossa-essencia"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors py-2"
            aria-label="Rolar para a próxima seção"
          >
            <span className="text-xs">Descubra a FAUNA</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C9A44C]" />
          </a>
        </div>
      </div>
    </section>
  );
};
