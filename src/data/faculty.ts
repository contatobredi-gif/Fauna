/**
 * Diretoria e corpo docente.
 * Inclui apenas informações já presentes no conteúdo institucional do projeto.
 * Não inventar nomes, fotos, titulações ou links Lattes.
 */

export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  education: string;
  bio: string;
  photoSrc?: string;
  notes?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  area: string;
  course: string;
  lattesUrl?: string;
  photoSrc?: string;
}

export const LEADERSHIP: LeadershipProfile[] = [
  {
    id: 'diretoria-geral',
    name: 'Fabrício Peixoto do Nascimento',
    role: 'Diretoria Geral',
    education: 'Mantenedora F P do Nascimento EIRELI',
    bio: 'O ensino superior no Pará iniciou um processo revolucionário com a criação da FAUNA. A instituição vai além da diplomação formal: é uma faculdade desenhada para inspirar seus alunos, com acompanhamento próximo e formação sob medida.',
    notes: 'Fotografia oficial ainda não disponibilizada para esta página.',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [];
