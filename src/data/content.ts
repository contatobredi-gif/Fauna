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
  fullText?: string;
}

/** Textos institucionais recuperados do site anterior (fauna-frontend-six). */
export const INSTITUTIONAL_COPY = {
  slogan: 'Conectando a Amazônia ao mundo',
  about:
    'Somos uma Instituição de Ensino comprometida com o desenvolvimento regional e a sustentabilidade formando profissionais de excelência para o mercado de trabalho.',
  mission:
    'Contribuir para o desenvolvimento socioeconômico, cultural e ambiental da sociedade, a partir da oferta de cursos superiores de graduação e de pós-graduação, articulando de maneira indissociável o Ensino, a Pesquisa e a Extensão, em uma perspectiva de formação centrada na integração entre o empreendedorismo, a inovação e a sustentabilidade.',
  vision:
    'Ser uma importante instituição de ensino do Estado do Pará, comprometida com o desenvolvimento regional e a sustentabilidade formando profissionais de excelência para o mercado de trabalho.',
  values: [
    'Inovação nas áreas profissionais;',
    'Sustentabilidade socioeconômica e ambiental;',
    'Valorização da cultura regional e brasileira;',
    'Formação centrada na ética e na meritocracia;',
    'Seres humanos comprometidos, respeitados e valorizados;',
    'Egressos com consciência acerca de suas histórias e da possibilidade de transformação frente a si e ao próximo.',
  ],
  directorParagraphs: [
    'Há quatro anos, ensino superior no Pará iniciava um processo revolucionário com o surgimento da FaUnA. Com conceito totalmente diferenciado, algo jamais vivenciado no universo da educação, a instituição vai muito além da diplomação de pessoas. É uma faculdade estrategicamente calculada para inspirar seus alunos, ou melhor, seus FAUNA, como são conhecidos.',
    'Um processo contínuo de transformação e movimento, que garante aos alunos uma experiência única, em ambiente aconchegante, harmonioso e elegante, algo idealizado para ser a extensão de suas casas. Na FaUnA, existe acolhimento e atendimento personalizado. Nossos FAUNA têm identidade, DNA, com nome e sobrenome.',
    'Para alcançar a excelência como Faculdade Boutique na Região Norte, a FaUnA criou sua própria expertise. A essência do nosso negócio não é quantidade ou volume, tampouco, tamanho. É ofertar produtos exclusivos, individualizados, como se fossem feitos à mão para atender e fazer a diferença no mercado de trabalho.',
    'Nossos FAUNA são treinados e incorporados ao empreendedorismo, com princípios, valores, ética, postura profissional, conhecimento teórico, técnico, de valorização da carreira e inovação de quem vivencia a prática desde o primeiro dia de aula. Por isso, surgimos. Por isso, a Faculdade Universo da Amazônia (FaUnA) é um divisor de águas no ensino superior.',
  ],
  saberMais: {
    concept:
      'O pioneirismo também é nossa marca registrada. Nesse universo de inovação, criamos o “Saber Mais”, uma metodologia exclusiva que nos consolida mais e mais como um agente transformador de sonhos em realidade por meio da educação.',
    methodology:
      'O Saber Mais é a metodologia institucional da FAUNA: um modo próprio de organizar o ensino para que o estudante não se limite à diplomação formal e desenvolva identidade profissional — com nome, sobrenome, ética e postura.',
    experience:
      'Na mensagem institucional da Diretoria, a formação FAUNA é descrita como vivência da prática desde o primeiro dia de aula, com acolhimento personalizado e ambiente pensado como extensão da casa do estudante.',
    differentials:
      'A essência declarada da instituição não é quantidade, volume ou tamanho, e sim formação individualizada, à maneira de uma Faculdade Boutique, para fazer diferença no mercado de trabalho.',
    application:
      'A metodologia orienta graduação e pós-graduação da IES. A forma como cada turma de Barcarena a aplicará será detalhada quando a oferta local estiver publicada em documento oficial.',
  },
  cpaPresentation:
    'A Comissão Própria de Avaliação – CPA é formada pela comunidade de professores, estudantes e técnico-administrativos da Faculdade Universo da Amazônia, e por membros da sociedade civil. Portanto, a CPA deve contar, na sua composição, com a participação de representantes de todos os segmentos da comunidade universitária e, também da sociedade civil organizada. A CPA é composta por um grupo de pessoas capazes de assumir a responsabilidade pelo desenvolvimento de todas as ações previstas no processo avaliativo. Fundamenta-se na necessidade de promover a melhoria da qualidade da educação superior, a orientação da expansão da sua oferta, o aumento da sua eficácia institucional, da sua efetividade acadêmica e social, especialmente, do aprofundamento dos compromissos e responsabilidades sociais.',
  cpaPurpose:
    'A Comissão Própria de Avaliação – CPA tem por finalidade coordenar a AVALIAÇÃO INTERNA ou AUTOAVALIAÇÃO, a qual tem como principais objetivos produzir conhecimentos, por em questão os sentidos do conjunto de atividades e finalidades cumpridas pela instituição, identificar as causas de suas deficiências, aumentar a consciência pedagógica e capacidade profissional do corpo docente e técnico-administrativo, fortalecer as relações de cooperação entre os diversos atores institucionais, tornar mais efetiva a vinculação da instituição com a comunidade, julgar acerca da relevância científica e social de suas atividades e produtos, além de prestar contas à sociedade.',
  lgpdIntro:
    'A sua privacidade é importante para nós. É política da F P do Nascimento EIRELI, mantenedora da Faculdade Universo da Amazônia (FaUnA), respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site da FaUnA, e outros sites que possuímos e operamos.',
  lgpdBody: [
    'Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.',
    'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.',
    'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.',
    'O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.',
    'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.',
    'O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, utilize os canais oficiais publicados na página de Contato.',
  ],
  cookies: {
    what: 'Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies.',
    how: 'Utilizamos cookies por vários motivos. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site.',
    disable:
      'Você pode impedir a configuração de cookies ajustando as configurações do seu navegador. Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita.',
    effective: 'Esta política é efetiva a partir de Janeiro/2021.',
  },
};

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
    notes: 'Textos integrais restaurados do site institucional anterior (missão, visão e seis valores).',
    summary: 'Missão: Formação indissociável de ensino, pesquisa e extensão voltada ao desenvolvimento regional, sustentabilidade e inovação.'
  },
  {
    id: 'inv-metodo-saber-mais',
    title: 'Método Saber Mais',
    category: 'Pedagógico',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Texto-base recuperado do site anterior. Aplicação em Barcarena permanece pendente de documento oficial.',
    summary: 'Metodologia exclusiva da FAUNA descrita como agente transformador por meio da educação.'
  },
  {
    id: 'inv-cpa',
    title: 'CPA — Comissão Própria de Avaliação',
    category: 'Regulatório / MEC',
    source: 'Referência B (Conteúdo/Six)',
    status: 'validado',
    notes: 'Textos de apresentação e finalidade recuperados. Relatórios sem arquivo não são listados para download.',
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
    notes: 'Nomes de portais e biblioteca recuperados do menu da IES; URLs e disponibilidade em Barcarena não confirmadas.',
    summary: 'Portais e biblioteca digital da instituição, com acesso ainda não publicado para Barcarena.'
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
    title: '2018: o início da Faculdade Universo da Amazônia',
    date: '2018',
    category: 'Memória institucional',
    excerpt: 'Publicação da portaria de autorização e início dos cursos de Gestão Hospitalar e Recursos Humanos. Realização do primeiro vestibular em 2018.1.',
    readTime: 'Memória',
    image: '/assets/fauna-photo-2-DMa52OaB.jpg',
    status: 'institucional',
    fullText:
      'Registro da trajetória da instituição, recuperado do site institucional anterior. Não descreve o campus de Barcarena.\n\nPublicação da portaria de autorização e início dos cursos de Gestão Hospitalar e Recursos Humanos. Realização do primeiro vestibular em 2018.1.',
  },
  {
    id: 'news-2',
    title: '2019: autorização de Enfermagem e Odontologia',
    date: '2019',
    category: 'Memória institucional',
    excerpt: 'Ampliação da estrutura física e inauguração de novos espaços. Autorização dos cursos de Enfermagem e Odontologia.',
    readTime: 'Memória',
    image: '/assets/fauna-photo-3-DKHEpz8K.jpg',
    status: 'institucional',
    fullText:
      'Registro da trajetória da instituição, recuperado do site institucional anterior. Refere-se à expansão da IES, não à unidade de Barcarena.\n\nAmpliação da estrutura física e inauguração de novos espaços. Autorização dos cursos de Enfermagem e Odontologia.',
  },
  {
    id: 'news-3',
    title: '2022: inauguração da Unidade FaUnA Prime',
    date: '2022',
    category: 'Memória institucional',
    excerpt: 'Inauguração da Unidade FaUnA Prime e ampliação da estrutura da instituição em Belém.',
    readTime: 'Memória',
    image: '/assets/fauna-photo-4-Bot9x6Jv.jpg',
    status: 'institucional',
    fullText:
      'Registro histórico da instituição, recuperado do site institucional anterior. A Unidade Prime pertence à operação de Belém e não deve ser lida como campus de Barcarena.\n\nInauguração da Unidade FaUnA Prime e ampliação da estrutura.',
  }
];

// -------------------------------------------------------------
// HISTÓRIA / TRAJETÓRIA OFICIAL DA MANTENEDORA
// -------------------------------------------------------------
export const TIMELINE_HISTORY = [
  {
    year: '2018',
    title: 'O início',
    description: 'Trajetória da instituição: publicação da portaria de autorização e início dos cursos de Gestão Hospitalar e Recursos Humanos. Realização do primeiro vestibular em 2018.1.'
  },
  {
    year: '2019',
    title: 'Crescimento',
    description: 'Trajetória da instituição: ampliação da estrutura física e inauguração de novos espaços. Autorização dos cursos de Enfermagem e Odontologia.'
  },
  {
    year: '2020',
    title: 'Ampliação',
    description: 'Trajetória da instituição: aquisição de novo prédio para clínicas e laboratórios de odontologia e implantação do programa de material e instrumental.'
  },
  {
    year: '2021',
    title: 'Meta atingida',
    description: 'Trajetória da instituição: esgotamento das vagas de Odontologia e Enfermagem; laboratório de simulações e modernização dos ambientes.'
  },
  {
    year: '2022',
    title: 'Visão de futuro',
    description: 'Trajetória da instituição em Belém: inauguração da Unidade FaUnA Prime e ampliação da estrutura. Este marco não descreve o campus de Barcarena.'
  },
  {
    year: '2026',
    title: 'Barcarena — recorte deste site',
    description: 'Este site institucional apresenta a FAUNA com foco em Barcarena. A implantação local e os atos regulatórios correspondentes serão publicados quando os documentos oficiais estiverem disponíveis. Não equivale a campus já autorizado neste canal.'
  }
];
