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
    const scope = scopeRef.current;
    if (reducedMotion || !scope) return;

    // Create GSAP context scoped to current component container.
    // Use the context instance provided by GSAP (not the outer const),
    // because the factory runs synchronously during assignment.
    const ctx = gsap.context((self) => {
      try {
        callbackRef.current(self);
      } catch (err) {
        console.warn('GSAP animation scene execution error caught:', err);
      }
    }, scope);

    return () => {
      try {
        ctx.revert(); // Cleans up all timelines and ScrollTriggers created in context
      } catch (err) {
        console.warn('GSAP revert error caught:', err);
      }
    };
    // Scene-specific deps are passed by callers; scope is a ref.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, ...deps]);
}
