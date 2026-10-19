export type SocialNetwork =
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'linkedin'
  | 'tiktok';

export interface SocialLink {
  id: SocialNetwork;
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'instagram', label: 'Instagram', href: '' },
  { id: 'facebook', label: 'Facebook', href: '' },
  { id: 'youtube', label: 'YouTube', href: '' },
  { id: 'linkedin', label: 'LinkedIn', href: '' },
  { id: 'tiktok', label: 'TikTok', href: '' },
];

export function isSocialAvailable(link: SocialLink): boolean {
  return Boolean(link.href.trim());
}
