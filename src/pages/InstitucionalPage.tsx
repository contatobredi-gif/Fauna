import React from 'react';
import { FileText, Compass } from 'lucide-react';
import { TIMELINE_HISTORY } from '../data/content';
import { ValidationNotice } from '../components/ui/ValidationNotice';
import { useHashTab } from '../hooks/useHashTab';

type InstitucionalTab = 'historia' | 'saber-mais' | 'cpa' | 'lgpd' | 'editais';

const INSTITUCIONAL_TABS: { tab: InstitucionalTab; hashes: string[]; label: string }[] = [
  { tab: 'historia', hashes: ['quem-somos', 'nossa-historia'], label: 'Quem Somos & Trajetória' },
  { tab: 'saber-mais', hashes: ['metodo-saber-mais', 'saber-mais'], label: 'Método Saber Mais' },
  { tab: 'cpa', hashes: ['cpa'], label: 'CPA — Autoavaliação' },
  { tab: 'lgpd', hashes: ['lgpd'], label: 'LGPD & Privacidade' },
  { tab: 'editais', hashes: ['editais', 'regimento', 'regulamentos', 'normas'], label: 'Editais & Regimento' },
];

export const InstitucionalPage: React.FC = () => {
  const { activeTab, setActiveTab } = useHashTab<InstitucionalTab>(INSTITUCIONAL_TABS, 'historia');

  const cpaReports = [
    { title: 'Projeto de Aplicação da Autoavaliação Institucional 2025', date: '2025', status: 'Arquivo digital em atualização' },
    { title: 'Plano de Ação FAUNA 2025', date: '2025', status: 'Arquivo digital em atualização' },
    { title: 'Relatório Integral CPA 2024', date: '2024', status: 'Arquivo digital em atualização' },
    { title: 'Relatório CPA FAUNA 2023.2', date: '2023', status: 'Arquivo digital em atualização' },
    { title: 'Síntese Trienal CPA (2019-2021)', date: '2021', status: 'Arquivo digital em atualização' }
  ];

  const editaisList = [
    { id: 'editais', title: 'Edital do Processo Seletivo Vestibular — Polo Barcarena 2026.1', type: 'Vestibular', status: 'Publicação oficial em consolidação' },
    { id: 'regimento', title: 'Regimento Geral da Faculdade Universo da Amazônia', type: 'Institucional', status: 'Arquivo digital em atualização' },
    { id: 'normas', title: 'Manual do Aluno e Guia de Convivência Acadêmica', type: 'Normas e manuais', status: 'Arquivo digital em atualização' },
    { id: 'regulamentos', title: 'Regulamento das Atividades Complementares e Extensão', type: 'Regulamentos e programas', status: 'Arquivo digital em atualização' }
  ];

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      {/* Header Banner */}
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>INSTITUCIONAL · FAUNA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              A história, os valores e a governança da FAUNA.
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Compromisso com o desenvolvimento socioeconômico e ambiental do Pará através de uma formação boutique, personalizada e transformadora.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs Bar */}
      <div className="sticky top-[68px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD3] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-medium">
            {INSTITUCIONAL_TABS.map((tab) => (
              <button
                key={tab.tab}
                type="button"
                onClick={() => setActiveTab(tab.tab)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  activeTab === tab.tab
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

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* TAB 1: QUEM SOMOS & HISTÓRIA */}
        {activeTab === 'historia' && (
          <div className="space-y-16 animate-fade-in">
            {/* Mensagem do Diretor (Texto Oficial da Referência B) */}
            <div id="quem-somos" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs scroll-mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8 space-y-5 text-[#47574E] text-sm leading-relaxed">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                    MENSAGEM DA DIRETORIA
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#123524]">
                    Um divisor de águas no ensino superior da Amazônia.
                  </h2>
                  <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#123524]">
                    O ensino superior no Pará iniciou um processo revolucionário com a criação da FAUNA. Com conceito totalmente diferenciado, a instituição vai muito além da diplomação formal de pessoas: é uma faculdade estrategicamente desenhada para inspirar seus alunos.
                  </p>
                  <p>
                    Um processo contínuo de transformação e movimento, que garante uma experiência acolhedora, em ambiente harmonioso e elegante, idealizado para ser a extensão da casa de cada estudante. Na FAUNA, não existe anonimato: nossos alunos têm identidade, DNA, com nome e sobrenome.
                  </p>
                  <p>
                    Para alcançar a excelência como uma Faculdade Boutique no Norte, nossa essência não busca apenas volume ou escala impessoal, mas ofertar formação sob medida, capacitada para fazer a diferença real no mercado de trabalho.
                  </p>
                  <div className="pt-4 border-t border-[#F0ECE1]">
                    <strong className="text-[#123524] block font-serif text-base">Fabrício Peixoto do Nascimento</strong>
                    <span className="text-xs text-[#697A72]">Diretoria Geral & Mantenedora F P do Nascimento EIRELI</span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#F4EEE3] p-6 rounded-2xl border border-[#E5DFD3] space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#123524]">Identidade Institucional</h3>
                  <div className="space-y-3 text-xs text-[#57685F]">
                    <div>
                      <strong className="text-[#123524] block mb-0.5">Missão</strong>
                      <span>Contribuir para o desenvolvimento socioeconômico, cultural e ambiental através de ensino, pesquisa e extensão indissociáveis, com inovação e sustentabilidade.</span>
                    </div>
                    <div>
                      <strong className="text-[#123524] block mb-0.5">Visão</strong>
                      <span>Ser referência no Pará como centro de formação ética, meritocrática e técnica para os desafios contemporâneos da Amazônia.</span>
                    </div>
                    <div>
                      <strong className="text-[#123524] block mb-0.5">Valores</strong>
                      <span>Inovação profissional, responsabilidade socioambiental, valorização das raízes amazônicas, meritocracia e ética humana.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Linha do Tempo Histórica */}
            <div id="nossa-historia" className="scroll-mt-28">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block mb-2">
                  NOSSA TRAJETÓRIA
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#123524]">
                  Uma história de crescimento contínuo (2018–2026)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TIMELINE_HISTORY.map((item) => (
                  <div key={item.year} className="bg-white p-6 rounded-2xl border border-[#E5DFD3] space-y-3">
                    <span className="text-2xl font-serif font-bold text-[#C9A44C] block font-mono">
                      {item.year}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#123524]">{item.title}</h4>
                    <p className="text-xs text-[#57685F] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <ValidationNotice
              text="As portarias específicas autorizativas das instalações físicas de Barcarena estão em publicação gradual junto ao Ministério da Educação."
            />
          </div>
        )}

        {/* TAB 2: MÉTODO SABER MAIS */}
        {activeTab === 'saber-mais' && (
          <div className="space-y-12 animate-fade-in">
            <div id="metodo-saber-mais" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs space-y-6 scroll-mt-28">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                METODOLOGIA PEDAGÓGICA PROPRIETÁRIA
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                O pioneirismo pedagógico como marca registrada: Método Saber Mais.
              </h2>
              
              <p className="text-sm text-[#47574E] leading-relaxed max-w-3xl">
                Nesse universo de inovação acadêmica, a FAUNA criou o <strong>Saber Mais</strong>, uma metodologia exclusiva que nos consolida como um agente transformador de sonhos em realidade por meio da educação de excelência.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center font-bold">
                    01
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123524]">Prática desde o Início</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">
                    O contato com simulações, estudos de caso e vivência no território ocorre desde o primeiro semestre letivo.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center font-bold">
                    02
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123524]">Problemas Reais do Pará</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">
                    Estudo de casos contextualizados com as cadeias portuárias, ambientais, industriais e de saúde do Baixo Tocantins.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center font-bold">
                    03
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123524]">Mentoria Docente Estreita</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">
                    Professores mestres e doutores que orientam projetos individualizados e promovem o desenvolvimento de liderança discente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CPA AUTOAVALIAÇÃO */}
        {activeTab === 'cpa' && (
          <div className="space-y-10 animate-fade-in">
            <div id="cpa" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs space-y-6 scroll-mt-28">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                SINAES · MINISTÉRIO DA EDUCAÇÃO
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                CPA — Comissão Própria de Avaliação
              </h2>
              
              <div className="text-sm text-[#47574E] leading-relaxed space-y-4 max-w-4xl">
                <p>
                  A Comissão Própria de Avaliação (CPA) é formada democraticamente por representantes dos docentes, estudantes, técnico-administrativos e membros da sociedade civil organizada, em consonância com as diretrizes do Sistema Nacional de Avaliação da Educação Superior (SINAES).
                </p>
                <p>
                  Sua finalidade central é coordenar os processos de autoavaliação contínua da instituição, identificar oportunidades de melhoria, aumentar a consciência pedagógica e prestar contas de forma transparente a toda a comunidade acadêmica.
                </p>
              </div>

              {/* Documentos e Relatórios CPA */}
              <div className="pt-6 border-t border-[#F0ECE1]">
                <h4 className="text-base font-serif font-bold text-[#123524] mb-4">
                  Relatórios e Planos de Autoavaliação Institucional
                </h4>
                <div className="divide-y divide-[#EDE6D8] border border-[#E5DFD3] rounded-2xl overflow-hidden bg-[#FAF8F5]">
                  {cpaReports.map((r) => (
                    <div key={r.title} className="p-4 flex items-center justify-between gap-4 hover:bg-white transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#C9A44C] shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-[#123524] block">{r.title}</span>
                          <span className="text-[11px] text-[#697A72]">Ciclo Avaliativo {r.date}</span>
                        </div>
                      </div>
                      <span className="text-xs text-[#123524] font-medium bg-[#F2ECE1] px-3 py-1 rounded-md">
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LGPD */}
        {activeTab === 'lgpd' && (
          <div className="space-y-10 animate-fade-in">
            <div id="lgpd" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs space-y-6 scroll-mt-28">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                LEI Nº 13.709/2018
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                LGPD — Lei Geral de Proteção de Dados Pessoais
              </h2>
              
              <div className="text-sm text-[#47574E] leading-relaxed space-y-4 max-w-4xl">
                <p>
                  A sua privacidade é um valor inegociável para a FAUNA. É política oficial da <strong>F P do Nascimento EIRELI</strong>, mantenedora da Faculdade Universo da Amazônia, respeitar a sua privacidade e tratar os dados pessoais com transparência, sigilo e segurança jurídica.
                </p>
                <p>
                  Coletamos informações pessoais estritamente necessárias para a prestação de serviços educacionais, cumprimento de obrigações legais junto ao MEC, processos seletivos e emissão de documentação acadêmica oficial.
                </p>
                <div className="p-5 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] text-xs text-[#57685F] space-y-2">
                  <strong className="text-[#123524] block text-sm">Canal do Encarregado de Dados (DPO)</strong>
                  <p>Para exercer seus direitos de confirmação de dados, retificação, eliminação ou esclarecimentos, contate nosso setor de governança institucional através do portal de atendimento.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EDITAIS & REGIMENTO */}
        {activeTab === 'editais' && (
          <div className="space-y-10 animate-fade-in">
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                CENTRAL DE DOCUMENTOS & REGULAÇÃO
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Editais, Regimento Geral e Normas Acadêmicas
              </h2>
              
              <p className="text-sm text-[#47574E] leading-relaxed">
                Consulte os documentos oficiais que regem o funcionamento acadêmico, processos de vestibular e regulamentos de bolsas e programas.
              </p>

              <div className="divide-y divide-[#EDE6D8] border border-[#E5DFD3] rounded-2xl overflow-hidden bg-[#FAF8F5]">
                {editaisList.map((ed) => (
                  <div key={ed.title} id={ed.id} className="p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white transition-colors scroll-mt-28">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#123524] shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-[#123524] block">{ed.title}</span>
                        <span className="text-[11px] text-[#8A6D3B] font-mono uppercase">{ed.type}</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#57685F] bg-[#E8E1D2] px-3 py-1 rounded-md self-start sm:self-auto">
                      {ed.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
