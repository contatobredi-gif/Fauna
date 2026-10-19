import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';
import { SectionEyebrow } from '../ui/SectionEyebrow';

interface SpaceItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  image: string;
  validationStatus: string;
}

export const Scene07Campus: React.FC = () => {
  const [activeImage, setActiveImage] = useState<SpaceItem | null>(null);
  const [needsNav, setNeedsNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  const spaces: SpaceItem[] = [
    {
      id: 'bioclimatico',
      name: 'Pavilhão Central & Jardins Bioclimáticos',
      category: 'Arquitetura Sustentável',
      desc: 'Estruturas abertas em madeira certificada e vidro, desenhadas para ventilação natural tropical e harmonia botânica com a floresta.',
      image: '/assets/campus_architecture_modern.jpg',
      validationStatus: 'Conceito arquitetônico do Polo Barcarena'
    },
    {
      id: 'simulacao',
      name: 'Laboratórios de Simulação Realística',
      category: 'Saúde & Prática',
      desc: 'Ambientes preparados para o aprendizado prático de Enfermagem, Biomedicina e saúde com manequins anatômicos e tecnologia clínica.',
      image: '/assets/fauna-photo-4-Bot9x6Jv.jpg',
      validationStatus: 'Instalações laboratoriais em implantação'
    },
    {
      id: 'auditorio',
      name: 'Auditório Magna & Eventos Acadêmicos',
      category: 'Cultura & Solenidades',
      desc: 'Espaço nobre para a Solenidade do Manto, premiações de Mérito Acadêmico, congressos e palestras com grandes nomes.',
      image: '/assets/fauna-photo-5-0dhzBddg.jpg',
      validationStatus: 'Complexo de convivência e solenidades'
    },
    {
      id: 'estudos',
      name: 'Commons de Aprendizagem & Biblioteca',
      category: 'Pesquisa & Convivência',
      desc: 'Salas integradas de estudo individual e em grupo, com terminais de pesquisa digital e acervo bibliográfico contemporâneo.',
      image: '/assets/fauna-photo-8-Ce0rlf9T.jpg',
      validationStatus: 'Espaços de convivência integrados'
    }
  ];

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('[data-campus-card]');
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, containerRef);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const measure = () => {
      setNeedsNav(scroller.scrollWidth > scroller.clientWidth + 4);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(scroller);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    lastFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeBtnRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      lastFocusRef.current?.focus();
    };
  }, [activeImage]);

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector('[data-campus-card]') as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 280) + 24;
    scroller.scrollBy({
      left: direction * amount,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <section
      id="campus"
      ref={containerRef}
      className="py-24 bg-[#FAF8F5] text-[#1D2B24] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Campus FAUNA</SectionEyebrow>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight">
              Um espaço para viver o conhecimento.
            </h2>
          </div>

          <p className="text-xs text-[#57685F] max-w-sm leading-relaxed">
            Imagens conceituais e de referência. Não representam, por si só, instalações já homologadas em Barcarena.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {needsNav && (
          <div className="flex justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="w-10 h-10 rounded-full border border-[#E5DFD3] bg-white text-[#123524] hover:border-[#C9A44C] hover:text-[#8A6D3B] transition-colors"
              aria-label="Ver espaços anteriores"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="w-10 h-10 rounded-full border border-[#E5DFD3] bg-white text-[#123524] hover:border-[#C9A44C] hover:text-[#8A6D3B] transition-colors"
              aria-label="Ver próximos espaços"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
            </button>
          </div>
        )}

        <div
          ref={scrollerRef}
          className="overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="flex w-max mx-auto gap-5">
            {spaces.map((space) => (
              <button
                key={space.id}
                type="button"
                data-campus-card
                onClick={() => setActiveImage(space)}
                className="w-[min(17.25rem,82vw)] lg:w-[17.5rem] shrink-0 snap-start group bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden hover:border-[#C9A44C] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden bg-[#0A1F15]">
                  <img
                    src={space.image}
                    alt={space.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/fauna-photo-4-Bot9x6Jv.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#E5C879] block">
                      {space.category}
                    </span>
                    <span className="text-xs text-white/80 font-light block line-clamp-1">
                      {space.validationStatus}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#123524] group-hover:text-[#8A6D3B] transition-colors mb-2">
                      {space.name}
                    </h3>
                    <p className="text-xs text-[#57685F] leading-relaxed line-clamp-3">
                      {space.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-1.5 text-xs text-[#123524] font-medium group-hover:text-[#8A6D3B] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ampliar fotografia</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="campus-photo-title"
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[50vh] sm:h-[60vh] bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.name}
                className="w-full h-full object-contain"
              />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors min-h-11 min-w-11"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#FAF8F5]">
              <div className="flex items-center justify-between gap-3 text-xs text-[#8A6D3B] uppercase mb-1">
                <span>{activeImage.category}</span>
                <span>{activeImage.validationStatus}</span>
              </div>
              <h4 id="campus-photo-title" className="text-2xl font-serif font-bold text-[#123524] mb-2">
                {activeImage.name}
              </h4>
              <p className="text-sm text-[#57685F] leading-relaxed">
                {activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
