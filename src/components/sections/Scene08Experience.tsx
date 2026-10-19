import React, { useState, useRef } from 'react';
import { Crown, Sparkles, HeartHandshake, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';
import { SectionEyebrow } from '../ui/SectionEyebrow';

export const Scene08Experience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const experiences = [
    {
      id: 'merito',
      icon: Crown,
      title: 'Premiação Mérito FAUNA',
      subtitle: 'Reconhecimento de Alto Padrão',
      desc: 'Tradição institucional recuperada: o Mérito FAUNA é uma premiação anual aos melhores de cada curso, com homenagem em solenidade. A realização do rito em Barcarena depende de calendário oficial ainda não publicado.',
      highlight: 'Premiação anual aos melhores de cada curso',
      image: '/assets/fauna-photo-5-0dhzBddg.jpg',
      actionText: 'Conheça o regulamento do Mérito'
    },
    {
      id: 'manto-kits',
      icon: Award,
      title: 'Solenidade do Manto & Kits Oficiais',
      subtitle: 'Rito de Passagem Acadêmico',
      desc: 'Tradição institucional da IES: solenidades do Manto Oficial e entrega de kits acadêmicos de Enfermagem e Odontologia. O calendário desses ritos em Barcarena ainda não foi publicado.',
      highlight: 'Compromisso ético e instrumental de ponta',
      image: '/assets/fauna-photo-4-Bot9x6Jv.jpg',
      actionText: 'Saiba mais sobre a solenidade'
    },
    {
      id: 'talentos',
      icon: Briefcase,
      title: 'Talentos S/A & Carreiras',
      subtitle: 'Conexão Direta com a Indústria',
      desc: 'Programa institucional de capacitação e inserção profissional (Profissional S/A / Talentos S/A), desenvolvido no curso de Recursos Humanos da FAUNA. Convênios de Barcarena permanecem em formalização.',
      highlight: 'Empregabilidade e rede de estágios',
      image: '/assets/fauna-photo-6-R9k6EWW6.jpg',
      actionText: 'Ver oportunidades de carreira'
    },
    {
      id: 'acolher',
      icon: HeartHandshake,
      title: 'Projeto Acolher',
      subtitle: 'Ações Sociais e Comunitárias',
      desc: 'O projeto institucional “Acolher – Ação que Transforma” envolve direção, professores, estudantes e parceiros em ações de documentação, saúde, odontologia, jurídico e palestras. A agenda específica de Barcarena ainda não foi publicada.',
      highlight: 'Impacto social real no território',
      image: '/assets/fauna-photo-7-DCo2z3Ij.jpg',
      actionText: 'Conheça nossos projetos sociais'
    }
  ];

  const current = experiences[selectedTab];

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current) return;

    if (spotlightRef.current) {
      gsap.fromTo(
        spotlightRef.current,
        { opacity: 0.85, y: 8 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }
  }, containerRef, [selectedTab]);

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#FAF8F5] text-[#1D2B24]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C9A44C]" />
            <SectionEyebrow className="mb-0">Experiência FAUNA</SectionEyebrow>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight text-balance">
            A faculdade acontece muito além da sala de aula.
          </h2>
          <p className="text-sm sm:text-base text-[#57685F] mt-3 font-light leading-relaxed">
            Ritos de passagem, reconhecimento meritocrático, inserção profissional e impacto social que marcam para sempre a trajetória do estudante.
          </p>
        </div>

        {/* Interactive Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {experiences.map((exp, idx) => {
              const isSelected = selectedTab === idx;
              const Icon = exp.icon;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#123524] text-white border-[#123524] shadow-md transform -translate-x-1'
                      : 'bg-white text-[#1D2B24] border-[#E5DFD3] hover:border-[#C9A44C]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#C9A44C] text-[#123524]' : 'bg-[#F4EEE3] text-[#123524]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-[11px] font-mono uppercase tracking-wider block ${
                        isSelected ? 'text-[#E5C879]' : 'text-[#8A6D3B]'
                      }`}>
                        {exp.subtitle}
                      </span>
                      <h3 className="font-serif text-lg font-bold">
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'translate-x-1 text-[#C9A44C]' : 'opacity-30'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Focused Editorial Spotlight Box (7 cols) with Real Image Accent */}
          <div
            ref={spotlightRef}
            className="lg:col-span-7 bg-[#FAF5EE] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#8A6D3B] uppercase tracking-wider">
                <span>{current.subtitle}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#123524] leading-tight">
                {current.title}
              </h3>

              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#123524] text-[#E5C879] text-xs font-semibold">
                ★ {current.highlight}
              </div>

              <p className="text-sm sm:text-base text-[#47574E] leading-relaxed font-light">
                {current.desc}
              </p>

              {/* Photo Preview Accent */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-black/10 border border-[#E5DFD3]">
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/fauna-photo-2-DMa52OaB.jpg';
                  }}
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <span className="text-xs text-[#697A72]">
                Tradição viva da FAUNA presente na vida dos estudantes.
              </span>
              <Link
                to="/beneficios"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123524] text-white hover:bg-[#0A1F15] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                <span>{current.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A44C]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
