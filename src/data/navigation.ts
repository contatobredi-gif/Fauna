/**
 * Estrutura de navegação principal, rodapé e portais institucionais.
 * Cada item aponta para rota, aba (hash) ou query funcional.
 */

export interface NavSubLink {
  label: string;
  href: string;
  description?: string;
  needsValidation?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavSubLink[];
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  groups?: NavGroup[];
  sublinks?: NavSubLink[];
}

export function flattenNavItems(link: NavLink): NavSubLink[] {
  if (link.groups?.length) {
    return link.groups.flatMap((group) => group.items);
  }
  return link.sublinks ?? [];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  {
    label: 'A FAUNA',
    href: '/institucional',
    groups: [
      {
        title: 'A instituição',
        items: [
          { label: 'Quem Somos', href: '/institucional#quem-somos', description: 'Missão, visão e valores' },
          { label: 'Nossa História', href: '/institucional#nossa-historia', description: 'Trajetória 2018–2026' },
          { label: 'Método Saber Mais', href: '/institucional#metodo-saber-mais', description: 'Metodologia de aprendizagem ativa' },
          { label: 'Diretoria e Docentes', href: '/institucional/diretoria-docentes', description: 'Liderança acadêmica' },
        ],
      },
      {
        title: 'Governança',
        items: [
          { label: 'CPA — Autoavaliação', href: '/institucional#cpa', description: 'Comissão Própria de Avaliação' },
          { label: 'LGPD e Privacidade', href: '/institucional#lgpd', description: 'Tratamento de dados pessoais' },
          { label: 'Ouvidoria', href: '/contato#ouvidoria', description: 'Canal institucional de escuta' },
          { label: 'Trabalhe Conosco', href: '/contato#trabalhe-conosco', description: 'Banco de talentos de Barcarena' },
        ],
      },
      {
        title: 'Documentos',
        items: [
          { label: 'Editais', href: '/institucional#editais', description: 'Processos seletivos e comunicados' },
          { label: 'Regimento Geral', href: '/institucional#regimento', description: 'Normas de funcionamento' },
          { label: 'Regulamentos e Programas', href: '/institucional#regulamentos', description: 'Extensão e atividades complementares' },
          { label: 'Normas e Manuais', href: '/institucional#normas', description: 'Manual do aluno e convivência' },
        ],
      },
    ],
  },
  {
    label: 'Cursos',
    href: '/cursos',
    sublinks: [
      { label: 'Graduação', href: '/cursos?tipo=graduacao', description: 'Direito, Enfermagem e Psicologia em Barcarena' },
      { label: 'Pós-graduação', href: '/cursos?tipo=pos', description: 'Especializações profissionais' },
      { label: 'Extensão Universitária', href: '/cursos?tipo=extensao', description: 'Programas de curta duração, quando ofertados' },
    ],
  },
  {
    label: 'Como Ingressar',
    href: '/como-ingressar',
    sublinks: [
      { label: 'Vestibular', href: '/como-ingressar#vestibular', description: 'Processo seletivo próprio' },
      { label: 'ENEM', href: '/como-ingressar#enem', description: 'Ingresso pela nota do exame' },
      { label: 'Segunda Graduação', href: '/como-ingressar#segunda-graduacao', description: 'Portadores de diploma' },
      { label: 'Transferência Externa', href: '/como-ingressar#transferencia', description: 'Aproveitamento de estudos' },
    ],
  },
  {
    label: 'Benefícios',
    href: '/beneficios',
    sublinks: [
      { label: 'FAUNA Experience', href: '/beneficios#fauna-experience', description: 'Ritos acadêmicos e mérito' },
      { label: 'Meu Amigo Vale Muito', href: '/beneficios#meu-amigo-vale-muito', description: 'Programa de indicação, sujeito a validação' },
      { label: 'Sou FAUNA com Orgulho', href: '/beneficios#sou-fauna-orgulho', description: 'Continuidade na pós-graduação' },
      { label: 'Club FAUNA', href: '/beneficios#club-fauna', description: 'Convênios locais em credenciamento' },
    ],
  },
  {
    label: 'Vida Acadêmica',
    href: '/vida-academica',
    sublinks: [
      { label: 'Biblioteca', href: '/vida-academica#biblioteca', description: 'Acervo físico e apoio à pesquisa' },
      { label: 'Biblioteca Digital', href: '/vida-academica#biblioteca-digital', description: 'Minha Biblioteca e periódicos' },
      { label: 'Portais Acadêmicos', href: '/vida-academica#portais', description: 'Ambientes digitais institucionais' },
      { label: 'Talentos S/A', href: '/vida-academica#talentos', description: 'Estágios e conexão com o mercado' },
      { label: 'FAUNA LAB', href: '/vida-academica#lab', description: 'Inovação e projetos aplicados' },
      { label: 'Serviços e documentos', href: '/vida-academica#documentos', description: 'Validação e documentação acadêmica' },
    ],
  },
  {
    label: 'Eventos',
    href: '/eventos',
  },
  {
    label: 'Notícias',
    href: '/noticias',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
];

export interface AcademicPortal {
  name: string;
  desc: string;
  href: string;
  available: boolean;
}

export const ACADEMIC_PORTALS: AcademicPortal[] = [
  { name: 'Portal do Aluno', desc: 'Notas, frequências e rematrícula', href: '', available: false },
  { name: 'Portal do Professor', desc: 'Lançamento de notas e planos', href: '', available: false },
  { name: 'Portal do Coordenador', desc: 'Gestão acadêmica integrada', href: '', available: false },
  { name: 'SOOL — Orientação Online', desc: 'Sistema de orientação discente', href: '', available: false },
  { name: 'FAUNA Flix (AVA)', desc: 'Ambiente Virtual de Aprendizagem', href: '', available: false },
  { name: 'Minha Biblioteca', desc: 'Acervo e livros didáticos digitais', href: '', available: false },
];
