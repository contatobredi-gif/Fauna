import { useState, type CSSProperties } from 'react';
import type { InstitutionalMedia } from '../../data/institutionalMedia';

export function InstitutionalImage({ media, priority = false, eager = false, className = '', sizes = '100vw' }: {
  media: InstitutionalMedia;
  priority?: boolean;
  eager?: boolean;
  className?: string;
  sizes?: string;
}) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  return (
    <div className={`institutional-image ${className}`} data-image-status={status} style={{
      '--image-desktop-focus': media.desktopFocus,
      '--image-mobile-focus': media.mobileFocus,
    } as CSSProperties}>
      <img
        src={media.src} srcSet={media.srcSet} sizes={sizes} alt={media.alt}
        width={media.width} height={media.height}
        loading={priority || eager ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async"
        onLoad={() => setStatus('loaded')} onError={() => setStatus('error')}
      />
      {status === 'error' && <span className="institutional-image-error" role="status">Imagem ilustrativa indisponível.</span>}
    </div>
  );
}
