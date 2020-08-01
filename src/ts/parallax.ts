import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const getOffset = (factor: number): number =>
  (document.documentElement.scrollHeight - innerHeight) * factor;

gsap.registerPlugin(ScrollTrigger);

gsap.to('.background', {
  scrollTrigger: {
    trigger: '.foreground-image',
    scrub: 0.2,
  },
  ease: 'none',
  y: getOffset(0.5),
});

gsap.to('.midground', {
  scrollTrigger: {
    trigger: '.foreground-image',
    scrub: 0.2,
  },
  ease: 'none',
  y: getOffset(0.3),
});

gsap.to('.heading', {
  scrollTrigger: {
    trigger: '.foreground-image',
    scrub: 0.2,
  },
  ease: 'none',
  y: getOffset(0.6),
});

gsap.to('.about-text', {
  scrollTrigger: {
    trigger: '.about-text',
    scrub: 0.2,
  },
  ease: 'none',
  y: getOffset(-0.1),
});

gsap.to('.about-heading', {
  scrollTrigger: {
    trigger: '.about-heading',
    start: 'top 75%',
    toggleActions: 'restart none none reverse',
  },
  opacity: 1,
});

gsap.to('.about-image', {
  scrollTrigger: {
    trigger: '.about-image',
    start: 'top 75%',
    toggleActions: 'restart none none reverse',
  },
  opacity: 1,
});

gsap.to('.about-text', {
  scrollTrigger: {
    trigger: '.about-text',
    start: 'top 75%',
    toggleActions: 'restart none none reverse',
  },
  opacity: 1,
});
