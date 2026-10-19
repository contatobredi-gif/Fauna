import React from 'react';
import { BookOpen, GraduationCap, ShieldCheck, Briefcase, Cpu, ExternalLink, Library } from 'lucide-react';
import { ACADEMIC_PORTALS } from '../data/navigation';
import { useHashTab } from '../hooks/useHashTab';

type VidaTab = 'portais' | 'biblioteca' | 'talentos' | 'lab' | 'documentos';

const VIDA_TABS: { tab: VidaTab; hashes: string[]; label: string }[] = [
  { tab: 'portais', hashes: ['portais'], label: 'Portais Acadêmicos' },
  { tab: 'biblioteca', hashes: ['biblioteca', 'biblioteca-digital'], label: 'Biblioteca' },
  { tab: 'talentos', hashes: ['talentos'], label: 'Talentos S/A' },
  { tab: 'lab', hashes: ['lab'], label: 'FAUNA LAB' },
  { tab: 'documentos', hashes: ['documentos', 'validador'], label: 'Serviços e documentos' },
];

export const VidaAcademicaPage: React.FC = () => {
  const { activeTab, setActiveTab } = useHashTab<VidaTab>(VIDA_TABS, 'portais');

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
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
              Acesso unificado aos portais institucionais, acervo bibliográfico contemporâneo, ambientes virtuais e documentação acadêmica.
            </p>
          </div>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD3] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-medium">
            {VIDA_TABS.map((tab) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {activeTab === 'portais' && (
          <div id="portais" className="space-y-10 animate-fade-in scroll-mt-28">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block mb-2">
                ACESSO CENTRALIZADO
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Portais e Ambientes de Aprendizagem
              </h2>
              <p className="text-xs sm:text-sm text-[#57685F] mt-2">
                Os endereços oficiais de cada ambiente serão publicados quando a operação digital de Barcarena estiver homologada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACADEMIC_PORTALS.map((portal) => (
                <div
                  key={portal.name}
                  className="bg-white p-6 rounded-2xl border border-[#E5DFD3] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#E5DFD3] flex items-center justify-center text-[#123524]">
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
                    {portal.available && portal.href ? (
                      <a
                        href={portal.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123524]"
                      >
                        <span>Acessar ambiente</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <p className="text-xs text-[#8A5A2B]">Acesso oficial em atualização</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'biblioteca' && (
          <div id="biblioteca" className="space-y-10 animate-fade-in scroll-mt-28">
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                BIBLIOTECA INSTITUCIONAL
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Biblioteca Universitária & Periódicos Virtuais
              </h2>
              <p className="text-sm text-[#47574E] leading-relaxed max-w-3xl">
                No site institucional anterior, a FAUNA mantinha páginas de biblioteca online, órgãos, portais, periódicos e publicações virtuais. Três dessas seções estavam “em atualização”; a de periódicos listava títulos por área do conhecimento. O acesso digital, o login da Minha Biblioteca e o acervo presencial em Barcarena serão informados quando os endereços e as instalações oficiais forem publicados.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-2">
                  <Library className="w-6 h-6 text-[#123524]" />
                  <h4 className="font-serif font-bold text-[#123524]">Biblioteca presencial</h4>
                  <p className="text-xs text-[#57685F]">Consulta local e apoio à pesquisa serão descritos quando o espaço físico de Barcarena estiver confirmado. Não há endereço de biblioteca do polo publicado neste site.</p>
                </div>
                <div id="biblioteca-digital" className="p-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-2 scroll-mt-28">
                  <BookOpen className="w-6 h-6 text-[#123524]" />
                  <h4 className="font-serif font-bold text-[#123524]">Biblioteca Digital</h4>
                  <p className="text-xs text-[#57685F]">Minha Biblioteca aparece no menu institucional da IES, ainda sem URL pública. O login e as bases contratadas para Barcarena serão publicados com os portais oficiais.</p>
                </div>
                <div className="p-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-2">
                  <ShieldCheck className="w-6 h-6 text-[#123524]" />
                  <h4 className="font-serif font-bold text-[#123524]">Guias de Normalização</h4>
                  <p className="text-xs text-[#57685F]">O site anterior citava o Guia de Normalização 2022 entre as normas institucionais, sem arquivo disponível para download. O documento será vinculado quando houver PDF oficial.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'talentos' && (
          <div id="talentos" className="space-y-10 animate-fade-in scroll-mt-28">
            <div className="bg-white p-8 rounded-3xl border border-[#E5DFD3] space-y-4 max-w-3xl">
              <div className="w-12 h-12 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#123524]">Talentos S/A</h3>
              <p className="text-xs text-[#57685F] leading-relaxed">
                No acervo institucional, o programa Profissional S/A — desenvolvido pelo curso de Recursos Humanos da FAUNA — é descrito como ferramenta de capacitação e inserção profissional, com cursos e treinamentos. A nomenclatura Talentos S/A permanece neste site. Convênios específicos de Barcarena ainda não foram publicados.
              </p>
              <p className="text-xs font-semibold text-[#8A6D3B]">Convênios em formalização para o polo Barcarena.</p>
            </div>
          </div>
        )}

        {activeTab === 'lab' && (
          <div id="lab" className="space-y-10 animate-fade-in scroll-mt-28">
            <div className="bg-white p-8 rounded-3xl border border-[#E5DFD3] space-y-4 max-w-3xl">
              <div className="w-12 h-12 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#123524]">FAUNA LAB</h3>
              <p className="text-xs text-[#57685F] leading-relaxed">
                No site anterior, o FAUNA LAB era apresentado como área de precisão, confiança e inovação, com a nota de que resultados e serviços laboratoriais estariam disponíveis em breve. Não há, neste canal, confirmação de laboratório em operação em Barcarena.
              </p>
              <p className="text-xs font-semibold text-[#8A6D3B]">Iniciativa de pesquisa e desenvolvimento em estruturação.</p>
            </div>
          </div>
        )}

        {activeTab === 'documentos' && (
          <div id="documentos" className="space-y-10 animate-fade-in scroll-mt-28">
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                SERVIÇOS ACADÊMICOS
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                Documentos e validação de diplomas
              </h2>
              <p className="text-sm text-[#47574E] leading-relaxed max-w-3xl">
                A emissão e a validação de documentos acadêmicos seguirão as normas aplicáveis à instituição quando o serviço correspondente estiver operacional. Neste site, os validadores digitais permanecem sem endereço público, como no menu anterior da IES.
              </p>

              <div id="validador" className="max-w-lg p-6 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] space-y-3 scroll-mt-28">
                <h3 className="font-serif text-lg font-bold text-[#123524]">Validador de diplomas</h3>
                <p className="text-xs text-[#57685F] leading-relaxed">
                  O serviço público de validação ainda não está disponível para o polo Barcarena. Não há consulta online ativa neste momento.
                </p>
                <p className="text-xs font-semibold text-[#8A5A2B]">
                  Status: indisponível até a publicação do sistema oficial.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
