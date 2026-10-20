import { useEffect } from 'react';

/** Metadados de SPA; restaura os valores anteriores ao sair da página. */
export function useCourseSeo(title: string, description: string, pathname: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const cleanups: (() => void)[] = [];
    document.title = title;

    function meta(attribute: 'name' | 'property', key: string, value: string) {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      const existing = Boolean(element);
      const previous = element?.getAttribute('content');
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
      const target = element;
      cleanups.push(() => {
        if (!existing) target.remove();
        else if (previous === null) target.removeAttribute('content');
        else target.setAttribute('content', previous ?? '');
      });
    }

    meta('name', 'description', description);
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:type', 'website');
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', description);

    // Configurar somente com a origem oficial aprovada; nunca inferir do ambiente de preview.
    const configuredOrigin = import.meta.env.VITE_PUBLIC_SITE_URL?.trim();
    if (configuredOrigin) {
      try {
        const origin = new URL(configuredOrigin);
        if (origin.protocol === 'https:') {
          const url = new URL(pathname, origin.origin).href;
          const previous = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
          const previousHref = previous?.getAttribute('href');
          const canonical = previous ?? document.createElement('link');
          canonical.rel = 'canonical';
          canonical.href = url;
          if (!previous) document.head.appendChild(canonical);
          cleanups.push(() => {
            if (!previous) canonical.remove();
            else if (previousHref === null) canonical.removeAttribute('href');
            else canonical.setAttribute('href', previousHref ?? '');
          });
          meta('property', 'og:url', url);
          meta('property', 'og:image', new URL('/logo.png', origin.origin).href);
        }
      } catch {
        // Uma configuração inválida não publica uma URL canônica presumida.
      }
    }

    return () => {
      document.title = previousTitle;
      cleanups.reverse().forEach((cleanup) => cleanup());
    };
  }, [title, description, pathname]);
}