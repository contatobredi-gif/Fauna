import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { COURSES_DATA, Course } from '../../data/content';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';
import { EnrollmentCta } from '../ui/EnrollmentCta';

export const Scene04Formation: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Graduação' | 'Pós-graduação'>('Todos');
  const [selectedArea, setSelectedArea] = useState<string>('Todas');
  const [featuredCourseIndex, setFeaturedCourseIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const areas = ['Todas', 'Saúde', 'Gestão & Negócios', 'Direito & Sociedade'];

  const filteredCourses = COURSES_DATA.filter((c) => {
    const matchType = filter === 'Todos' || c.type === filter;
    const matchArea = selectedArea === 'Todas' || c.area === selectedArea;
    return matchType && matchArea;
  });

  const featuredCourse = filteredCourses[featuredCourseIndex] || filteredCourses[0] || COURSES_DATA[0];

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current) return;

    // Entrance for courses grid
    if (cardsGridRef.current) {
      const cards = Array.from(cardsGridRef.current.children);
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }
  }, containerRef, [filter, selectedArea]);

  return (
    <section
      id="formacao"
      ref={containerRef}
      className="py-28 bg-[#FAF8F5] text-[#1D2B24]"
    >
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
            <span>Estrutura curricular desenhada com rigor técnico e sensibilidade às demandas do território.</span>
          </div>
        </div>

        {/* Interactive Large-Scale Editorial Spotlight Card */}
        {featuredCourse && (
          <div
            ref={showcaseRef}
            className="mb-12 bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-10 shadow-sm transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8A6D3B]">
                  <span>DESTAQUE SELECIONADO</span>
                  <span>·</span>
                  <span>{featuredCourse.area}</span>
                  <span>·</span>
                  <span>{featuredCourse.type}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#123524]">
                  {featuredCourse.name}
                </h3>

                <p className="text-sm text-[#47574E] leading-relaxed max-w-2xl">
                  {featuredCourse.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#57685F]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C9A44C]" />
                    <span>Duração: <strong>{featuredCourse.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A44C]" />
                    <span>Turnos: <strong>{featuredCourse.shift}</strong> ({featuredCourse.modality})</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#8A5A2B] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{featuredCourse.validationNote}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center gap-3">
                <EnrollmentCta
                  kind={featuredCourse.type === 'Pós-graduação' ? 'pos' : 'graduacao'}
                  courseId={featuredCourse.id}
                  className="w-full py-3.5 px-5 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-xs font-semibold rounded-xl transition-all shadow-sm text-center"
                >
                  Inscrever-se neste curso
                </EnrollmentCta>
                <Link
                  to="/cursos"
                  className="w-full py-3.5 px-5 bg-[#FAF5EE] hover:bg-[#F2ECE1] text-[#123524] text-xs font-semibold rounded-xl border border-[#E5DFD3] transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Ver Grade Curricular Completa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A44C]" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5DFD3]">
          {/* Type Segmented Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EBE4D5] rounded-xl">
            {(['Todos', 'Graduação', 'Pós-graduação'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setFilter(t);
                  setFeaturedCourseIndex(0);
                }}
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
                onClick={() => {
                  setSelectedArea(area);
                  setFeaturedCourseIndex(0);
                }}
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

        {/* Course Cards Grid */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((c, index) => {
            const isSelected = featuredCourse && featuredCourse.id === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setFeaturedCourseIndex(index)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#C9A44C] ring-2 ring-[#C9A44C]/30 shadow-md'
                    : 'bg-white/80 border-[#E5DFD3] hover:border-[#123524] hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#697A72] mb-3">
                    <span className="font-mono uppercase tracking-wider text-[#8A6D3B] font-medium">
                      {c.area}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span>{c.type}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#123524] mb-2">
                    {c.name}
                  </h3>

                  <p className="text-xs text-[#57685F] leading-relaxed mb-4 line-clamp-2">
                    {c.description}
                  </p>

                  <div className="space-y-1 py-2 text-xs text-[#47574E] border-t border-[#F0ECE1]">
                    <div>{c.duration} · {c.shift}</div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#8A6D3B] hover:underline">
                    {isSelected ? '✓ Selecionado acima' : 'Clique para explorar'}
                  </span>
                  <EnrollmentCta
                    kind={c.type === 'Pós-graduação' ? 'pos' : 'graduacao'}
                    courseId={c.id}
                    className="px-3 py-1.5 bg-[#123524] text-white text-xs rounded-lg hover:bg-[#0A1F15] text-center"
                  >
                    Inscrever-se
                  </EnrollmentCta>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
