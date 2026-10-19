/**
 * Destinos oficiais de inscrição e processo seletivo.
 * Deixe a string vazia enquanto a URL não for publicada.
 * A interface nunca inventa destinos nem abre formulários internos.
 */

export type EnrollmentKind =
  | 'general'
  | 'vestibular'
  | 'graduacao'
  | 'pos'
  | 'extensao'
  | 'transferencia';

export const ENROLLMENT_LINKS: Record<EnrollmentKind, string> = {
  general: '',
  vestibular: '',
  graduacao: '',
  pos: '',
  extensao: '',
  transferencia: '',
};

export const ENROLLMENT_LINKS_BY_COURSE: Record<string, string> = {};

export function getEnrollmentUrl(options?: {
  kind?: EnrollmentKind;
  courseId?: string;
}): string | null {
  const courseId = options?.courseId;
  if (courseId) {
    const byCourse = ENROLLMENT_LINKS_BY_COURSE[courseId]?.trim();
    if (byCourse) return byCourse;
  }

  const kind = options?.kind ?? 'general';
  const direct = ENROLLMENT_LINKS[kind]?.trim();
  if (direct) return direct;

  const general = ENROLLMENT_LINKS.general.trim();
  return general || null;
}
