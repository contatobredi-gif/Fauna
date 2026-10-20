import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ACADEMIC_LABELS, BARCARENA_COURSES, getBarcarenaCourse, getCourseCoordinator, type BarcarenaCourse } from '../data/barcarenaCourses';
import { canShowPhoto } from '../data/faculty';
import { CourseEditorialVisual } from '../components/ui/CourseEditorialVisual';
import { EnrollmentCta } from '../components/ui/EnrollmentCta';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { useCourseSeo } from '../hooks/useCourseSeo';
import { NotFoundPage } from './NotFoundPage';

const ctaClass = 'inline-block rounded-xl bg-[#C9A44C] px-6 py-3 text-center text-sm font-semibold text-[#06150E]';

export function CursoPage() {
  const { slug } = useParams();
  const course = getBarcarenaCourse(slug);
  return course ? <CourseDetail key={course.id} course={course} /> : <NotFoundPage />;
}

function CourseDetail({ course }: { course: BarcarenaCourse }) {
  const coordinator = getCourseCoordinator(course);
  const academicEntries = Object.entries(course.academic).filter(([, field]) =>
    field.status === 'confirmed_barcarena' && field.value?.trim() && field.source?.trim(),
  );
  useCourseSeo(
    `${course.name} | Graduação FAUNA Barcarena`,
    `${course.editorial.summary} Conheça a apresentação de ${course.name} e sua coordenação na FAUNA Barcarena.`,
    `/cursos/${course.slug}`,
  );

  return (
    <article className="bg-[#FAF8F5] pb-20 pt-24 text-[#1D2B24]">
      <section className="bg-[#123524] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <Link to="/cursos?tipo=graduacao" className="mb-10 inline-flex items-center gap-2 text-sm text-[#D4DED8] underline underline-offset-4">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar ao catálogo
            </Link>
            <SectionEyebrow tone="forest">Graduação · FAUNA Barcarena</SectionEyebrow>
            <h1 className="font-serif text-5xl leading-tight sm:text-7xl">{course.name}</h1>
            <p className="mt-5 max-w-lg font-serif text-2xl leading-snug text-[#E5C879] sm:text-3xl">{course.editorial.headline}</p>
            <p className="my-7 max-w-lg text-sm leading-relaxed text-[#D4DED8]">{course.editorial.summary}</p>
            <EnrollmentCta {...course.enrollment} className={ctaClass}>Acessar inscrição oficial</EnrollmentCta>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#C9A44C]/30">
            <CourseEditorialVisual course={course} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 pt-14 sm:px-8 lg:space-y-24">
        <section className="grid gap-8 lg:grid-cols-[1fr_1.4fr]" aria-labelledby="formacao-title">
          <div>
            <SectionEyebrow>Conheça a formação</SectionEyebrow>
            <h2 id="formacao-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">Um campo de conhecimento.<br />Muitas formas de contribuir.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#57685F]">
            {course.editorial.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section aria-labelledby="competencias-title">
          <SectionEyebrow>Conhecimento em perspectiva</SectionEyebrow>
          <h2 id="competencias-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">O que você poderá desenvolver</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#57685F]">Estas são competências gerais relacionadas à área profissional. A matriz curricular e os componentes específicos da FAUNA Barcarena serão apresentados após confirmação institucional.</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {course.editorial.competencies.map((item, index) => (
              <li key={item} className="rounded-2xl border border-[#E5DFD3] bg-white p-6">
                <span className="font-serif text-3xl text-[#9E7B2B]" aria-hidden="true">0{index + 1}</span>
                <p className="mt-4 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 border-y border-[#E5DFD3] py-12 lg:grid-cols-2" aria-labelledby="atuacao-title">
          <div>
            <SectionEyebrow>Caminhos profissionais</SectionEyebrow>
            <h2 id="atuacao-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">Possibilidades de atuação</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#57685F]">Panorama geral da profissão. O exercício em cada campo depende dos requisitos de formação, habilitação e seleção aplicáveis. Esta apresentação não garante emprego ou acesso a cargos.</p>
          </div>
          <ul className="divide-y divide-[#E5DFD3]">
            {course.editorial.careers.map((item) => <li key={item} className="flex items-start gap-3 py-4 text-sm"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#9E7B2B]" aria-hidden="true" />{item}</li>)}
          </ul>
        </section>

        <section className="max-w-3xl" aria-labelledby="experiencia-title">
          <SectionEyebrow>Experiência de aprendizagem</SectionEyebrow>
          <h2 id="experiencia-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">Formação conectada às pessoas e ao território.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#57685F]">A missão institucional da FAUNA articula ensino, pesquisa e extensão, com atenção ao desenvolvimento regional e à sustentabilidade. Esse horizonte inspira uma formação que valoriza a ética, a cultura e as relações com a sociedade.</p>
          <p className="mt-4 text-sm leading-relaxed text-[#57685F]">A organização pedagógica, as atividades práticas e os recursos de aprendizagem deste curso em Barcarena serão detalhados quando houver informações institucionais confirmadas.</p>
          <Link to="/institucional" className="mt-5 inline-block text-sm font-semibold text-[#123524] underline underline-offset-4">Conheça a FAUNA</Link>
        </section>

        <section className="rounded-[2rem] border border-[#E5DFD3] bg-white p-6 sm:p-10" aria-labelledby="academico-title">
          <SectionEyebrow>Informações acadêmicas</SectionEyebrow>
          <h2 id="academico-title" className="font-serif text-3xl text-[#123524]">Detalhes da formação em Barcarena</h2>
          {academicEntries.length > 0 && (
            <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {academicEntries.map(([key, field]) => (
                <div key={key}><dt className="text-xs text-[#57685F]">{ACADEMIC_LABELS[key as keyof typeof ACADEMIC_LABELS]}</dt><dd className="mt-1 text-sm font-semibold">{field.value}</dd></div>
              ))}
            </dl>
          )}
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#57685F]">A apresentação deste curso foi informada pela Direção. Ela não confirma autorização regulatória, abertura de inscrições ou condições de oferta.</p>
          {academicEntries.length < Object.keys(ACADEMIC_LABELS).length && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#57685F]">Os dados acadêmicos ainda não confirmados — grau, modalidade, duração, turnos, carga horária, vagas, ato autorizativo, situação de oferta e processo seletivo — serão publicados após validação institucional para Barcarena.</p>}
        </section>

        {coordinator && (
          <section className="grid items-center gap-8 lg:grid-cols-[18rem_1fr] lg:gap-12" aria-labelledby="coordenacao-title">
            {canShowPhoto(coordinator.photo) && (
              <img src={coordinator.photo.src} alt={coordinator.photo.alt ?? coordinator.name} loading="lazy" width="480" height="600"
                className="aspect-[4/5] w-full max-w-72 justify-self-center rounded-[2rem] object-cover"
                style={{ objectPosition: coordinator.photo.objectPosition }} />
            )}
            <div className="min-w-0">
              <SectionEyebrow>Coordenação do curso</SectionEyebrow>
              <h2 id="coordenacao-title" className="font-serif text-3xl text-[#123524] sm:text-4xl">{coordinator.name}</h2>
              <p className="mt-3 text-sm text-[#8A6D3B]">{coordinator.role}</p>
              {coordinator.presentationSummary && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#57685F]">{coordinator.presentationSummary}</p>}
              <Link to="/institucional/diretoria-docentes" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#123524] underline underline-offset-4">Conheça a Diretoria e Docentes <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
            </div>
          </section>
        )}

        <section className="rounded-[2rem] bg-[#123524] p-7 text-white sm:p-12">
          <SectionEyebrow tone="forest">Seu próximo passo</SectionEyebrow>
          <h2 className="max-w-2xl font-serif text-3xl sm:text-5xl">O futuro começa com uma escolha consciente.</h2>
          <p className="my-6 max-w-xl text-sm leading-relaxed text-[#D4DED8]">Explore sua formação e acompanhe as informações oficiais sobre o processo seletivo de Barcarena.</p>
          <EnrollmentCta {...course.enrollment} className={ctaClass}>Acessar inscrição oficial</EnrollmentCta>
        </section>

        <nav aria-label="Outros cursos de graduação">
          <h2 className="mb-5 font-serif text-2xl text-[#123524]">Explore outros caminhos</h2>
          <div className="flex flex-wrap gap-4">
            {BARCARENA_COURSES.filter((item) => item.id !== course.id).map((item) => <Link key={item.id} to={`/cursos/${item.slug}`} className="inline-flex items-center gap-4 rounded-xl border border-[#D9D2C3] px-5 py-3 text-sm text-[#123524] hover:bg-white">{item.name}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>)}
          </div>
        </nav>
      </div>
    </article>
  );
}