export interface InstitutionalMedia {
  id: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  desktopFocus: string;
  mobileFocus: string;
  origin: 'AI-generated conceptual illustration';
  generatedOn: '2026-10-20';
  purpose: string;
  requiresOfficialReplacement: true;
}

function conceptual(id: string, description: string, purpose: string, desktopFocus = 'center', mobileFocus = '60% center'): InstitutionalMedia {
  return {
    id,
    src: `/assets/cinematic/${id}-concept.jpg`,
    srcSet: `/assets/cinematic/${id}-concept-small.jpg 840w, /assets/cinematic/${id}-concept.jpg 1680w`,
    width: 1680,
    height: 946,
    alt: `Ilustração conceitual criada com IA: ${description}. Não é registro da FAUNA Barcarena.`,
    desktopFocus,
    mobileFocus,
    origin: 'AI-generated conceptual illustration',
    generatedOn: '2026-10-20',
    purpose,
    requiresOfficialReplacement: true,
  };
}

export const INSTITUTIONAL_MEDIA = {
  arrival: conceptual('arrival', 'passagem acadêmica com materiais naturais e pessoas ao fundo', 'Chegada e profundidade arquitetônica', 'center', '66% center'),
  immersion: conceptual('immersion', 'espaço de estudo compartilhado em continuidade com a passagem', 'Imersão em uma experiência acadêmica', 'center', '48% center'),
  presence: conceptual('presence', 'estudantes adultos em discussão com uma educadora', 'Presença humana e assinatura', 'center', '58% center'),
  law: conceptual('law', 'duas pessoas discutem a leitura de um livro', 'Leitura e argumentação, sem representar escritório jurídico', 'center', '60% center'),
  nursing: conceptual('nursing', 'estudantes e educadora analisam um caderno de estudos', 'Cuidado e atenção, sem representar clínica ou laboratório', 'center', '60% center'),
  psychology: conceptual('psychology', 'pessoas escutam e dialogam em um espaço de leitura', 'Escuta e relações humanas, sem representar atendimento clínico', 'center', '58% center'),
} satisfies Record<string, InstitutionalMedia>;

export const VISUAL_DISCLOSURE = 'Cenas ilustrativas criadas com IA. Não representam a unidade de Barcarena.';

export const OPENING_NARRATIVE = [
  { id: 'arrival', media: INSTITUTIONAL_MEDIA.arrival, title: 'Uma nova forma de viver o ensino superior.', signature: 'FAUNA — A Faculdade Boutique' },
  { id: 'immersion', media: INSTITUTIONAL_MEDIA.immersion, title: 'Conhecimento que se transforma em experiência.', signature: '' },
  { id: 'presence', media: INSTITUTIONAL_MEDIA.presence, title: 'O conhecimento aproxima.', signature: 'A experiência transforma.' },
] as const;
