/**
 * Estrutura de navegação principal, rodapé e portais institucionais
 */

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  sublinks?: {
    label: string;
    href: string;
    description?: string;
    needsValidation?: boolean;
  }[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  {
    label: 'A FAUNA',
    href: '/institucional',
    sublinks: [
      { label: 'Quem Somos', href: '/institucional#quem-somos', description: 'Nossa história, missão e valores' },
      { label: 'Método Saber Mais', href: '/institucional#metodo-saber-mais', description: 'Metodologia exclusiva de aprendizagem ativa' },
      { label: 'CPA — Autoavaliação', href: '/institucional#cpa', description: 'Comissão Própria de Avaliação e relatórios' },
      { label: 'Diretoria e Docentes', href: '/institucional#diretoria', description: 'Liderança acadêmica e compromisso ético' },
      { label: 'LGPD & Governança', href: '/institucional#lgpd', description: 'Privacidade e tratamento de dados' },
      { label: 'Editais e Documentos', href: '/institucional#editais', description: 'Regimento geral, manuais e editais' }
    ]
  },
  {
    label: 'Cursos',
    href: '/cursos',
    sublinks: [
      { label: 'Graduação', href: '/cursos?tipo=graduacao', description: 'Direito, Enfermagem, Psicologia, Gestão e mais' },
      { label: 'Pós-graduação', href: '/cursos?tipo=pos', description: 'Especializações para avanço profissional' },
      { label: 'Extensão Universitária', href: '/cursos?tipo=extensao', description: 'Cursos de aperfeiçoamento de curta duração' }
    ]
  },
  {
    label: 'Como Ingressar',
    href: '/como-ingressar',
    sublinks: [
      { label: 'Vestibular Barcarena', href: '/como-ingressar#vestibular', description: 'Inscreva-se no processo seletivo' },
      { label: 'Nota do ENEM', href: '/como-ingressar#enem', description: 'Utilize sua pontuação sem prestar nova prova' },
      { label: 'Segunda Graduação', href: '/como-ingressar#segunda-graduacao', description: 'Condições exclusivas para diplomados' },
      { label: 'Transferência Externa', href: '/como-ingressar#transferencia', description: 'Venha para a FAUNA com aproveitamento' }
    ]
  },
  {
    label: 'Benefícios',
    href: '/beneficios',
    sublinks: [
      { label: 'FAUNA Experience', href: '/beneficios#fauna-experience', description: 'Manto Oficial, Kits e Mérito FAUNA' },
      { label: 'Meu Amigo Vale Muito', href: '/beneficios#meu-amigo-vale-muito', description: 'Bolsas e descontos de até 80%' },
      { label: 'Sou FAUNA com Orgulho', href: '/beneficios#sou-fauna-orgulho', description: 'Descontos para especializações' },
      { label: 'Club FAUNA', href: '/beneficios#club-fauna', description: 'Convênios locais em Barcarena' }
    ]
  },
  {
    label: 'Vida Acadêmica',
    href: '/vida-academica',
    sublinks: [
      { label: 'Biblioteca Digital', href: '/vida-academica#biblioteca', description: 'Milhares de títulos e periódicos CAPES' },
      { label: 'Portais Acadêmicos', href: '/vida-academica#portais', description: 'Aluno, Professor, Coordenador e SOOL' },
      { label: 'Talentos S/A & Estágios', href: '/vida-academica#talentos', description: 'Conexão direta com as empresas da região' },
      { label: 'FAUNA LAB', href: '/vida-academica#lab', description: 'Inovação e experimentação prática' }
    ]
  },
  {
    label: 'Notícias',
    href: '/noticias'
  },
  {
    label: 'Contato',
    href: '/contato'
  }
];

export const ACADEMIC_PORTALS = [
  { name: 'Portal do Aluno', desc: 'Notas, frequências e rematrícula', href: '#portal-aluno', icon: 'GraduationCap' },
  { name: 'Portal do Professor', desc: 'Lançamento de notas e planos', href: '#portal-professor', icon: 'BookOpen' },
  { name: 'Portal do Coordenador', desc: 'Gestão acadêmica integrada', href: '#portal-coordenador', icon: 'Users' },
  { name: 'SOOL — Orientação Online', desc: 'Sistema de orientação discente', href: '#sool', icon: 'Compass' },
  { name: 'FAUNA Flix (AVA)', desc: 'Ambiente Virtual de Aprendizagem', href: '#fauna-flix', icon: 'PlayCircle' },
  { name: 'Minha Biblioteca', desc: 'Acervo e livros didáticos digitais', href: '#minha-biblioteca', icon: 'Library' }
];
