/**
 * Diretoria, coordenação acadêmica e corpo docente — unidade Barcarena.
 *
 * Regras:
 * - Não inventar nomes, fotos, titulações, Lattes ou cargos.
 * - Não republicar automaticamente equipe ou cursos de Belém.
 * - Fotografia só entra na UI se `photo.authorized === true` e houver `src` em `public/`.
 * - A unidade FAUNA Barcarena terá catálogo próprio de cursos, independente da grade de Belém.
 *   Vínculos de docentes usam `courseIds` locais; não importar IDs de outra unidade.
 *
 * Cadastro futuro: preencher DIRETORIA, COORDENACAO e DOCENTES.
 * Perfis recuperados do site anterior ficam em ACERVO_EQUIPE_SITE_ANTERIOR (não publicados).
 */

export type InstitutionalUnit = 'ies' | 'barcarena' | 'belem';

export type FacultyPublicationStatus =
  | 'publicado_barcarena'
  | 'publicado_ies'
  | 'pendente_barcarena'
  | 'origem_belem_acervo';

export interface PersonPhoto {
  /** Caminho em `public/` somente após autorização. */
  src?: string;
  alt?: string;
  authorized: boolean;
  sourceUrl?: string;
  archivePath?: string;
  /** Enquadramento do retrato (CSS object-position), para preservar o rosto. */
  objectPosition?: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  /** Formação acadêmica confirmada. Não usar razão social da mantenedora. */
  education?: string;
  bio: string;
  message?: string;
  photo: PersonPhoto;
  unit: InstitutionalUnit;
  publicationStatus: FacultyPublicationStatus;
  notes?: string;
}

export interface CoordinatorProfile {
  id: string;
  name: string;
  role: string;
  /** Identificador do curso da unidade Barcarena, quando o catálogo local existir. */
  courseId?: string;
  courseLabel?: string;
  area?: string;
  title?: string;
  presentation?: string;
  presentationSummary?: string;
  photo: PersonPhoto;
  unit: InstitutionalUnit;
  publicationStatus: FacultyPublicationStatus;
  lattesUrl?: string;
  notes?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  area: string;
  courseIds: string[];
  courseLabels: string[];
  lattesUrl?: string;
  photo: PersonPhoto;
  unit: InstitutionalUnit;
  publicationStatus: FacultyPublicationStatus;
  notes?: string;
}

export interface RecoveredTeamProfile {
  id: string;
  name: string;
  originalRole: string;
  originalCourse?: string;
  photoFile: string;
  sourceUrl: string;
  unit: InstitutionalUnit;
  barcarenaConfirmation: 'necessaria' | 'nao_se_aplica_ies';
  photoAuthorization: 'nao_verificada';
  lattesPublishedOnSource: boolean;
  bioOnSource: boolean;
  notes: string;
}

export function personInitials(name: string): string {
  const parts = name
    .split(/\s+/)
    .filter((part) => part.length > 2 && !/^(da|das|de|do|dos|e)$/i.test(part));
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function isPublicProfile(status: FacultyPublicationStatus): boolean {
  return status === 'publicado_barcarena' || status === 'publicado_ies';
}

export function canShowPhoto(photo: PersonPhoto): boolean {
  return Boolean(photo.authorized && photo.src);
}

export function groupFacultyByCourse(members: FacultyMember[]): { key: string; label: string; members: FacultyMember[] }[] {
  const groups = new Map<string, { label: string; members: FacultyMember[] }>();

  members.forEach((member) => {
    if (!member.courseIds.length) {
      const fallback = groups.get('_sem_curso') ?? { label: 'Curso a vincular', members: [] };
      fallback.members.push(member);
      groups.set('_sem_curso', fallback);
      return;
    }

    member.courseIds.forEach((courseId, index) => {
      const label = member.courseLabels[index] ?? member.courseLabels[0] ?? 'Curso da unidade';
      const current = groups.get(courseId) ?? { label, members: [] };
      if (!current.members.some((item) => item.id === member.id)) {
        current.members.push(member);
      }
      groups.set(courseId, current);
    });
  });

  return Array.from(groups.entries()).map(([key, value]) => ({ key, ...value }));
}

/**
 * Diretoria publicada neste site.
 * Foto: acervo em docs/conteudo-coletado — não copiada para public/ até autorização.
 */
export const DIRETORIA: LeadershipProfile[] = [
  {
    id: 'diretoria-geral',
    name: 'Fabrício Peixoto do Nascimento',
    role: 'Diretoria Geral',
    education: undefined,
    bio: 'É uma faculdade estrategicamente calculada para inspirar seus alunos, ou melhor, seus FAUNA, como são conhecidos. Na FaUnA, existe acolhimento e atendimento personalizado. Nossos FAUNA têm identidade, DNA, com nome e sobrenome. A essência não é quantidade ou volume, tampouco tamanho: é ofertar formação individualizada para fazer a diferença no mercado de trabalho.',
    message:
      'A mensagem institucional recuperada descreve a FAUNA como Faculdade Boutique: formação próxima, com prática desde o primeiro dia de aula. O recorte de Barcarena segue essa identidade da IES, sem atribuir à unidade local cargos extras.',
    photo: {
      authorized: false,
      sourceUrl: 'https://fauna-frontend-six.vercel.app/assets/pages/fabricio.png',
      archivePath: 'docs/conteudo-coletado/assets/imagens/assets/pages/fabricio.png',
      alt: 'Retrato institucional de Fabrício Peixoto do Nascimento',
    },
    unit: 'ies',
    publicationStatus: 'publicado_ies',
    notes:
      'Nome e mensagem cruzam o site anterior. Cargo publicado: Diretoria Geral (o título “CEO & FaUnA” do site anterior não foi reproduzido). Formação acadêmica e Lattes não constam no acervo. Retrato permanece em acervo interno.',
  },
];

/** Alias de compatibilidade. */
export const LEADERSHIP = DIRETORIA;

/**
 * Grade de graduação informada para a unidade Barcarena.
 * Reutilizável nas páginas individuais de curso. Sem duração, turno, modalidade, vagas ou ato MEC.
 */
export const BARCARENA_GRADUATION_COURSES = [
  { id: 'direito', name: 'Direito', type: 'Graduação' as const },
  { id: 'enfermagem', name: 'Enfermagem', type: 'Graduação' as const },
  { id: 'psicologia', name: 'Psicologia', type: 'Graduação' as const },
] as const;

export type BarcarenaGraduationCourseId = (typeof BARCARENA_GRADUATION_COURSES)[number]['id'];

/**
 * Coordenação acadêmica da unidade Barcarena.
 * Publicação autorizada em 19/10/2026 (Prompt 05.2): Direito, Enfermagem e Psicologia.
 */
export const COORDENACAO: CoordinatorProfile[] = [
  {
    id: 'coordenacao-direito',
    name: 'Evanilde Gomes Franco',
    role: 'Coordenação do curso de Direito',
    courseId: 'direito',
    courseLabel: 'Direito',
    photo: {
      src: '/assets/equipe/evanilde-gomes-franco.jpeg',
      alt: 'Retrato de Evanilde Gomes Franco, coordenação do curso de Direito',
      authorized: true,
      objectPosition: 'center 22%',
      archivePath: 'FAUNA_Coordenacoes_Materiais/materiais-recebidos/Evanilde.jpeg',
    },
    unit: 'barcarena',
    publicationStatus: 'publicado_barcarena',
  },
  {
    id: 'coordenacao-enfermagem',
    name: 'Adilson Mendes de Figueiredo Júnior',
    role: 'Coordenação do curso de Enfermagem',
    courseId: 'enfermagem',
    courseLabel: 'Enfermagem',
    photo: {
      src: '/assets/equipe/adilson-mendes-de-figueiredo-junior.jpeg',
      alt: 'Retrato de Adilson Mendes de Figueiredo Júnior, coordenação do curso de Enfermagem',
      authorized: true,
      objectPosition: 'center 18%',
      archivePath: 'FAUNA_Coordenacoes_Materiais/materiais-recebidos/Adilson.jpeg',
    },
    unit: 'barcarena',
    publicationStatus: 'publicado_barcarena',
  },
  {
    id: 'coordenacao-psicologia',
    name: 'Flavia Beatriz Xavier do Vale',
    role: 'Coordenação do curso de Psicologia',
    courseId: 'psicologia',
    courseLabel: 'Psicologia',
    presentationSummary:
      'Graduada em Psicologia pela Universidade da Amazônia (UNAMA), Mestre e Doutora em Psicologia, na área de Teoria e Pesquisa do Comportamento, pela Universidade Federal do Pará (UFPA).',
    presentation:
      'Graduada em Psicologia pela Universidade da Amazônia (UNAMA), Mestre e Doutora em Psicologia, na área de Teoria e Pesquisa do Comportamento, pela Universidade Federal do Pará (UFPA). Possui experiência profissional em Psicologia Clínica, Avaliação Psicológica, Psicologia da Saúde, Psicologia Educacional e Psicologia do Esporte, com atuação também em pesquisa e educação. Possui experiência docente no ensino superior, supervisão clínica e tutoria em componentes curriculares na modalidade a distância, tendo atuado em diferentes Instituições de Educação Superior. Na graduação em Psicologia, possui experiência em componentes como Psicologia Experimental, Processos Psicológicos Básicos, Processos Grupais, Técnicas Projetivas e Expressivas de Avaliação, Métodos e Técnicas de Pesquisa em Psicologia, Técnicas de Avaliação Psicológica e Dinâmicas de Grupo. Desenvolve ainda atividades acadêmico-científicas e possui produção bibliográfica relacionada à Psicologia, com ênfase em aspectos psicológicos e comportamentais.',
    photo: {
      src: '/assets/equipe/flavia-beatriz-xavier-do-vale.jpeg',
      alt: 'Retrato de Flavia Beatriz Xavier do Vale, coordenação do curso de Psicologia',
      authorized: true,
      objectPosition: 'center 12%',
      archivePath: 'FAUNA_Coordenacoes_Materiais/materiais-recebidos/Flávia.jpeg',
    },
    unit: 'barcarena',
    publicationStatus: 'publicado_barcarena',
  },
];

/**
 * Corpo docente da unidade Barcarena, vinculado ao catálogo local (`courseIds`).
 */
export const DOCENTES: FacultyMember[] = [];

/** Alias de compatibilidade. */
export const FACULTY_MEMBERS = DOCENTES.filter((member) => isPublicProfile(member.publicationStatus));

export const ACERVO_EQUIPE_SITE_ANTERIOR: RecoveredTeamProfile[] = [
  {
    id: 'acervo-fabricio',
    name: 'Fabrício Peixoto do Nascimento',
    originalRole: 'CEO & FaUnA (rótulo do site anterior)',
    photoFile: 'assets/pages/fabricio.png',
    sourceUrl: 'https://fauna-frontend-six.vercel.app/assets/pages/fabricio.png',
    unit: 'ies',
    barcarenaConfirmation: 'nao_se_aplica_ies',
    photoAuthorization: 'nao_verificada',
    lattesPublishedOnSource: false,
    bioOnSource: true,
    notes: 'Correspondência visual do arquivo fabricio.png com a mensagem da Diretoria na página /institucional do site anterior. Uso neste canal ainda sem autorização expressa.',
  },
  {
    id: 'acervo-flavia',
    name: 'Flavia Beatriz Xavier do Vale',
    originalRole: 'Coordenação do curso de Psicologia',
    originalCourse: 'Psicologia (página institucional do site anterior)',
    photoFile: 'institucional/Flavia.jpeg',
    sourceUrl: 'https://fauna-frontend-six.vercel.app/institucional/Flavia.jpeg',
    unit: 'belem',
    barcarenaConfirmation: 'necessaria',
    photoAuthorization: 'nao_verificada',
    lattesPublishedOnSource: false,
    bioOnSource: true,
    notes: 'Confirmação Barcarena 19/10/2026: publicada em COORDENACAO com retrato oficial autorizado. Este registro permanece só como memória do site anterior.',
  },
  {
    id: 'acervo-evanilde',
    name: 'Evanilde Gomes Franco',
    originalRole: 'Coordenação do curso de Direito',
    originalCourse: 'Direito (página institucional do site anterior)',
    photoFile: 'institucional/Evanilde.jpeg',
    sourceUrl: 'https://fauna-frontend-six.vercel.app/institucional/Evanilde.jpeg',
    unit: 'belem',
    barcarenaConfirmation: 'necessaria',
    photoAuthorization: 'nao_verificada',
    lattesPublishedOnSource: false,
    bioOnSource: false,
    notes: 'Confirmação Barcarena 19/10/2026: publicada em COORDENACAO com retrato oficial autorizado. Currículo ainda não enviado.',
  },
  {
    id: 'acervo-adilson',
    name: 'Adilson Mendes de Figueiredo Júnior',
    originalRole: 'Coordenação do curso de Enfermagem',
    originalCourse: 'Enfermagem (página institucional do site anterior)',
    photoFile: 'institucional/Adilson.jpeg',
    sourceUrl: 'https://fauna-frontend-six.vercel.app/institucional/Adilson.jpeg',
    unit: 'belem',
    barcarenaConfirmation: 'necessaria',
    photoAuthorization: 'nao_verificada',
    lattesPublishedOnSource: false,
    bioOnSource: false,
    notes: 'Confirmação Barcarena 19/10/2026: publicada em COORDENACAO com retrato oficial autorizado. Currículo ainda não enviado.',
  },
];

export const publishedDiretoria = DIRETORIA.filter((person) => isPublicProfile(person.publicationStatus));
export const publishedCoordenacao = COORDENACAO.filter((person) => isPublicProfile(person.publicationStatus));
export const publishedDocentes = DOCENTES.filter((person) => isPublicProfile(person.publicationStatus));

export function getCoordinatorByCourseId(courseId: string): CoordinatorProfile | undefined {
  return publishedCoordenacao.find((person) => person.courseId === courseId);
}
