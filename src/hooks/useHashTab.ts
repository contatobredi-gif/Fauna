import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollTrigger } from '../utils/motionConfig';

export const HEADER_SCROLL_OFFSET = 96;

export interface TabHashOption<T extends string> {
  tab: T;
  hashes: string[];
}

export function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  const el = id ? document.getElementById(id) : null;
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_SCROLL_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    return;
  }
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

export function useAlignedHashScroll(ready = true) {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => {
      if (hash && hash.length > 1) {
        scrollToHash(hash);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
      ScrollTrigger.refresh();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [pathname, search, hash, ready]);
}

export function useHashTab<T extends string>(
  tabs: TabHashOption<T>[],
  defaultTab: T
) {
  const location = useLocation();
  const navigate = useNavigate();
  const rawHash = decodeURIComponent(location.hash.replace(/^#/, ''));

  const resolveTab = (hash: string): T => {
    if (!hash) return defaultTab;
    const match = tabs.find((item) => item.hashes.includes(hash));
    return match?.tab ?? defaultTab;
  };

  const activeTab = resolveTab(rawHash);

  const setActiveTab = (tab: T) => {
    const canonical = tabs.find((item) => item.tab === tab)?.hashes[0] ?? tab;
    if (rawHash === canonical) {
      scrollToHash(canonical);
      return;
    }
    navigate(
      { pathname: location.pathname, search: location.search, hash: canonical },
      { preventScrollReset: true }
    );
  };

  useAlignedHashScroll(true);

  return { activeTab, setActiveTab, rawHash };
}
