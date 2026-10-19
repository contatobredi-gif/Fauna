import React, { useState } from 'react';
import { BookOpen, GraduationCap, Compass, PlayCircle, ShieldCheck, Briefcase, Cpu, ExternalLink, Library } from 'lucide-react';
import { ACADEMIC_PORTALS } from '../data/navigation';

export const VidaAcademicaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portais' | 'biblioteca' | 'talentos' | 'validador'>('portais');

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      {/* Header */}
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <BookOpen className="w-4 h-4" />
              <span>SISTEMAS ACADÊMICOS & BIBLIOTECA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Vida Acadêmica & Serviços Digitais
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Acesso unificado aos portais institucionais, acervo bibliográfico contemporâneo, ambientes virtuais e validação de documentos oficiais.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[68px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD3] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-medium">
            {[
              { id: 'portais', label: 'Portais Acadêmicos' },
              { id: 'biblioteca', label: 'Biblioteca & Periódicos' },
              { id: 'talentos', label: 'Talentos S/A & FAUNA LAB' },
              { id: 'validador', label: 'Validador de Diplomas' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#123524] text-white font-semibold'
                    : 'text-[#57685F] hover:text-[#123524] hover:bg-[#F2ECE1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* PORTAIS */}
        {activeTab === 'portais' && (
          <div className="space-y-10 animate-fade-in">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block mb-2">
                ACESSO CENTRALIZADO
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Portais e Ambientes de Aprendizagem
              </h2>
              <p className="text-xs sm:text-sm text-[#57685F] mt-2">
                Selecione o ambiente desejado para entrar com seu login institucional:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACADEMIC_PORTALS.map((portal) => (
                <div
                  key={portal.name}
                  className="bg-white p-6 rounded-2xl border border-[#E5DFD3] hover:border-[#C9A44C] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#E5DFD3] flex items-center justify-center text-[#123524] group-hover:bg-[#123524] group-hover:text-[#E5C879] transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#123524]">
                      {portal.name}
                    </h3>
                    <p className="text-xs text-[#57685F] leading-relaxed">
                      {portal.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#F0ECE1] mt-4">
                    <a
                      href={portal.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123524] group-hover:text-[#8A6D3B] transition-colors"
                    >
                      <span>Acessar Ambiente</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BIBLIOTECA */}
        {activeTab === 'biblioteca' && (
          <div className="space-y-10 animate-fade-in">
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                ACERVO FÍSICO E DIGITAL
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Biblioteca Universitária & Periódicos Virtuais
              </h2>
              <p className="text-sm text-[#47574E] leading-relaxed max-w-3xl">
                O Sistema Integrado de Bibliotecas da FAUNA oferece acesso presencial ao acervo físico e mais de 10.000 títulos na plataforma <strong>Minha Biblioteca</strong>, além do Portal de Periódicos CAPES e bases científicas de alto impacto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-2">
                  <Library className="w-6 h-6 text-[#123524]" />
                  <h4 className="font-serif font-bold text-[#123524]">Minha Biblioteca</h4>
                  <p className="text-xs text-[#57685F]">Acesso ilimitado e remoto aos livros didáticos e referências de todas as disciplinas.</p>
                </div>
                <div className="p-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-2">
                  <BookOpen className="w-6 h-6 text-[#123524]" />
                  <h4 className="font-serif font-bold text-[#123524]">Periódicos Virtuais</h4>
                  <p className="text-xs text-[#57685F]">Artigos, teses, dissertações e periódicos acadêmicos indexados em saúde e gestão.</p>
                </div>
                <div className="p-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-2">
                  <ShieldCheck className="w-6 h-6 text-[#123524]" />
                  <h4 className="font-serif font-bold text-[#123524]">Guias de Normalização</h4>
                  <p className="text-xs text-[#57685F]">Manuais de normas ABNT e modelos de Trabalhos de Conclusão de Curso (TCC).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TALENTOS & LAB */}
        {activeTab === 'talentos' && (
          <div className="space-y-10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-[#E5DFD3] space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#123524]">Talentos S/A</h3>
                <p className="text-xs text-[#57685F] leading-relaxed">
                  O elo contínuo entre os alunos da FAUNA e as oportunidades do polo industrial, portuário e hospitalar de Barcarena. Gerenciamento de convênios de estágio, programas de trainees e mentoria para processos seletivos.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#8A6D3B]">Convênios ativos em formalização</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#E5DFD3] space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#123524]">FAUNA LAB</h3>
                <p className="text-xs text-[#57685F] leading-relaxed">
                  Laboratório interdisciplinar de inovação e projetos práticos. Conecta estudantes de saúde, gestão e tecnologia a soluções aplicadas de bioeconomia, gestão pública e sustentabilidade amazônica.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#8A6D3B]">Iniciativa de pesquisa e desenvolvimento</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VALIDADOR */}
        {activeTab === 'validador' && (
          <div className="space-y-10 animate-fade-in">
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                SEGURANÇA JURÍDICA MEC
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Validador de Diplomas e Documentos Digitais
              </h2>
              <p className="text-sm text-[#47574E] leading-relaxed max-w-3xl">
                Em conformidade com as Portarias MEC nº 330/2018 e nº 554/2019, todos os diplomas e documentos emitidos pela FAUNA possuem certificação digital ICP-Brasil e código de validação criptográfica pública.
              </p>

              <div className="max-w-lg p-6 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524]">
                  Código Verificador do Documento
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ex: FAUNA-2026-XXXX-XXXX"
                    className="flex-1 px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#D9D2C3] focus:border-[#123524] outline-none"
                  />
                  <button className="px-4 py-2.5 bg-[#123524] text-white text-xs font-semibold rounded-lg hover:bg-[#0A1F15] transition-colors">
                    Validar
                  </button>
                </div>
                <span className="text-[11px] text-[#697A72] block">
                  Autenticação instantânea perante órgãos públicos e conselhos de classe.
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
