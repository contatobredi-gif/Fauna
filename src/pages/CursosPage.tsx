import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { BARCARENA_COURSES, getCourseCoordinator } from '../data/barcarenaCourses';
import { getEnrollmentUrl } from '../config/externalLinks';
import { CourseEditorialVisual } from '../components/ui/CourseEditorialVisual';
import { EnrollmentCta } from '../components/ui/EnrollmentCta';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { useAlignedHashScroll } from '../hooks/useHashTab';
import { useCourseSeo } from '../hooks/useCourseSeo';

const categories = [
  { value: 'graduacao', label: 'Graduação' },
  { value: 'pos', label: 'Pós-graduação' },
  { value: 'extensao', label: 'Extensão' },
] as const;

function normalize(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
}

export function CursosPage() {
  const [params, setParams] = useSearchParams();
  const selected = categories.find((category) => category.value === params.get('tipo')) ?? categories[0];
  const [search, setSearch] = useState('');
  const [area, setArea] = useState('Todas');
  const areas = ['Todas', ...new Set(BARCARENA_COURSES.map((course) => course.area))];
  const courses = BARCARENA_COURSES.filter((course) =>
    (area === 'Todas' || area === course.area) &&
    normalize(`${course.name} ${course.area} ${course.editorial.summary}`).includes(normalize(search).trim()),
  );
  useAlignedHashScroll();
  useCourseSeo('Cursos de graduação | FAUNA Barcarena', 'Conheça Direito, Enfermagem e Psicologia: apresentação dos cursos de graduação e coordenações da FAUNA Barcarena.', '/cursos');

  function changeCategory(value: string) {
    const next = new URLSearchParams(params);
    next.set('tipo', value);
    setParams(next);
  }

  return (
    <div className="bg-[#FAF8F5] pb-24 pt-24 text-[#1D2B24]">
      <section className="overflow-hidden bg-[#123524] text-white">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:py-24">
          <div className="min-w-0">
            <SectionEyebrow tone="forest">Formação acadêmica · FAUNA Barcarena</SectionEyebrow>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">Conhecimento para transformar o seu futuro.</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#D4DED8]">Conheça os cursos de graduação apresentados para a FAUNA Barcarena e descubra diferentes caminhos para sua formação profissional.</p>
          </div>
          <div aria-hidden="true" className="relative flex min-h-52 flex-col justify-center border-l border-[#C9A44C]/40 pl-8 lg:pl-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C879]">Raízes amazônicas</span>
            <p className="my-5 font-serif text-4xl italic leading-tight sm:text-5xl">Pessoas.<br />Conhecimento.<br />Território.</p>
            <span className="text-xs tracking-wider text-[#D4DED8]">Da Amazônia para o mundo.</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        <nav aria-label="Categorias de formação" className="mb-10 flex flex-wrap gap-2 border-b border-[#E5DFD3] pb-5">
          {categories.map((category) => (
            <button key={category.value} type="button" aria-pressed={selected.value === category.value}
              onClick={() => changeCategory(category.value)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123524] ${selected.value === category.value ? 'bg-[#123524] text-white' : 'bg-[#EBE4D5] text-[#123524] hover:bg-[#E5DFD3]'}`}>
              {category.label}
            </button>
          ))}
        </nav>

        {selected.value === 'graduacao' ? (
          <section aria-labelledby="catalogue-title">
            <div className="mb-8 grid gap-7 lg:grid-cols-2 lg:items-end">
              <div>
                <SectionEyebrow>Escolha seu caminho</SectionEyebrow>
                <h2 id="catalogue-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">Graduação em Barcarena</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#57685F]">Três cursos informados pela Direção. A apresentação não confirma autorização regulatória, inscrições abertas ou condições acadêmicas de oferta.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="course-search" className="mb-2 block text-xs text-[#57685F]">Buscar formação</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3.5 h-4 w-4 text-[#57685F]" aria-hidden="true" />
                    <input id="course-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)}
                      placeholder="Curso ou palavra-chave" className="w-full rounded-xl border border-[#D9D2C3] bg-white py-3 pl-10 pr-3 text-sm focus-visible:outline-[#123524]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="course-area" className="mb-2 block text-xs text-[#57685F]">Área de conhecimento</label>
                  <select id="course-area" value={area} onChange={(event) => setArea(event.target.value)} className="w-full rounded-xl border border-[#D9D2C3] bg-white px-3 py-3 text-sm focus-visible:outline-[#123524]">
                    {areas.map((item) => <option key={item} value={item}>{item === 'Todas' ? 'Todas as áreas' : item}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <p role="status" className="mb-4 text-xs text-[#57685F]">{courses.length} {courses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}</p>
            <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => {
                const coordinator = getCourseCoordinator(course);
                return (
                  <article key={course.id} className="flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-[#E5DFD3] bg-white">
                    <CourseEditorialVisual course={course} compact />
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#8A6D3B]">{course.area}</p>
                      <h3 className="mt-3 font-serif text-3xl text-[#123524]">{course.name}</h3>
                      <p className="mb-6 mt-4 text-sm leading-relaxed text-[#57685F]">{course.editorial.summary}</p>
                      {coordinator && <p className="mb-6 mt-auto border-t border-[#E5DFD3] pt-4 text-xs leading-relaxed text-[#57685F]"><span className="mb-1 block text-[#8A6D3B]">Coordenação</span>{coordinator.name}</p>}
                      <Link to={`/cursos/${course.slug}`} aria-label={`Conheça o curso de ${course.name}`} className="inline-flex items-center justify-between gap-4 rounded-xl bg-[#123524] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0A1F15]">
                        Conheça o curso <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </Link>
                      {getEnrollmentUrl(course.enrollment) && <EnrollmentCta {...course.enrollment} className="mt-4 text-center text-sm text-[#123524] underline underline-offset-4">Acessar inscrição oficial</EnrollmentCta>}
                    </div>
                  </article>
                );
              })}
            </div>
            {courses.length === 0 && <div className="rounded-2xl border border-[#E5DFD3] bg-white p-8">
              <h3 className="font-serif text-2xl text-[#123524]">Nenhum curso encontrado com esses filtros.</h3>
              <button type="button" onClick={() => { setSearch(''); setArea('Todas'); }} className="mt-4 text-sm text-[#123524] underline underline-offset-4">Limpar filtros</button>
            </div>}
          </section>
        ) : (
          <section className="grid gap-8 rounded-[2rem] border border-[#E5DFD3] bg-white p-7 sm:p-12 lg:grid-cols-[1fr_1.2fr]" aria-labelledby="preparation-title">
            <div>
              <SectionEyebrow>Formação continuada</SectionEyebrow>
              <h2 id="preparation-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">{selected.label}</h2>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#123524]">Uma nova etapa de conhecimento, em preparação.</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#57685F]">{selected.value === 'pos' ? 'A pós-graduação amplia o diálogo entre conhecimento e trajetória profissional.' : 'A extensão aproxima conhecimento e sociedade, abrindo espaço para trocas e novas experiências.'} A programação própria de Barcarena será apresentada após confirmação institucional.</p>
              <p className="mt-4 text-sm leading-relaxed text-[#57685F]">Ainda não há grade, turmas ou inscrições confirmadas para publicação nesta categoria.</p>
              <button type="button" onClick={() => changeCategory('graduacao')} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#123524] underline underline-offset-4">Conheça a graduação <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}