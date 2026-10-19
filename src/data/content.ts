/**
 * FAUNA — Faculdade Universo da Amazônia
 * Arquivo Central de Dados Institucionais e Inventário de Conteúdo
 * 
 * Regra institucional: conteúdos originários de Belém ou pendentes de confirmação
 * para a unidade de Barcarena são marcados com `needsValidation: true` e nota explicativa.
 */

export interface ContentItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  source: 'Referência A (Visual/Identidade)' | 'Referência B (Conteúdo/Six)' | 'Diretoria FAUNA';
  status: 'validado' | 'pendente_validacao_barcarena';
  notes: string;
  summary: string;
  fullText?: string;
  link?: string;
}

export interface Course {
  id: string;
  name: string;
  type: 'Graduação' | 'Pós-graduação' | 'Extensão';
  modality: 'Presencial' | 'Semipresencial' | 'A definir';
  duration: string;
  shift: string; // Turno
  area: 'Saúde' | 'Gestão & Negócios' | 'Direito & Sociedade' | 'Tecnologia';
  description: string;
  status: 'confirmado_barcarena' | 'em_estruturacao' | 'origem_belem_a_validar';
  validationNote: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  status: 'institucional' | 'demonstrativo';
}

export interface BenefitProgram {
  id: string;
  name: string;
  badge: string;
  targetAudience: string;
  headline: string;
  description: string;
  discountTable?: { label: string; discount: string }[];
  rules: string[];
  status: 'confirmado' | 'pendente_validacao_barcarena';
  validationNote: string;
}

// -------------------------------------------------------------
// INVENTÁRIO COMPLETO DE CONTEÚDO EXTRAÍDO DA REFERÊNCIA B
// -------------------------------------------------------------
export const CONTENT_INVENTORY: ContentItem[] = [
  {
    id: 'inv-institucional',
    title: 'Apresentação Institucional & Histórico (2018–2026)',
    category: 'Institucional',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Trajetória institucional da mantenedora F P do Nascimento EIRELI e implantação inicial. O novo polo de Barcarena representa a expansão territorial estratégica.',
    summary: 'A FAUNA nasceu em 2018 com foco no conceito de Faculdade Boutique, priorizando acolhimento personalizado, integração regional e infraestrutura de excelência.'
  },
  {
    id: 'inv-missao-visao',
    title: 'Missão, Visão e Valores',
    category: 'Institucional',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Preservado integralmente conforme diretriz oficial da mantenedora.',
    summary: 'Missão: Formação indissociável de ensino, pesquisa e extensão voltada ao desenvolvimento regional, sustentabilidade e inovação.'
  },
  {
    id: 'inv-metodo-saber-mais',
    title: 'Método Saber Mais',
    category: 'Pedagógico',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Metodologia de ensino ativa e inovadora da FAUNA aplicada a todas as unidades.',
    summary: 'Metodologia exclusiva da FAUNA com foco em prática desde os primeiros períodos e desenvolvimento de competências para o mundo real.'
  },
  {
    id: 'inv-cpa',
    title: 'CPA — Comissão Própria de Avaliação',
    category: 'Regulatório / MEC',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Estrutura obrigatória de autoavaliação com relatórios anuais 2018–2025.',
    summary: 'Comissão tripartite (docentes, discentes e técnico-administrativos com sociedade civil) para garantir a melhoria contínua da qualidade acadêmica.'
  },
  {
    id: 'inv-lgpd',
    title: 'LGPD & Governança de Dados',
    category: 'Jurídico',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Política de privacidade da mantenedora F P do Nascimento EIRELI aplicada aos processos digitais da FAUNA.',
    summary: 'Termos de proteção a dados sensíveis de candidatos, discentes e colaboradores.'
  },
  {
    id: 'inv-cursos-graduacao',
    title: 'Cursos de Graduação (Direito, Enfermagem, Odontologia, Biomedicina, Psicologia, Gestão)',
    category: 'Acadêmico',
    source: 'Referência B (Conteúdo/Six)',
    status: 'pendente_validacao_barcarena',
    notes: 'IMPORTANTE: Na versão anterior (Belém), constavam Odontologia, Enfermagem, Biomedicina, Psicologia, Direito, Gestão Hospitalar e RH. A grade específica com portarias autorizativas do Polo Barcarena está em fase de publicação final pelo MEC.',
    summary: 'Cursos apresentados com status de preparação e canal de interesse prioritário para o vestibular de Barcarena.'
  },
  {
    id: 'inv-cursos-pos',
    title: 'Cursos de Pós-Graduação e Especializações',
    category: 'Pós-graduação',
    source: 'Referência B (Conteúdo/Six)',
    status: 'pendente_validacao_barcarena',
    notes: 'Cursos nas áreas de Saúde e Gestão (HOF, Endodontia, UTI, Urgência) requerem validação das turmas presenciais para Barcarena.',
    summary: 'Especializações com foco em prática avançada e certificações técnicas.'
  },
  {
    id: 'inv-fauna-experience',
    title: 'FAUNA Experience & Premiação Mérito FAUNA',
    category: 'Vida Acadêmica',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Tradição institucional (Solenidade do Manto, Entrega dos Kits e Mérito FAUNA com anel de ouro e rubi aos melhores formandos).',
    summary: 'Celebração da jornada acadêmica e valorização do esforço discente com eventos institucionais de alto padrão.'
  },
  {
    id: 'inv-amigo-vale-muito',
    title: 'Programa Meu Amigo Vale Muito (Graduação)',
    category: 'Benefícios',
    source: 'Referência B (Conteúdo/Six)',
    status: 'pendente_validacao_barcarena',
    notes: 'Regulamento de até 80% de desconto por indicação de amigos (5% cumulativo por amigo matriculado na mesma turma). Requer validação das turmas de Barcarena.',
    summary: 'Política de incentivo à expansão da rede universitária através de bolsas por indicação de colegas.'
  },
  {
    id: 'inv-sou-fauna-orgulho',
    title: 'Programa Sou FAUNA com Orgulho (Pós-Graduação)',
    category: 'Benefícios',
    source: 'Referência B (Conteúdo/Six)',
    status: 'pendente_validacao_barcarena',
    notes: 'Descontos de 30% a 80% para especializações por formação de grupos ou ex-alunos.',
    summary: 'Benefício exclusivo de continuidade de estudos para a comunidade amazônica.'
  },
  {
    id: 'inv-club-fauna',
    title: 'Club FAUNA (Convênios e Parcerias)',
    category: 'Benefícios',
    source: 'Referência B (Conteúdo/Six)',
    status: 'pendente_validacao_barcarena',
    notes: 'Na versão anterior constavam parcerias de Belém (ex: Gramophone Café). Requer mapeamento dos parceiros comerciais e industriais de Barcarena e Vila dos Cabanos.',
    summary: 'Clube de benefícios com descontos no comércio, gastronomia, saúde e cultura local.'
  },
  {
    id: 'inv-talentos-sa',
    title: 'Talentos S/A & FAUNA LAB',
    category: 'Carreira e Inovação',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Agência de estágios e colocação profissional, fundamental para o polo industrial e portuário de Barcarena.',
    summary: 'Ponte direta entre estudantes e o mercado produtivo, indústrias, cooperativas e empresas do Pará.'
  },
  {
    id: 'inv-formas-ingresso',
    title: 'Formas de Ingresso (Vestibular, ENEM, 2ª Graduação, Transferência)',
    category: 'Processo Seletivo',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Processos seletivos previstos para o ingresso em Barcarena, com edital próprio em consolidação.',
    summary: 'Múltiplos caminhos de acesso com aproveitamento de nota do ENEM e transferências facilitadas.'
  },
  {
    id: 'inv-biblioteca-portais',
    title: 'Biblioteca Virtual, SOOL, Portal do Aluno e FAUNA Flix',
    category: 'Infraestrutura Digital',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Sistemas corporativos já ativos na infraestrutura da mantenedora disponíveis aos estudantes de Barcarena.',
    summary: 'Acesso a milhares de títulos digitais, periódicos CAPES, sistema acadêmico e aulas complementares.'
  }
];

// -------------------------------------------------------------
// CURSOS ESTRUTURADOS (COM FLAG DE VALIDAÇÃO DE GRADE BARCARENA)
// -------------------------------------------------------------
export const COURSES_DATA: Course[] = [
  {
    id: 'direito',
    name: 'Direito',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '5 anos (10 semestres)',
    shift: 'Matutino e Noturno',
    area: 'Direito & Sociedade',
    description: 'Formação jurídica de excelência com ênfase em Direito Ambiental, Minerário, Portuário e Empresarial, alinhada à vocação produtiva de Barcarena.',
    status: 'em_estruturacao',
    validationNote: 'Grade curricular adaptada para o polo Barcarena. Portaria em consolidação.'
  },
  {
    id: 'enfermagem',
    name: 'Enfermagem',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '5 anos (10 semestres)',
    shift: 'Matutino e Noturno',
    area: 'Saúde',
    description: 'Prática assistencial e clínica humanizada com laboratórios de simulação realística e solenidade oficial do Manto da Enfermagem.',
    status: 'em_estruturacao',
    validationNote: 'Laboratórios práticos em instalação em Barcarena.'
  },
  {
    id: 'psicologia',
    name: 'Psicologia',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '5 anos (10 semestres)',
    shift: 'Matutino e Noturno',
    area: 'Saúde',
    description: 'Formação científica e humanista focada em saúde mental coletiva, clínica e organizacional em contextos amazônicos.',
    status: 'em_estruturacao',
    validationNote: 'Coordenação com corpo docente de mestres e doutores.'
  },
  {
    id: 'biomedicina',
    name: 'Biomedicina',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '4 anos (8 semestres)',
    shift: 'Matutino e Noturno',
    area: 'Saúde',
    description: 'Pesquisa diagnóstica, análises clínicas, biotecnologia e imunologia aplicada à biodiversidade e saúde regional.',
    status: 'origem_belem_a_validar',
    validationNote: 'Oferta em Barcarena sujeita ao cronograma de abertura de laboratórios.'
  },
  {
    id: 'farmacia',
    name: 'Farmácia',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '5 anos (10 semestres)',
    shift: 'Matutino e Noturno',
    area: 'Saúde',
    description: 'Estudo de fitoterápicos, fármacos e tecnologia cosmética valorizando os ativos botânicos da floresta amazônica.',
    status: 'origem_belem_a_validar',
    validationNote: 'Pendente de confirmação para a primeira turma de Barcarena.'
  },
  {
    id: 'odontologia',
    name: 'Odontologia',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '5 anos (10 semestres)',
    shift: 'Matutino e Noturno',
    area: 'Saúde',
    description: 'Clínica odontológica integrada, reabilitação oral e kit instrumental personalizado para a formação profissional.',
    status: 'origem_belem_a_validar',
    validationNote: 'Complexo de clínicas odontológicas em fase de planejamento para a unidade.'
  },
  {
    id: 'gestao-rh',
    name: 'Gestão de Recursos Humanos',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '2 anos (4 semestres)',
    shift: 'Noturno',
    area: 'Gestão & Negócios',
    description: 'Tecnologia de rápida inserção para liderança, gestão estratégica de pessoas e relações trabalhistas industriais.',
    status: 'em_estruturacao',
    validationNote: 'Forte demanda pelo polo industrial e logístico de Barcarena.'
  },
  {
    id: 'gestao-hospitalar',
    name: 'Gestão Hospitalar',
    type: 'Graduação',
    modality: 'Presencial',
    duration: '3 anos (6 semestres)',
    shift: 'Noturno',
    area: 'Gestão & Negócios',
    description: 'Gestão de serviços de saúde, logística clínica, auditoria e regulação hospitalar para a rede pública e privada.',
    status: 'em_estruturacao',
    validationNote: 'Voltado aos hospitais e unidades de saúde do Baixo Tocantins.'
  },
  {
    id: 'pos-urgencia-emergencia',
    name: 'Urgência e Emergência Hospitalar',
    type: 'Pós-graduação',
    modality: 'Presencial',
    duration: '18 meses',
    shift: 'Quinzenal (Fins de semana)',
    area: 'Saúde',
    description: 'Especialização para enfermeiros e médicos com treinamento intensivo em cenários críticos de atendimento.',
    status: 'em_estruturacao',
    validationNote: 'Pós-graduação lato sensu para profissionais de Barcarena e região.'
  },
  {
    id: 'pos-gestao-projetos-esg',
    name: 'Gestão Estratégica, Sustentabilidade e ESG',
    type: 'Pós-graduação',
    modality: 'Presencial',
    duration: '14 meses',
    shift: 'Quinzenal',
    area: 'Gestão & Negócios',
    description: 'Formação para executivos com foco em governança corporativa, licenciamento ambiental e valor compartilhado na Amazônia.',
    status: 'em_estruturacao',
    validationNote: 'Programa criado com foco nas indústrias e cadeias globais de Barcarena.'
  }
];

// -------------------------------------------------------------
// PROGRAMAS E BENEFÍCIOS ACADÊMICOS
// -------------------------------------------------------------
export const BENEFIT_PROGRAMS: BenefitProgram[] = [
  {
    id: 'fauna-experience',
    name: 'FAUNA Experience',
    badge: 'Vivência & Ritos Acadêmicos',
    targetAudience: 'Estudantes de graduação de todos os cursos',
    headline: 'A universidade acontece muito além da sala de aula.',
    description: 'Uma série de vivências marcantes que constroem pertencimento e orgulho: a Solenidade do Manto Oficial, a Entrega de Kits de Instrumental e o prestigiado Prêmio Mérito FAUNA.',
    rules: [
      'Solenidade do Manto Oficial para cursos da área da saúde no início do ciclo profissional.',
      'Entrega de Kits oficiais garantindo acesso a instrumental de qualidade.',
      'Premiação Mérito FAUNA: celebração anual que reconhece os melhores alunos de cada curso com homenagem exclusiva e joia simbólica.',
      'Projeto Acolher: ações comunitárias de atendimento e responsabilidade social em Barcarena.'
    ],
    status: 'confirmado',
    validationNote: 'Valores e tradições institucionais confirmados para Barcarena.'
  },
  {
    id: 'meu-amigo-vale-muito',
    name: 'Meu Amigo Vale Muito',
    badge: 'Bolsas por Indicação',
    targetAudience: 'Alunos de Graduação da FAUNA',
    headline: 'Descontos progressivos de até 80% nas mensalidades.',
    description: 'Cada amigo indicado que se matricula na mesma turma garante 5% de desconto adicional na mensalidade até o final do curso, para pagamentos em dia.',
    discountTable: [
      { label: '1 amigo matriculado', discount: '35% de desconto' },
      { label: '2 amigos matriculados', discount: '40% de desconto' },
      { label: '4 amigos matriculados', discount: '50% de desconto' },
      { label: '6 amigos matriculados', discount: '60% de desconto' },
      { label: '8 amigos matriculados', discount: '70% de desconto' },
      { label: '10 amigos matriculados', discount: '80% de desconto' },
    ],
    rules: [
      'Desconto cumulativo de 5% para cada novo amigo matriculado na mesma turma.',
      'Válido para pagamento efetuado pontualmente até o dia 5 de cada mês.',
      'Indicação informada no ato da inscrição ou matrícula.',
      'Regulamento geral sujeito à confirmação das turmas inaugurais de Barcarena.'
    ],
    status: 'pendente_validacao_barcarena',
    validationNote: 'Tabela de desconto histórica de Belém; aguarda confirmação dos limites para o polo Barcarena.'
  },
  {
    id: 'sou-fauna-orgulho',
    name: 'Sou FAUNA com Orgulho',
    badge: 'Pós-Graduação',
    targetAudience: 'Alunos e Egressos em Especializações',
    headline: 'Até 80% de desconto para turmas de pós-graduação.',
    description: 'Incentivo à educação continuada para grupos de profissionais que ingressam juntos em programas de pós-graduação.',
    discountTable: [
      { label: '3 amigos matriculados', discount: '30% de desconto' },
      { label: '4 amigos matriculados', discount: '40% de desconto' },
      { label: '5 amigos matriculados', discount: '50% de desconto' },
      { label: '6 amigos matriculados', discount: '60% de desconto' },
      { label: '7 amigos matriculados', discount: '70% de desconto' },
      { label: '8 amigos matriculados', discount: '80% de desconto' },
    ],
    rules: [
      'Válido para amigos matriculados no mesmo curso e turma de pós-graduação.',
      'Desconto incide sobre a parcela integral paga até o vencimento.',
      'Não cumulativo com outras promoções institucionais.'
    ],
    status: 'pendente_validacao_barcarena',
    validationNote: 'Aguardando validação com a coordenação de pós-graduação.'
  },
  {
    id: 'club-fauna',
    name: 'Club FAUNA',
    badge: 'Convênios & Benefícios',
    targetAudience: 'Comunidade acadêmica e colaboradores',
    headline: 'Vantagens exclusivas em estabelecimentos credenciados.',
    description: 'Rede de benefícios e parcerias com comércios, clínicas, academias, centros culturais e livrarias para estudantes da FAUNA.',
    rules: [
      'Apresentação da carteirinha digital do estudante no aplicativo.',
      'Parcerias locais em Barcarena e polos metropolitanos vizinhos em credenciamento.'
    ],
    status: 'pendente_validacao_barcarena',
    validationNote: 'Convênios locais de Barcarena estão sendo formalizados com a Associação Comercial local.'
  }
];

// -------------------------------------------------------------
// NOTÍCIAS E ARTIGOS INSTITUCIONAIS
// -------------------------------------------------------------
export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'FAUNA inicia preparação institucional de seu novo campus em Barcarena',
    date: '15 de Outubro de 2026',
    category: 'Institucional',
    excerpt: 'Com projeto focado na vocação amazônica e no desenvolvimento humano, a Faculdade Universo da Amazônia consolida presença no município.',
    readTime: '3 min de leitura',
    image: '/assets/fauna-photo-2-DMa52OaB.jpg',
    status: 'institucional'
  },
  {
    id: 'news-2',
    title: 'Método Saber Mais: a integração entre teoria, prática e território',
    date: '02 de Outubro de 2026',
    category: 'Acadêmico',
    excerpt: 'Conheça como a metodologia pedagógica exclusiva da FAUNA estimula liderança, pensamento crítico e soluções para desafios amazônicos.',
    readTime: '4 min de leitura',
    image: '/assets/fauna-photo-3-DKHEpz8K.jpg',
    status: 'institucional'
  },
  {
    id: 'news-3',
    title: 'Comissão Própria de Avaliação (CPA) abre ciclo preparatório para o ano letivo',
    date: '28 de Setembro de 2026',
    category: 'Regulatório',
    excerpt: 'Comunidade docente e discente participa dos instrumentos de autoavaliação contínua para manter os mais elevados índices de qualidade.',
    readTime: '2 min de leitura',
    image: '/assets/fauna-photo-4-Bot9x6Jv.jpg',
    status: 'institucional'
  }
];

// -------------------------------------------------------------
// HISTÓRIA / TRAJETÓRIA OFICIAL DA MANTENEDORA
// -------------------------------------------------------------
export const TIMELINE_HISTORY = [
  {
    year: '2018',
    title: 'O Início & Primeira Portaria',
    description: 'Publicação da portaria de autorização pelo MEC e início dos cursos de Gestão Hospitalar e Recursos Humanos, realizando o primeiro vestibular histórico.'
  },
  {
    year: '2019',
    title: 'Expansão e Autorizações',
    description: 'Ampliação da estrutura física, novos espaços e autorização das graduações em Enfermagem e Odontologia.'
  },
  {
    year: '2020',
    title: 'Clínicas e Laboratórios de Ponta',
    description: 'Implantação do programa de instrumental próprio, aquisição de novas instalações laboratoriais e adaptação para simulação realística.'
  },
  {
    year: '2021',
    title: 'Consolidação e Reconhecimento',
    description: 'Esgotamento das vagas em Enfermagem e Odontologia, modernização de ambientes e início do programa FAUNA Experience.'
  },
  {
    year: '2022',
    title: 'Unidade Prime & Inovação',
    description: 'Lançamento da Unidade Prime com modelo boutique de atendimento exclusivo e turmas com acompanhamento individualizado.'
  },
  {
    year: '2026',
    title: 'FAUNA Barcarena — Da Amazônia para o Mundo',
    description: 'Novo marco estratégico: implantação do polo de excelência em Barcarena, conectando conhecimento acadêmico, bioeconomia e o futuro profissional do Pará.'
  }
];
