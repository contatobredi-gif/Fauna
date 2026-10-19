/**
 * Centralized Motion Design Configuration for FAUNA 3.0
 * Using GSAP & ScrollTrigger with idempotent plugin registration
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once safely in browser environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  // Configure default ScrollTrigger behavior
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });

  // Refresh calculations once web fonts are fully loaded
  if ('fonts' in document) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    }).catch(() => {});
  }

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}

export { gsap, ScrollTrigger };

export const MOTION_CONFIG = {
  // Standard refined bezier easing
  easing: {
    editorial: 'power3.out',
    cinematic: 'power2.inOut',
    smooth: 'expo.out',
    reveal: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },
  // Durations (in seconds)
  durations: {
    heroEntrance: 1.2,
    stagger: 0.12,
    hover: 0.25,
    transition: 0.6
  },
  // Breakpoints
  breakpoints: {
    desktop: 1024,
    tablet: 768
  },
  // Helpers
  isDesktop: () => typeof window !== 'undefined' && window.innerWidth >= 1024,
  isMobile: () => typeof window !== 'undefined' && window.innerWidth < 768
};
