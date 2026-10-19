import React, { useRef } from 'react';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number; // e.g. -15 to +15%
  scaleFrom?: number;
  scaleTo?: number;
}

export const ParallaxImage: React.FC<Props> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  speed = -12,
  scaleFrom = 1.05,
  scaleTo = 1.15
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAPScene((ctx) => {
    if (reducedMotion || !containerRef.current || !imageRef.current) return;

    import('../../utils/motionConfig').then(({ gsap }) => {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -speed / 2,
          scale: scaleFrom
        },
        {
          yPercent: speed / 2,
          scale: scaleTo,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );
    });
  }, containerRef);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover will-change-transform ${imageClassName}`}
      />
    </div>
  );
};
