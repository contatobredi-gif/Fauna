import type { InstitutionalMedia } from './institutionalMedia';

function courseMedia(id: string, description: string, focus = 'center'): InstitutionalMedia {
  return {
    id, src: `/assets/institutional/${id}-fauna.jpg`,
    srcSet: `/assets/institutional/${id}-fauna-small.jpg 840w, /assets/institutional/${id}-fauna.jpg 1448w`,
    width: 1448, height: 1086,
    alt: `Ilustra\u00e7\u00e3o conceitual criada com IA: ${description}. N\u00e3o representa pessoas ou instala\u00e7\u00f5es reais da FAUNA.`,
    desktopFocus: focus, mobileFocus: focus,
    origin: 'AI-generated conceptual illustration', purpose: description, requiresOfficialReplacement: true,
  };
}

export const HOMEPAGE_MEDIA = {
  facade: {
    id: 'institutional-facade', src: '/assets/cinematic/fachada-fauna.jpg',
    srcSet: '/assets/cinematic/fachada-fauna-small.jpg 840w, /assets/cinematic/fachada-fauna.jpg 1672w',
    width: 1672, height: 941,
    alt: 'Fachada FAUNA, com entrada e estrutura vermelha. Imagem editada a partir de fotografia real.',
    desktopFocus: '53% center', mobileFocus: '53% center',
    origin: 'Edited photograph', purpose: 'Fachada institucional da FAUNA', requiresOfficialReplacement: true,
  },
  direito: courseMedia('direito', 'estudantes em discuss\u00e3o acad\u00eamica com livros de Direito'),
  enfermagem: courseMedia('enfermagem', 'pr\u00e1tica conceitual de Enfermagem com manequim de simula\u00e7\u00e3o', '62% center'),
  psicologia: courseMedia('psicologia', 'grupo em di\u00e1logo acad\u00eamico sobre Psicologia'),
} satisfies Record<string, InstitutionalMedia>;
