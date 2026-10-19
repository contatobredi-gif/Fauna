import { useEffect, useRef, DependencyList } from 'react';
import { gsap } from '../utils/motionConfig';
import { useReducedMotion } from './useReducedMotion';

/**
 * Hook to execute GSAP animations scoped to a container ref with automatic cleanup (ctx.revert())
 * and bypass if prefers-reduced-motion is active.
 */
export function useGSAPScene(
  callback: (ctx: gsap.Context) => void,
  scopeRef: React.RefObject<HTMLElement | null>,
  deps: DependencyList = []
) {
  const reducedMotion = useReducedMotion();
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (reducedMotion || !scopeRef.current) return;

    // Create GSAP context scoped to current component container
    const ctx = gsap.context(() => {
      try {
        callbackRef.current(ctx);
      } catch (err) {
        console.warn('GSAP animation scene execution error caught:', err);
      }
    }, scopeRef.current);

    return () => {
      try {
        ctx.revert(); // Cleans up all timelines and ScrollTriggers created in context
      } catch (err) {
        console.warn('GSAP revert error caught:', err);
      }
    };
  }, [reducedMotion, ...deps]);
}
