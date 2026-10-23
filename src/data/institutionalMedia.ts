export interface InstitutionalMedia {
  id: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  desktopFocus: string;
  mobileFocus: string;
  origin: 'AI-generated conceptual illustration' | 'Edited photograph';
  generatedOn?: '2026-10-20';
  purpose: string;
  requiresOfficialReplacement: true;
}

// Approved local originals remain at the repository root. Derivatives preserve their framing.
function openingMedia(id: string, description: string, mobileFocus = 'center', photograph = false): InstitutionalMedia {
  return {
    id, src: `/assets/cinematic/${id}.jpg`,
    srcSet: `/assets/cinematic/${id}-small.jpg 840w, /assets/cinematic/${id}.jpg 1672w`,
    width: 1672, height: 941,
    alt: photograph
      ? 'Fachada FAUNA: imagem editada a partir de fotografia real, com estrutura vermelha e entrada preservadas.'
      : `Ilustração conceitual criada com IA: ${description}. Não é registro das instalações da FAUNA.`,
    desktopFocus: 'center', mobileFocus,
    origin: photograph ? 'Edited photograph' : 'AI-generated conceptual illustration',
    purpose: description, requiresOfficialReplacement: true,
  };
}

const interiorDisclosure = 'Ambiente conceitual gerado por IA. Não representa instalações reais da FAUNA.';
export const OPENING_NARRATIVE = [
  { id: 'arrival', media: openingMedia('fachada-fauna', 'Chegada à fachada FAUNA', '55% center', true), title: 'Uma nova forma de viver o ensino superior.', signature: 'FAUNA — A Faculdade Boutique', disclosure: 'Fachada FAUNA: imagem editada a partir de fotografia real.' },
  { id: 'reception', media: openingMedia('recepcao-fauna', 'Recepção acadêmica'), title: '', signature: '', disclosure: interiorDisclosure },
  { id: 'immersion', media: openingMedia('corredor-fauna', 'Corredor acadêmico'), title: 'Conhecimento que se transforma em experiência.', signature: '', disclosure: interiorDisclosure },
  { id: 'library', media: openingMedia('biblioteca-fauna', 'Biblioteca acadêmica'), title: '', signature: '', disclosure: interiorDisclosure },
  { id: 'presence', media: openingMedia('sala-estudos-fauna', 'Sala de estudos'), title: 'O conhecimento aproxima.', signature: 'A experiência transforma.', disclosure: interiorDisclosure },
] as const;
