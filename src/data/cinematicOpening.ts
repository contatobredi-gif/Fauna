/**
 * O enquadramento aceita mídia documental sem alterar a sequência de animação.
 * Configurar apenas após confirmação de procedência, direitos e unidade.
 * Nenhum ambiente fictício ou fotografia conceitual é usado nesta abertura.
 */
export type CinematicOpeningMedia =
  | { kind: 'typography' }
  | { kind: 'photograph'; src: string; description: string }
  | { kind: 'video'; src: string; poster: string; description: string };

export const CINEMATIC_OPENING_MEDIA: CinematicOpeningMedia = { kind: 'typography' };
