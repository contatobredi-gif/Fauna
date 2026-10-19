import React, { useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';

interface Props {
  onOpenInterest: () => void;
}

export const Scene10Conversion: React.FC<Props> = ({ onOpenInterest }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current || !bgImgRef.current) return;

    // Subtle background zoom on scroll into view
    gsap.fromTo(
      bgImgRef.current,
      { scale: 1.02 },
      {
        scale: 1.14,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      }
    );

    // Subtle entrance for content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0.85, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 82%'
          }
        }
      );
    }
  }, containerRef);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#06150E] text-white overflow-hidden"
    >
      {/* Background Aerial Amazonian Canopy */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src="/assets/amazonia_hero_aerial.jpg"
          alt="Paisagem aérea amazônica"
          className="w-full h-full object-cover object-center opacity-30 filter saturate-50 will-change-transform scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/amazonia_hero_aerial_1792412120513.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06150E] via-[#06150E]/80 to-[#06150E]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
      >
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C9A44C]/30 backdrop-blur-md text-xs font-mono text-[#E5C879]">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A44C]" />
          <span className="uppercase tracking-widest">10 / SEU PRÓXIMO PASSO</span>
        </div>

        {/* Monumental Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FAF8F5] leading-tight text-balance">
          O próximo capítulo da sua história começa aqui.
        </h2>

        {/* Narrative Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C7DAD0] font-light leading-relaxed text-balance">
          Estude em uma faculdade desenhada para inspirar seu potencial, valorizar suas raízes e abrir portas em qualquer lugar do mundo.
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenInterest}
            className="w-full sm:w-auto px-8 py-4 bg-[#C9A44C] hover:bg-[#D8B45E] text-[#123524] text-sm font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Inscrever-se no Processo Seletivo
          </button>
          
          <Link
            to="/cursos"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explorar Todos os Cursos</span>
            <ArrowRight className="w-4 h-4 text-[#C9A44C]" />
          </Link>
        </div>

        {/* Operational Highlights */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left border-t border-white/10 text-xs text-[#A8C0B3]">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C9A44C] mt-0.5" />
            <div>
              <strong className="text-white block font-medium">Bolsas & Descontos</strong>
              <span>Programas exclusivos com até 80% de abatimento progressivo.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C9A44C] mt-0.5" />
            <div>
              <strong className="text-white block font-medium">Ingresso Flexível</strong>
              <span>Vestibular agendado, nota do ENEM ou 2ª graduação simplificada.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C9A44C] mt-0.5" />
            <div>
              <strong className="text-white block font-medium">Acolhimento Boutique</strong>
              <span>Acompanhamento docente individualizado do início à formatura.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
