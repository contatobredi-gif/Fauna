import React from 'react';
import { FileText, Compass } from 'lucide-react';
import { INSTITUTIONAL_COPY, TIMELINE_HISTORY } from '../data/content';
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

  const documentSlots = [
    { id: 'editais', title: 'Editais de processos seletivos', type: 'Editais', status: 'Arquivo ainda não publicado neste site' },
    { id: 'regimento', title: 'Regimento Geral da Faculdade Universo da Amazônia', type: 'Institucional', status: 'Arquivo ainda não publicado neste site' },
    { id: 'normas', title: 'Normas e manuais acadêmicos', type: 'Normas e manuais', status: 'Arquivo ainda não publicado neste site' },
    { id: 'regulamentos', title: 'Regulamentos e programas', type: 'Regulamentos e programas', status: 'Arquivo ainda não publicado neste site' }
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
              {INSTITUTIONAL_COPY.about} Este site apresenta a instituição com foco no recorte de Barcarena, sem confundir a história da IES com a implantação local.
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
                    Uma faculdade estrategicamente calculada para inspirar seus alunos.
                  </h2>
                  {INSTITUTIONAL_COPY.directorParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className={index === 0
                        ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#123524]'
                        : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div className="pt-4 border-t border-[#F0ECE1]">
                    <strong className="text-[#123524] block font-serif text-base">Fabrício Peixoto do Nascimento</strong>
                    <span className="text-xs text-[#697A72]">Diretoria Geral · Faculdade Universo da Amazônia</span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#F4EEE3] p-6 rounded-2xl border border-[#E5DFD3] space-y-4">
                  <h3 className="font-serif font-bold text-lg text-[#123524]">Identidade Institucional</h3>
                  <div className="space-y-3 text-xs text-[#57685F]">
                    <div>
                      <strong className="text-[#123524] block mb-0.5">Missão</strong>
                      <span>{INSTITUTIONAL_COPY.mission}</span>
                    </div>
                    <div>
                      <strong className="text-[#123524] block mb-0.5">Visão</strong>
                      <span>{INSTITUTIONAL_COPY.vision}</span>
                    </div>
                    <div>
                      <strong className="text-[#123524] block mb-0.5">Valores</strong>
                      <ul className="list-disc pl-4 space-y-1">
                        {INSTITUTIONAL_COPY.values.map((value) => (
                          <li key={value}>{value}</li>
                        ))}
                      </ul>
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
                  Uma história de crescimento
                </h3>
                <p className="text-xs text-[#57685F] mt-2 leading-relaxed">
                  Os marcos de 2018 a 2022 descrevem a trajetória da instituição. O recorte de Barcarena aparece apenas no marco mais recente, ainda em divulgação regulatória.
                </p>
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
              text="A história 2018–2022 é da Faculdade Universo da Amazônia como instituição. Não descreve instalações, turmas ou autorizações já confirmadas para Barcarena."
            />
          </div>
        )}

        {/* TAB 2: MÉTODO SABER MAIS */}
        {activeTab === 'saber-mais' && (
          <div className="space-y-12 animate-fade-in">
            <div id="metodo-saber-mais" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs space-y-6 scroll-mt-28">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                METODOLOGIA INSTITUCIONAL
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Método Saber Mais
              </h2>
              
              <p className="text-sm text-[#47574E] leading-relaxed max-w-3xl">
                <strong className="text-[#123524]">Metodologia. </strong>
                {INSTITUTIONAL_COPY.saberMais.methodology}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center font-bold">
                    01
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123524]">Conceito</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">
                    {INSTITUTIONAL_COPY.saberMais.concept}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center font-bold">
                    02
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123524]">Experiência de aprendizagem</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">
                    {INSTITUTIONAL_COPY.saberMais.experience}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center font-bold">
                    03
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123524]">Diferenciais</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">
                    {INSTITUTIONAL_COPY.saberMais.differentials}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#57685F] leading-relaxed max-w-3xl pt-2">
                <strong className="text-[#123524]">Aplicação à formação acadêmica. </strong>
                {INSTITUTIONAL_COPY.saberMais.application}
              </p>
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
                <p>{INSTITUTIONAL_COPY.cpaPresentation}</p>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#123524] mb-2">Finalidade e objetivos</h3>
                  <p>{INSTITUTIONAL_COPY.cpaPurpose}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F0ECE1] space-y-3">
                <h4 className="text-base font-serif font-bold text-[#123524]">
                  Relatórios de autoavaliação
                </h4>
                <p className="text-xs text-[#57685F] leading-relaxed max-w-3xl">
                  A instituição prevê a publicação de relatórios e planos da CPA. Neste site ainda não há arquivos digitais disponíveis para consulta. Títulos sem documento correspondente não são listados como se pudessem ser baixados.
                </p>
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
                <p>{INSTITUTIONAL_COPY.lgpdIntro}</p>
                {INSTITUTIONAL_COPY.lgpdBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                <div className="p-5 rounded-2xl bg-[#FAF5EE] border border-[#E5DFD3] text-xs text-[#57685F] space-y-2">
                  <strong className="text-[#123524] block text-sm">Política de cookies da F P do Nascimento EIRELI</strong>
                  <p>{INSTITUTIONAL_COPY.cookies.what}</p>
                  <p>{INSTITUTIONAL_COPY.cookies.how}</p>
                  <p>{INSTITUTIONAL_COPY.cookies.disable}</p>
                  <p>{INSTITUTIONAL_COPY.cookies.effective}</p>
                </div>
                <p className="text-xs text-[#8A5A2B]">
                  O nome do encarregado de dados (DPO) só será publicado quando a Direção confirmar o responsável vigente para este canal.
                </p>
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
                Esta página reserva o espaço dos documentos oficiais da Faculdade Universo da Amazônia. Enquanto os arquivos não forem publicados, os itens permanecem como categorias institucionais, sem download.
              </p>

              <div className="divide-y divide-[#EDE6D8] border border-[#E5DFD3] rounded-2xl overflow-hidden bg-[#FAF8F5]">
                {documentSlots.map((ed) => (
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
