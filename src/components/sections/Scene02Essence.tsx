import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';
import { SectionEyebrow } from '../ui/SectionEyebrow';

export const Scene02Essence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const photoImgRef = useRef<HTMLImageElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useReducedMotion();

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current) return;

    if (headerRef.current) {
      const units = headerRef.current.querySelectorAll('.essence-reveal');
      gsap.fromTo(
        units,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (photoWrapperRef.current) {
      gsap.fromTo(
        photoWrapperRef.current,
        { clipPath: 'inset(12% 8% 12% 8% round 1.5rem)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 1.5rem)',
          duration: 1.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: photoWrapperRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (photoImgRef.current && photoWrapperRef.current) {
      gsap.fromTo(
        photoImgRef.current,
        { yPercent: -10, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: photoWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1
          }
        }
      );
    }

    if (textColRef.current) {
      const pieces = textColRef.current.querySelectorAll('.essence-copy');
      gsap.fromTo(
        pieces,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textColRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (statsRef.current) {
      const cards = Array.from(statsRef.current.children);
      gsap.fromTo(
        cards,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 86%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, containerRef);

  return (
    <section
      id="nossa-essencia"
      ref={containerRef}
      className="py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden -mt-16 pt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-3xl mb-16">
          <div className="essence-reveal">
            <SectionEyebrow>Nossa Essência</SectionEyebrow>
          </div>
          <h2 className="essence-reveal text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#123524] leading-[1.15] text-balance">
            Uma faculdade que nasce na Amazônia pensando no mundo.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div
              ref={photoWrapperRef}
              className="relative overflow-hidden rounded-3xl shadow-xl bg-[#E8E1D2] will-change-transform"
            >
              <img
                ref={photoImgRef}
                src="/assets/estudantes_inovacao_amazonia.jpg"
                alt="Estudantes em ambiente contemporâneo de aprendizagem"
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] sm:h-[500px] object-cover will-change-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/fauna-photo-2-DMa52OaB.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] tracking-widest uppercase text-[#E5C879] block mb-1">
                  Formação centrada na prática
                </span>
                <p className="text-base sm:text-lg font-serif italic text-[#FAF8F5]">
                  “A essência do nosso propósito é ofertar formação individualizada, como se fosse feita à mão para fazer a diferença.”
                </p>
              </div>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D2] shadow-xs hover:-translate-y-0.5 transition-transform duration-300">
                <span className="block text-xl font-serif font-semibold text-[#123524]">Boutique</span>
                <span className="block text-xs text-[#57685F] mt-0.5">Atendimento personalizado e turmas com foco discente</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D2] shadow-xs hover:-translate-y-0.5 transition-transform duration-300">
                <span className="block text-xl font-serif font-semibold text-[#123524]">Prática</span>
                <span className="block text-xs text-[#57685F] mt-0.5">Vivência real e aplicação desde os primeiros períodos</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white border border-[#E8E1D2] shadow-xs hover:-translate-y-0.5 transition-transform duration-300">
                <span className="block text-xl font-serif font-semibold text-[#123524]">Amazônica</span>
                <span className="block text-xs text-[#57685F] mt-0.5">Compromisso com o território e bioeconomia regional</span>
              </div>
            </div>
          </div>

          <div ref={textColRef} className="lg:col-span-5 space-y-8">
            <div className="essence-copy space-y-4 text-[#47574E] text-base leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#123524]">
                A FAUNA une rigor acadêmico, visão de futuro e compromisso indissociável com o lugar onde nasceu. Mais do que diplomar profissionais, somos uma instituição calculada para transformar conhecimento em possibilidades concretas.
              </p>
              <p>
                Em Barcarena, polo estratégico que conecta a riqueza natural, os grandes corredores hidroviários e a indústria sustentável, a educação precisa ser viva, prática e conectada à realidade das pessoas.
              </p>
            </div>

            <div className="essence-copy p-6 rounded-2xl bg-[#123524] text-[#FAF8F5] relative overflow-hidden shadow-md">
              <div className="relative z-10 space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A44C] block">
                  Posicionamento institucional
                </span>
                <h3 className="text-xl font-serif font-semibold text-white">
                  Um território de encontros, ideias e novas trajetórias.
                </h3>
                <p className="text-xs text-[#B2C5BC] leading-relaxed">
                  Nossos estudantes têm nome, identidade e acompanhamento direto. Acolhimento em um ambiente pensado para ser a extensão de suas casas.
                </p>
                <div className="pt-2">
                  <Link
                    to="/institucional"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C879] hover:text-white transition-colors"
                  >
                    <span>Conheça nossa trajetória completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
