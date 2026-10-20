import { COORDENACAO, isPublicProfile, type BarcarenaGraduationCourseId } from './faculty';
import type { EnrollmentKind } from '../config/externalLinks';

export const ACADEMIC_LABELS = {
  degree: 'Grau acadêmico',
  modality: 'Modalidade',
  duration: 'Duração',
  shifts: 'Turnos',
  workload: 'Carga horária',
  seats: 'Vagas',
  authorization: 'Ato autorizativo',
  offering: 'Situação de oferta',
  admission: 'Processo seletivo',
} as const;

type AcademicField = keyof typeof ACADEMIC_LABELS;

/** Só publicar valores confirmados para Barcarena, acompanhados de fonte institucional. */
export type AcademicInformation =
  | { status: 'pending'; value: null; source: null }
  | { status: 'confirmed_barcarena'; value: string; source: string };

export interface BarcarenaCourse {
  id: BarcarenaGraduationCourseId;
  slug: string;
  name: string;
  area: string;
  type: 'Graduação';
  editorial: {
    summary: string;
    headline: string;
    description: string[];
    competencies: string[];
    careers: string[];
    visual: {
      kind: 'editorial';
      motif: 'justice' | 'care' | 'connections';
      words: [string, string, string];
      caption: string;
    };
  };
  coordinatorId: string;
  academic: Record<AcademicField, AcademicInformation>;
  validation: {
    catalogue: 'informed_by_direction';
    academic: 'pending';
    source: string;
  };
  enrollment: { kind: EnrollmentKind; courseId: string };
}

function pendingAcademicInformation(): BarcarenaCourse['academic'] {
  return Object.fromEntries(
    Object.keys(ACADEMIC_LABELS).map((key) => [key, { status: 'pending', value: null, source: null }]),
  ) as BarcarenaCourse['academic'];
}

export const BARCARENA_COURSES: readonly BarcarenaCourse[] = [
  {
    id: 'direito',
    slug: 'direito',
    name: 'Direito',
    area: 'Direito & Sociedade',
    type: 'Graduação',
    editorial: {
      summary: 'Compreender direitos, interpretar a sociedade e construir caminhos para a justiça.',
      headline: 'A justiça começa com um olhar atento para as pessoas.',
      description: [
        'O Direito estuda as normas e as instituições que organizam a vida em sociedade. É uma área para quem deseja compreender conflitos, defender direitos fundamentais e participar da construção de relações mais justas.',
        'Da cidadania às relações entre pessoas, organizações e poder público, o pensamento jurídico combina interpretação, argumentação e responsabilidade social. Na Amazônia, esse olhar também convida a refletir sobre o território, suas comunidades e seus desafios.',
      ],
      competencies: ['Leitura crítica e interpretação de textos e situações.', 'Argumentação clara, pesquisa e análise de diferentes perspectivas.', 'Reflexão ética sobre justiça, cidadania e direitos fundamentais.', 'Diálogo e compreensão de conflitos e das instituições.'],
      careers: ['Advocacia e consultoria jurídica.', 'Carreiras públicas e instituições de justiça.', 'Assessoria jurídica em organizações.', 'Pesquisa e educação na área jurídica.'],
      visual: { kind: 'editorial', motif: 'justice', words: ['Justiça', 'Cidadania', 'Ética'], caption: 'Direitos que aproximam. Ideias que transformam.' },
    },
    coordinatorId: 'coordenacao-direito',
    academic: pendingAcademicInformation(),
    validation: { catalogue: 'informed_by_direction', academic: 'pending', source: 'Direção FAUNA · Prompt 06; coordenação autorizada no Prompt 05.2.' },
    enrollment: { kind: 'graduacao', courseId: 'direito' },
  },
  {
    id: 'enfermagem',
    slug: 'enfermagem',
    name: 'Enfermagem',
    area: 'Saúde',
    type: 'Graduação',
    editorial: {
      summary: 'Ciência e sensibilidade para compreender o cuidado e a saúde individual e coletiva.',
      headline: 'Cuidar é unir conhecimento e presença humana.',
      description: [
        'A Enfermagem tem no cuidado sua razão de ser. A área reúne conhecimento científico, atenção às pessoas e responsabilidade profissional para compreender necessidades de saúde ao longo da vida.',
        'Pensar o cuidado envolve escuta, prevenção e promoção da qualidade de vida, respeitando a diversidade e os contextos de cada comunidade. É uma profissão em que ciência, ética e relações humanas caminham juntas.',
      ],
      competencies: ['Observação e compreensão de necessidades individuais e coletivas.', 'Comunicação acolhedora e trabalho em equipe.', 'Análise crítica de conhecimentos científicos relacionados ao cuidado.', 'Reflexão sobre ética, segurança e responsabilidade profissional.'],
      careers: ['Serviços de atenção à saúde em diferentes contextos.', 'Promoção da saúde e cuidado nas comunidades.', 'Organização e gestão do cuidado.', 'Pesquisa e educação em saúde.'],
      visual: { kind: 'editorial', motif: 'care', words: ['Cuidado', 'Ciência', 'Presença'], caption: 'Conhecimento que acolhe. Cuidado que conecta.' },
    },
    coordinatorId: 'coordenacao-enfermagem',
    academic: pendingAcademicInformation(),
    validation: { catalogue: 'informed_by_direction', academic: 'pending', source: 'Direção FAUNA · Prompt 06; coordenação autorizada no Prompt 05.2.' },
    enrollment: { kind: 'graduacao', courseId: 'enfermagem' },
  },
  {
    id: 'psicologia',
    slug: 'psicologia',
    name: 'Psicologia',
    area: 'Saúde & Relações Humanas',
    type: 'Graduação',
    editorial: {
      summary: 'Um olhar científico e humano sobre o comportamento, os vínculos e os processos psicológicos.',
      headline: 'Compreender o humano é abrir novas possibilidades.',
      description: [
        'A Psicologia investiga o comportamento e os processos psicológicos, considerando as relações entre pessoas e os ambientes em que vivem. Pesquisa, escuta e reflexão ética ajudam a compreender diferentes experiências humanas.',
        'A saúde mental, os vínculos e a diversidade dos modos de viver fazem parte desse horizonte. Em diálogo com a realidade amazônica, a área convida a reconhecer contextos culturais e sociais sem perder de vista a singularidade de cada pessoa.',
      ],
      competencies: ['Observação e análise de comportamentos e processos psicológicos.', 'Escuta e comunicação respeitosa em diferentes contextos.', 'Leitura crítica de pesquisas e construção de perguntas científicas.', 'Reflexão ética sobre diversidade, relações humanas e saúde mental.'],
      careers: ['Contextos clínicos e de saúde.', 'Educação e relações de aprendizagem.', 'Organizações e relações de trabalho.', 'Comunidades, políticas públicas e pesquisa.'],
      visual: { kind: 'editorial', motif: 'connections', words: ['Escuta', 'Vínculos', 'Pesquisa'], caption: 'Muitos modos de sentir. Novas formas de compreender.' },
    },
    coordinatorId: 'coordenacao-psicologia',
    academic: pendingAcademicInformation(),
    validation: { catalogue: 'informed_by_direction', academic: 'pending', source: 'Direção FAUNA · Prompt 06; coordenação autorizada no Prompt 05.2.' },
    enrollment: { kind: 'graduacao', courseId: 'psicologia' },
  },
];

export function getBarcarenaCourse(slug: string | undefined) {
  return BARCARENA_COURSES.find((course) => course.slug === slug);
}

export function getCourseCoordinator(course: BarcarenaCourse) {
  return COORDENACAO.find((person) =>
    person.id === course.coordinatorId && person.courseId === course.id &&
    person.unit === 'barcarena' && isPublicProfile(person.publicationStatus),
  );
}