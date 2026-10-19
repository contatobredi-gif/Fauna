import React, { useRef } from 'react';
import { Award, Users, Cpu, Trees, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';

export const Scene05Knowledge: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const pillars = [
    {
      icon: Award,
      title: 'Formação com identidade',
      desc: 'A instituição declara ir além da diplomação formal: os estudantes FAUNA são apresentados como pessoas com identidade, ética e postura profissional.'
    },
    {
      icon: Users,
      title: 'Acolhimento personalizado',
      desc: 'A mensagem da Diretoria descreve atendimento próximo, em ambiente pensado como extensão da casa do estudante — sem afirmar quadro docente do polo Barcarena.'
    },
    {
      icon: Cpu,
      title: 'Inovação institucional',
      desc: 'A FAUNA apresenta o pioneirismo como marca da metodologia Saber Mais. Ambientes digitais e laboratórios de Barcarena serão descritos quando houver confirmação oficial.'
    },
    {
      icon: Trees,
      title: 'Conexão com a Amazônia',
      desc: 'Missão e visão institucionais comprometem a FAUNA com o desenvolvimento regional, cultural e ambiental do Pará — recorte que este site leva a Barcarena.'
    },
    {
      icon: Target,
      title: 'Método Saber Mais',
      desc: 'Metodologia exclusiva da FAUNA, recuperada do texto institucional: transformar sonhos em realidade por meio da educação.'
    },
    {
      icon: Sparkles,
      title: 'Inserção profissional',
      desc: 'O programa institucional de capacitação e inserção no mercado (Profissional S/A / Talentos S/A) pertence à IES. Convênios de Barcarena ainda não foram publicados.'
    }
  ];

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current || !gridRef.current) return;

    const items = gridRef.current ? Array.from(gridRef.current.children) : [];
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, containerRef);

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#123524] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-[#1A4B34]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#C9A44C] mb-3">
            Conhecimento em movimento
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight text-balance">
            Educação que transforma sonhos em realidade.
          </h2>
          <p className="text-[#A3B8AD] text-base mt-4 font-light leading-relaxed">
            A FAUNA articula ensino, pesquisa e extensão com empreendedorismo, inovação e sustentabilidade — e apresenta Barcarena como o recorte territorial deste site.
          </p>
        </div>

        {/* Pillars Grid with Stagger Entrance */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-3xl bg-[#0E281C]/90 border border-[#1C4E36] hover:border-[#C9A44C]/60 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#123524] border border-[#C9A44C]/30 flex items-center justify-center text-[#E5C879] group-hover:scale-110 transition-transform mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-[#9BB1A6] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footnote Link */}
        <div className="mt-14 text-center">
          <Link
            to="/institucional#metodo-saber-mais"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C9A44C] hover:text-[#FAF8F5] transition-colors"
          >
            <span>Descubra como o Método Saber Mais é aplicado na rotina acadêmica →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
