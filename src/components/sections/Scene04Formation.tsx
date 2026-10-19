import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';
import { COURSES_DATA, Course } from '../../data/content';

interface Props {
  onOpenInterest: (courseId?: string) => void;
}

export const Scene04Formation: React.FC<Props> = ({ onOpenInterest }) => {
  const [filter, setFilter] = useState<'Todos' | 'Graduação' | 'Pós-graduação'>('Todos');
  const [selectedArea, setSelectedArea] = useState<string>('Todas');

  const areas = ['Todas', 'Saúde', 'Gestão & Negócios', 'Direito & Sociedade'];

  const filteredCourses = COURSES_DATA.filter((c) => {
    const matchType = filter === 'Todos' || c.type === filter;
    const matchArea = selectedArea === 'Todas' || c.area === selectedArea;
    return matchType && matchArea;
  });

  return (
    <section id="formacao" className="py-28 bg-[#FAF8F5] text-[#1D2B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6D3B] uppercase mb-3">
              <span>04 / FORMAÇÃO ACADÊMICA</span>
              <span>—</span>
              <span>CURSOS & CARREIRAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight">
              Encontre o caminho para o seu futuro.
            </h2>
          </div>

          <div className="text-xs text-[#57685F] max-w-sm">
            <span className="block font-medium text-[#123524]">Grade de Barcarena em Preparação</span>
            <span>Os cursos abaixo refletem a estrutura acadêmica da instituição e estão sendo preparados para a unidade Barcarena.</span>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E5DFD3]">
          
          {/* Type Segmented Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EBE4D5] rounded-xl">
            {(['Todos', 'Graduação', 'Pós-graduação'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  filter === t
                    ? 'bg-white text-[#123524] shadow-xs'
                    : 'text-[#57685F] hover:text-[#123524]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Area Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-[#7A8A82] shrink-0">Área:</span>
            {areas.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setSelectedArea(area)}
                className={`px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-colors ${
                  selectedArea === area
                    ? 'border-[#123524] bg-[#123524] text-white font-medium'
                    : 'border-[#D9D2C3] bg-white text-[#47574E] hover:border-[#123524]'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Course Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-[#E5DFD3] p-6 flex flex-col justify-between hover:border-[#C9A44C] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Meta Header */}
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

                {/* Course Details Info */}
                <div className="space-y-1.5 py-3 border-y border-[#F0ECE1] text-xs text-[#47574E] mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C9A44C]" />
                    <span>Duração: {c.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A44C]" />
                    <span>Turnos: {c.shift} · {c.modality}</span>
                  </div>
                </div>
              </div>

              <div>
                {/* Status indicator */}
                <div className="mb-4">
                  {c.status === 'em_estruturacao' ? (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#8A5A2B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{c.validationNote}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#57685F]">
                      <BookOpen className="w-3.5 h-3.5 shrink-0 text-[#C9A44C]" />
                      <span>Consulte o cronograma de turmas</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenInterest(c.id)}
                    className="flex-1 py-2 px-3 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-xs font-semibold rounded-lg transition-colors text-center"
                  >
                    Manifestar Interesse
                  </button>
                  <Link
                    to="/cursos"
                    className="p-2 text-[#123524] hover:text-[#C9A44C] rounded-lg border border-[#E5DFD3] hover:border-[#C9A44C] transition-colors"
                    title="Ver detalhes do curso"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4EEE3] border border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#57685F] text-center sm:text-left">
            <strong className="text-[#123524] block text-sm font-serif">Não encontrou a formação que procura?</strong>
            <span>Receba notificações imediatas assim que novos editais e cursos forem confirmados para Barcarena.</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenInterest()}
            className="px-5 py-2.5 bg-[#C9A44C] hover:bg-[#D8B45E] text-[#123524] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Cadastrar Interesse Geral
          </button>
        </div>

      </div>
    </section>
  );
};
