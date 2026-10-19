import React from 'react';
import { Award, Users, Cpu, Trees, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Scene05Knowledge: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Ensino de Excelência',
      desc: 'Formação rigorosa que amplia repertórios críticos e prepara profissionais para atuarem com distinção técnica e postura ética.'
    },
    {
      icon: Users,
      title: 'Professores que Transformam',
      desc: 'Corpo docente qualificado com mestres e doutores, estimulando trocas humanas próximas e orientação direta em cada etapa.'
    },
    {
      icon: Cpu,
      title: 'Tecnologia & Inovação',
      desc: 'Ambientes digitais modernos, laboratórios de simulação realística e integração com ferramentas contemporâneas de mercado.'
    },
    {
      icon: Trees,
      title: 'Conexão com a Amazônia',
      desc: 'Compreensão profunda das especificidades de Barcarena e do Pará, aliando sustentabilidade ecológica a desenvolvimento socioeconômico.'
    },
    {
      icon: Target,
      title: 'Método Saber Mais',
      desc: 'Metodologia proprietária que une teoria e prática desde o primeiro período letivo, conectando o aluno a casos reais.'
    },
    {
      icon: Sparkles,
      title: 'Talentos & Mercado',
      desc: 'Ponte contínua entre estudantes e as maiores indústrias, portos, redes de saúde e organizações do Baixo Tocantins.'
    }
  ];

  return (
    <section className="py-28 bg-[#123524] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-[#1A4B34]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C9A44C] uppercase mb-3">
            <span>05 / CONHECIMENTO EM MOVIMENTO</span>
            <span>—</span>
            <span>DIFERENCIAIS INSTITUCIONAIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight text-balance">
            Educação que transforma possibilidades em caminhos reais.
          </h2>
          <p className="text-[#A3B8AD] text-base mt-4 font-light leading-relaxed">
            O que sustenta uma formação de alto padrão não é apenas a sala de aula, mas o ecossistema que conecta estudantes, professores e o território.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-[#0E281C] border border-[#1C4E36] hover:border-[#C9A44C]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#123524] border border-[#C9A44C]/30 flex items-center justify-center text-[#E5C879] group-hover:scale-110 transition-transform mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#C9A44C] mb-2">0{idx + 1}.</div>
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
        <div className="mt-12 text-center">
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
