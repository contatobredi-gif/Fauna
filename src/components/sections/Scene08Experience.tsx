import React, { useState } from 'react';
import { Crown, Sparkles, HeartHandshake, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Scene08Experience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const experiences = [
    {
      id: 'merito',
      icon: Crown,
      title: 'Premiação Mérito FAUNA',
      subtitle: 'Reconhecimento de Alto Padrão',
      desc: 'Anualmente, a FAUNA celebra os melhores estudantes de cada turma com uma solenidade de gala no melhor estilo Hollywood. Os formandos de maior destaque acadêmico são agraciados com uma joia exclusiva de ouro e rubi.',
      highlight: 'Anel exclusivo em ouro e rubi',
      actionText: 'Conheça o regulamento do Mérito'
    },
    {
      id: 'manto-kits',
      icon: Award,
      title: 'Solenidade do Manto & Kits Oficiais',
      subtitle: 'Rito de Passagem Acadêmico',
      desc: 'Na área da saúde, os alunos recebem o Manto Oficial em um evento solene que formaliza seu compromisso ético com a vida e a ciência. Além disso, a FAUNA fornece kits de instrumental de alto padrão para as práticas clínicas.',
      highlight: 'Compromisso ético e instrumental de ponta',
      actionText: 'Saiba mais sobre a solenidade'
    },
    {
      id: 'talentos',
      icon: Briefcase,
      title: 'Talentos S/A & Carreiras',
      subtitle: 'Conexão Direta com a Indústria',
      desc: 'Nossa agência interna de carreiras e estágios conecta os alunos de Barcarena às maiores empresas do polo industrial, portos, operadoras de saúde e organizações socioambientais do Pará.',
      highlight: 'Empregabilidade e rede de estágios',
      actionText: 'Ver oportunidades de carreira'
    },
    {
      id: 'acolher',
      icon: HeartHandshake,
      title: 'Projeto Acolher',
      subtitle: 'Ações Sociais e Comunitárias',
      desc: 'A extensão universitária na prática. Campanhas de saúde preventiva, orientação jurídica gratuita e ações solidárias que beneficiam comunidades ribeirinhas e famílias em Barcarena.',
      highlight: 'Impacto social real no território',
      actionText: 'Conheça nossos projetos sociais'
    }
  ];

  const current = experiences[selectedTab];

  return (
    <section className="py-28 bg-[#FAF8F5] text-[#1D2B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6D3B] uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#C9A44C]" />
            <span>08 / EXPERIÊNCIA FAUNA</span>
            <span>—</span>
            <span>VIVÊNCIA ALÉM DA SALA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight text-balance">
            A faculdade acontece muito além da sala de aula.
          </h2>
          <p className="text-sm sm:text-base text-[#57685F] mt-3 font-light leading-relaxed">
            Ritos de passagem, reconhecimento meritocrático, inserção profissional e impacto social que marcam para sempre a trajetória do estudante.
          </p>
        </div>

        {/* Interactive Experience Canvas */}
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
                      ? 'bg-[#123524] text-white border-[#123524] shadow-md'
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

          {/* Focused Editorial Spotlight Box (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF5EE] border border-[#E5DFD3] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8A6D3B] uppercase">
                <span>0{selectedTab + 1} / DESTAQUE</span>
                <span>·</span>
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
            </div>

            <div className="pt-8 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
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
