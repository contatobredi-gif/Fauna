import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Clock, MapPin, AlertCircle, BookOpen, GraduationCap } from 'lucide-react';
import { COURSES_DATA, Course } from '../data/content';
import { ValidationNotice } from '../components/ui/ValidationNotice';
import { EnrollmentCta } from '../components/ui/EnrollmentCta';
import { useAlignedHashScroll } from '../hooks/useHashTab';
import type { EnrollmentKind } from '../config/externalLinks';

const TYPE_OPTIONS = ['Todos', 'Graduação', 'Pós-graduação', 'Extensão'] as const;

function typeFromQuery(tipo: string | null): (typeof TYPE_OPTIONS)[number] {
  if (tipo === 'pos') return 'Pós-graduação';
  if (tipo === 'extensao') return 'Extensão';
  if (tipo === 'graduacao') return 'Graduação';
  return 'Todos';
}

function queryFromType(type: string): string | null {
  if (type === 'Pós-graduação') return 'pos';
  if (type === 'Extensão') return 'extensao';
  if (type === 'Graduação') return 'graduacao';
  return null;
}

function enrollmentKindForCourse(course: Course): EnrollmentKind {
  if (course.type === 'Pós-graduação') return 'pos';
  if (course.type === 'Extensão') return 'extensao';
  return 'graduacao';
}

export const CursosPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = typeFromQuery(searchParams.get('tipo'));
  const [areaFilter, setAreaFilter] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useAlignedHashScroll();

  const setTypeFilter = (type: string) => {
    const next = new URLSearchParams(searchParams);
    const query = queryFromType(type);
    if (query) next.set('tipo', query);
    else next.delete('tipo');
    setSearchParams(next);
  };

  const filteredCourses = COURSES_DATA.filter((c) => {
    const matchesType = typeFilter === 'Todos' || c.type === typeFilter;
    const matchesArea = areaFilter === 'Todas' || c.area === areaFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesArea && matchesSearch;
  });

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>CATÁLOGO ACADÊMICO · POLO BARCARENA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Cursos & Formação Superior
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Explore as opções de graduação e pós-graduação desenhadas para conectar conhecimento contemporâneo e oportunidades reais no Pará.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-8">
          <ValidationNotice
            text="A grade oficial com portarias do MEC para as turmas presenciais de Barcarena está em processo de divulgação regulatória. As opções abaixo representam as matrizes curriculares da instituição preparadas para a expansão."
          />
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-xs space-y-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A8A82]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por curso, área ou palavra-chave..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none"
              />
            </div>

            <div className="md:col-span-4 flex items-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xl border border-[#E5DFD3] overflow-x-auto">
              {TYPE_OPTIONS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    typeFilter === t
                      ? 'bg-[#123524] text-white'
                      : 'text-[#57685F] hover:text-[#123524]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="md:col-span-3">
              <select
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none"
              >
                <option value="Todas">Todas as áreas</option>
                <option value="Saúde">Área da Saúde</option>
                <option value="Gestão & Negócios">Gestão & Negócios</option>
                <option value="Direito & Sociedade">Direito & Sociedade</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-[#E5DFD3] p-6 flex flex-col justify-between hover:border-[#C9A44C] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#697A72] mb-3">
                  <span className="font-mono uppercase tracking-wider text-[#8A6D3B] font-medium">
                    {c.area}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span>{c.type}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#123524] group-hover:text-[#8A6D3B] transition-colors mb-2">
                  {c.name}
                </h3>

                <p className="text-xs text-[#57685F] leading-relaxed mb-5 line-clamp-3">
                  {c.description}
                </p>

                <div className="space-y-1.5 py-3 border-y border-[#F0ECE1] text-xs text-[#47574E] mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C9A44C]" />
                    <span>Duração: {c.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A44C]" />
                    <span>Turnos: {c.shift} ({c.modality})</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  {c.status === 'em_estruturacao' ? (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#8A5A2B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{c.validationNote}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#57685F]">
                      <BookOpen className="w-3.5 h-3.5 shrink-0 text-[#C9A44C]" />
                      <span>Turmas em planejamento</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <EnrollmentCta
                    kind={enrollmentKindForCourse(c)}
                    courseId={c.id}
                    className="flex-1 py-2.5 px-3 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-xs font-semibold rounded-lg transition-colors text-center"
                  >
                    Inscrever-se
                  </EnrollmentCta>
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(c)}
                    className="px-3 py-2.5 text-xs text-[#123524] font-medium border border-[#E5DFD3] hover:border-[#123524] rounded-lg transition-colors"
                  >
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#E5DFD3] space-y-3">
            <p className="text-base font-serif text-[#123524]">
              {typeFilter === 'Extensão'
                ? 'A oferta de extensão universitária para Barcarena ainda está em estruturação.'
                : 'Nenhum curso encontrado com esses filtros.'}
            </p>
            <p className="text-xs text-[#57685F] max-w-md mx-auto">
              {typeFilter === 'Extensão'
                ? 'Não publicamos turmas fictícias. Quando houver programação oficial, ela aparecerá nesta seção.'
                : 'Ajuste a busca ou a área de conhecimento para ver as formações disponíveis no catálogo.'}
            </p>
            <button
              type="button"
              onClick={() => { setTypeFilter('Todos'); setAreaFilter('Todas'); setSearchQuery(''); }}
              className="text-xs text-[#C9A44C] underline font-medium"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>

      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#E5DFD3] shadow-2xl p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-xs text-[#8A6D3B] font-mono uppercase mb-2">
              <span>{selectedCourse.area}</span>
              <span>{selectedCourse.type}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#123524] mb-3">
              {selectedCourse.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#47574E] leading-relaxed mb-5">
              {selectedCourse.description}
            </p>

            <div className="space-y-2 p-4 rounded-xl bg-white border border-[#E5DFD3] text-xs text-[#47574E] mb-6">
              <div><strong className="text-[#123524]">Duração estimada:</strong> {selectedCourse.duration}</div>
              <div><strong className="text-[#123524]">Turnos de oferta:</strong> {selectedCourse.shift}</div>
              <div><strong className="text-[#123524]">Modalidade:</strong> {selectedCourse.modality}</div>
              <div><strong className="text-[#123524]">Status Institucional:</strong> {selectedCourse.validationNote}</div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 text-xs font-medium text-[#57685F] hover:text-[#123524]"
              >
                Fechar
              </button>
              <EnrollmentCta
                kind={enrollmentKindForCourse(selectedCourse)}
                courseId={selectedCourse.id}
                className="px-5 py-2.5 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-xs font-semibold rounded-lg transition-colors text-center"
              >
                Inscrever-se
              </EnrollmentCta>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
