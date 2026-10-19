import React, { useMemo, useRef, useState } from 'react';
import { ExternalLink, GraduationCap, Landmark, Users } from 'lucide-react';
import {
  canShowPhoto,
  groupFacultyByCourse,
  personInitials,
  publishedCoordenacao,
  publishedDiretoria,
  publishedDocentes,
  type CoordinatorProfile,
  type FacultyMember,
  type LeadershipProfile,
  type PersonPhoto,
} from '../data/faculty';
import { SectionEyebrow } from '../components/ui/SectionEyebrow';
import { useGSAPScene } from '../hooks/useGSAPScene';
import { scrollToHash, useAlignedHashScroll } from '../hooks/useHashTab';
import { gsap } from '../utils/motionConfig';
import { useLocation, useNavigate } from 'react-router-dom';

const PAGE_SECTIONS = [
  { id: 'diretoria', label: 'Diretoria' },
  { id: 'coordenacao', label: 'Coordenação acadêmica' },
  { id: 'docentes', label: 'Corpo docente' },
] as const;

const PortraitFrame: React.FC<{
  name: string;
  photo: PersonPhoto;
  size?: 'hero' | 'card';
}> = ({ name, photo, size = 'card' }) => {
  const initials = personInitials(name);
  const showPhoto = canShowPhoto(photo);
  const frameClass = size === 'hero' ? 'aspect-[4/5] w-full max-w-full' : 'aspect-[4/5] w-full';

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-[#C9A44C]/35 bg-[#0A1F15] ${frameClass}`}
    >
      {showPhoto ? (
        <img
          src={photo.src}
          alt={photo.alt ?? name}
          className="h-full w-full object-cover"
          style={{ objectPosition: photo.objectPosition ?? 'center 20%' }}
          loading={size === 'hero' ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,#1C4E36,transparent_55%),linear-gradient(165deg,#0A1F15_0%,#123524_55%,#06150E_100%)]">
          <span className="font-serif text-5xl sm:text-6xl font-normal text-[#E5C879] tracking-wide">
            {initials || 'FA'}
          </span>
          <span className="h-px w-16 bg-[#C9A44C]/70" />
          <span className="px-6 text-center text-[10px] uppercase tracking-[0.22em] text-[#C9A44C]/80">
            Retrato institucional em autorização
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
};

const PendingPanel: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="faculty-reveal rounded-[1.75rem] border border-[#E5DFD3] bg-white p-8 sm:p-10">
    <SectionEyebrow>Em atualização institucional</SectionEyebrow>
    <h3 className="font-serif text-2xl font-bold text-[#123524]">{title}</h3>
    <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-[#57685F]">{children}</div>
  </div>
);

export const FacultyPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [area, setArea] = useState('Todas');
  const navigate = useNavigate();
  const location = useLocation();
  useAlignedHashScroll();

  const goToSection = (id: string) => {
    navigate(
      { pathname: location.pathname, search: location.search, hash: id },
      { preventScrollReset: true }
    );
    window.setTimeout(() => scrollToHash(id), 30);
  };

  const diretoria = publishedDiretoria;
  const coordenacao = publishedCoordenacao;
  const docentes = publishedDocentes;

  const areas = useMemo(
    () => ['Todas', ...Array.from(new Set(docentes.map((member) => member.area)))],
    [docentes]
  );
  const filteredFaculty = docentes.filter((member) => area === 'Todas' || member.area === area);
  const facultyGroups = groupFacultyByCourse(filteredFaculty);

  useGSAPScene(() => {
    const scope = pageRef.current;
    if (!scope) return;
    const targets = scope.querySelectorAll('.faculty-reveal');
    if (!targets.length) return;
    gsap.fromTo(
      targets,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scope,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, pageRef);

  return (
    <div ref={pageRef} className="bg-[#FAF8F5] pb-28 pt-24 text-[#1D2B24]">
      <section className="border-b border-[#1C4E36] bg-[#123524] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9A44C]">
              <Users className="h-4 w-4" />
              <span>Governança acadêmica · Barcarena</span>
            </div>
            <h1 className="font-serif text-3xl font-normal leading-tight text-white sm:text-5xl">
              Diretoria e Docentes
            </h1>
            <p className="text-sm font-light leading-relaxed text-[#B2C5BC] sm:text-base">
              Liderança da Faculdade Universo da Amazônia e coordenações de graduação da unidade Barcarena. O corpo docente de cada curso será publicado quando a lista oficial for autorizada.
            </p>
          </div>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-b border-[#E5DFD3] bg-[#FAF8F5]/95 shadow-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 no-scrollbar sm:px-6 lg:px-8">
          {PAGE_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => {
                event.preventDefault();
                goToSection(section.id);
              }}
              className="shrink-0 rounded-lg px-4 py-2 text-xs font-medium text-[#57685F] transition-colors hover:bg-[#F2ECE1] hover:text-[#123524]"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-20 px-4 pt-12 sm:px-6 lg:px-8">
        <section id="diretoria" className="scroll-mt-28 space-y-8">
          <div className="faculty-reveal max-w-2xl">
            <SectionEyebrow>Diretoria</SectionEyebrow>
            <h2 className="font-serif text-3xl font-bold text-[#123524] sm:text-4xl">
              Liderança institucional
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#57685F]">
              Identidade da IES, com recorte editorial para Barcarena. Cargos locais extras não são atribuídos sem documento oficial.
            </p>
          </div>

          {diretoria.map((person) => (
            <DiretoriaFeature key={person.id} person={person} />
          ))}
        </section>

        <section id="coordenacao" className="scroll-mt-28 space-y-8">
          <div className="faculty-reveal max-w-2xl">
            <SectionEyebrow>Coordenação acadêmica</SectionEyebrow>
            <h2 className="font-serif text-3xl font-bold text-[#123524]">Quem conduz os cursos da unidade</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#57685F]">
              Coordenações confirmadas para os cursos de graduação de Barcarena: Direito, Enfermagem e Psicologia. Titulações e Lattes só aparecem quando constam no material oficial.
            </p>
          </div>

          {coordenacao.length === 0 ? (
            <div className="space-y-6">
              <PendingPanel title="Coordenação em atualização">
                <p>
                  Não exibimos coordenadores de Belém como se fossem o quadro de Barcarena. Quando a Direção acadêmica confirmar cada nome para esta unidade, o perfil entra neste espaço com foto, cargo, curso local e titulação.
                </p>
                <p>
                  Os cursos vinculados seguirão o catálogo próprio de Barcarena — independente da grade de outras unidades.
                </p>
              </PendingPanel>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {['Fotografia autorizada', 'Curso da unidade', 'Titulação e apresentação'].map((slot) => (
                  <article
                    key={slot}
                    className="faculty-reveal rounded-2xl border border-dashed border-[#D9D2C3] bg-[#FBF6EE] p-5"
                  >
                    <div className="mb-4 aspect-[4/5] rounded-2xl bg-[#F4EEE3]" />
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A6D3B]">{slot}</p>
                    <p className="mt-2 font-serif text-lg text-[#123524]">Perfil a cadastrar</p>
                    <p className="mt-1 text-xs text-[#697A72]">Sem personagens fictícios neste cartão.</p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coordenacao.map((person) => (
                <CoordinatorCard key={person.id} person={person} />
              ))}
            </div>
          )}
        </section>

        <section id="docentes" className="scroll-mt-28 space-y-8">
          <div className="faculty-reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <SectionEyebrow>Corpo docente</SectionEyebrow>
              <h2 className="font-serif text-3xl font-bold text-[#123524]">Professores por curso da unidade</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#57685F]">
                Cada docente pode ser vinculado a um ou mais cursos do catálogo de Barcarena, com fotografia, titulação, área e Lattes quando houver URL oficial.
              </p>
            </div>
            {areas.length > 1 && (
              <select
                value={area}
                onChange={(event) => setArea(event.target.value)}
                className="rounded-lg border border-[#D9D2C3] bg-white px-3.5 py-2.5 text-xs"
              >
                {areas.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
          </div>

          {filteredFaculty.length === 0 ? (
            <div className="space-y-6">
              <PendingPanel title="Corpo docente em composição">
                <p>
                  A confirmação da Direção cobre a coordenação dos cursos de Direito, Enfermagem e Psicologia. Nomes de professores não são inventados para preencher a galeria.
                </p>
                <p>
                  Quando a lista oficial do corpo docente de Barcarena for autorizada, os cards abaixo agrupam fotografia, titulação, área, cursos vinculados e Lattes.
                </p>
              </PendingPanel>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {['Graduação', 'Pós-graduação', 'Área de conhecimento', 'Currículo Lattes'].map((slot) => (
                  <article
                    key={slot}
                    className="faculty-reveal rounded-2xl border border-[#E5DFD3] bg-white p-5"
                  >
                    <div className="mb-4 h-28 rounded-xl bg-[#F4EEE3]" />
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A6D3B]">{slot}</p>
                    <p className="mt-2 text-sm text-[#57685F]">Campo reservado ao cadastro oficial.</p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {facultyGroups.map((group) => (
                <div key={group.key} className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#123524]">{group.label}</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {group.members.map((member) => (
                      <FacultyCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

const DiretoriaFeature: React.FC<{ person: LeadershipProfile }> = ({ person }) => (
  <article className="faculty-reveal rounded-[2rem] border border-[#E5DFD3] bg-white shadow-xs">
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
      <div className="min-w-0 bg-[#06150E] p-5 sm:p-8">
        <PortraitFrame name={person.name} photo={person.photo} size="hero" />
      </div>
      <div className="flex min-w-0 flex-col justify-center space-y-5 p-8 sm:p-10">
        <div className="flex items-center gap-2 text-[#8A6D3B]">
          <Landmark className="h-4 w-4 shrink-0" />
          <span className="text-[11px] uppercase tracking-[0.2em]">{person.role}</span>
        </div>
        <h3 className="font-serif text-3xl font-bold leading-tight text-[#123524] sm:text-[2.35rem]">
          {person.name}
        </h3>
        {person.education ? (
          <p className="text-sm text-[#57685F]">{person.education}</p>
        ) : (
          <p className="text-xs text-[#8A6D3B]">Formação acadêmica ainda não publicada neste canal.</p>
        )}
        <p className="text-sm leading-relaxed text-[#47574E]">{person.bio}</p>
        {person.message && (
          <p className="border-l-2 border-[#C9A44C] pl-4 text-sm leading-relaxed text-[#57685F]">
            {person.message}
          </p>
        )}
        {person.notes && <p className="text-[11px] leading-relaxed text-[#8A5A2B]">{person.notes}</p>}
      </div>
    </div>
  </article>
);

const CoordinatorCard: React.FC<{ person: CoordinatorProfile }> = ({ person }) => {
  const [expanded, setExpanded] = useState(false);
  const hasFullBio = Boolean(person.presentation);
  const summary = person.presentationSummary ?? person.presentation;

  return (
    <article className="faculty-reveal flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E5DFD3] bg-white">
      <div className="p-4">
        <PortraitFrame name={person.name} photo={person.photo} />
      </div>
      <div className="flex flex-1 flex-col space-y-2 px-5 pb-6">
        <h3 className="font-serif text-xl font-bold text-[#123524]">{person.name}</h3>
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#8A6D3B]">{person.role}</p>
        {person.courseLabel && (
          <p className="text-xs text-[#57685F]">Curso: {person.courseLabel}</p>
        )}
        {person.title && <p className="text-xs text-[#47574E]">{person.title}</p>}
        {hasFullBio && summary ? (
          <>
            <p className="text-sm leading-relaxed text-[#47574E]">
              {expanded ? person.presentation : summary}
            </p>
            {person.presentationSummary && person.presentation && person.presentation !== person.presentationSummary && (
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="self-start pt-1 text-xs font-medium text-[#123524] underline underline-offset-2"
              >
                {expanded ? 'Recolher biografia' : 'Ver biografia completa'}
              </button>
            )}
          </>
        ) : null}
        {person.lattesUrl ? (
          <a
            href={person.lattesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 pt-2 text-xs text-[#123524] underline"
          >
            Currículo Lattes <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}
      </div>
    </article>
  );
};

const FacultyCard: React.FC<{ member: FacultyMember }> = ({ member }) => (
  <article className="faculty-reveal space-y-3 rounded-[1.5rem] border border-[#E5DFD3] bg-white p-5">
    <PortraitFrame name={member.name} photo={member.photo} />
    <div className="flex items-start gap-2 pt-1">
      <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-[#C9A44C]" />
      <div>
        <h3 className="font-serif text-lg font-bold text-[#123524]">{member.name}</h3>
        <p className="text-xs text-[#8A6D3B]">{member.title}</p>
      </div>
    </div>
    <p className="text-xs text-[#57685F]">{member.area}</p>
    {member.courseLabels.length > 0 && (
      <p className="text-xs text-[#47574E]">{member.courseLabels.join(' · ')}</p>
    )}
    {member.lattesUrl ? (
      <a
        href={member.lattesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-[#123524] underline"
      >
        Currículo Lattes <ExternalLink className="h-3 w-3" />
      </a>
    ) : (
      <p className="text-[11px] text-[#8A5A2B]">Lattes em atualização</p>
    )}
  </article>
);
