import React, { useRef } from 'react';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';

interface Props {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  byWord?: boolean;
}

export const RevealText: React.FC<Props> = ({
  children,
  className = '',
  as = 'h2',
  delay = 0,
  byWord = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const Component = as as any;

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current) return;

    const targets = containerRef.current.querySelectorAll('.reveal-unit');
    if (!targets.length) return;

    // Use ScrollTrigger if not immediately in viewport
    const rect = containerRef.current.getBoundingClientRect();
    const inInitialView = typeof window !== 'undefined' && rect.top < window.innerHeight && rect.bottom > 0;

    if (inInitialView && delay === 0) {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.04, ease: 'power3.out' }
      );
    } else {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, containerRef);

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const words = children.split(' ');

  return (
    <div ref={containerRef} className="inline-block overflow-hidden">
      <Component className={className}>
        {byWord ? (
          words.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] reveal-unit">
              {word}
            </span>
          ))
        ) : (
          <span className="inline-block reveal-unit">{children}</span>
        )}
      </Component>
    </div>
  );
};
