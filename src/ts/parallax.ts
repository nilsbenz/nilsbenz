import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.addEventListener('scroll', function () {
  const distance = window.scrollY;
  const background = <HTMLElement>document.querySelector('.background');
  background.style.transform = `translateY(${distance * 0.2}px)`;

  const midground = <HTMLElement>document.querySelector('.midground');
  midground.style.transform = `translateY(${distance * 0.1}px)`;

  const heading = <HTMLElement>document.querySelector('.heading');
  heading.style.transform = `translateY(${distance * 0.6}px)`;
});

const getOffset = (factor: number): number =>
  (document.documentElement.scrollHeight - innerHeight) * factor;

gsap.registerPlugin(ScrollTrigger);

gsap.to('.scroll-down-icon', {
  scrollTrigger: {
    trigger: '.about-image',
    start: 'top 75%',
    toggleActions: 'restart none none reverse',
  },
  opacity: 0,
});

gsap.to('.about-text', {
  scrollTrigger: {
    trigger: '.about-text',
    scrub: 0.2,
  },
  ease: 'none',
  y: getOffset(-0.05),
});

gsap.to('.about-heading', {
  scrollTrigger: {
    trigger: '.about-heading',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.about-image', {
  scrollTrigger: {
    trigger: '.about-image',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.videos-main-player', {
  scrollTrigger: {
    trigger: '.videos-main-player',
    scrub: 0.2,
  },
  ease: 'none',
  y: getOffset(0.05),
});

gsap.to('.videos-heading', {
  scrollTrigger: {
    trigger: '.videos-heading',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.videos-text', {
  scrollTrigger: {
    trigger: '.videos-text',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.videos-main-player', {
  scrollTrigger: {
    trigger: '.videos-main-player',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.software-image', {
  scrollTrigger: {
    trigger: '.software-image',
    scrub: 0.2,
  },
  ease: 'none',
  x: getOffset(0.1),
});

gsap.to('.software-qualifications', {
  scrollTrigger: {
    trigger: '.software-qualifications',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.software-references-heading', {
  scrollTrigger: {
    trigger: '.software-references-heading',
    start: 'top 80%',
  },
  opacity: 1,
});

gsap.to('.software-references-text', {
  scrollTrigger: {
    trigger: '.software-references-text',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.software-interested-heading', {
  scrollTrigger: {
    trigger: '.software-interested-heading',
    start: 'top 80%',
  },
  opacity: 1,
});

gsap.to('.software-interested-text', {
  scrollTrigger: {
    trigger: '.software-interested-text',
    start: 'top 75%',
  },
  opacity: 1,
});

gsap.to('.contact-image', {
  scrollTrigger: {
    trigger: '.contact-image',
    start: 'top 75%',
  },
  scale: 1,
  opacity: 1,
});
