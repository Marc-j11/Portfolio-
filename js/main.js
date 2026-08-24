(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const fadeElements = document.querySelectorAll('.fade-in');

  /* Nav scroll effect */
  function handleScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* Mobile menu */
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* Intersection Observer — fade-in on scroll */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  fadeElements.forEach(el => observer.observe(el));

  /* Stagger project cards */
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  /* Smooth parallax on hero circuit */
  const circuit = document.querySelector('.circuit-svg');
  if (circuit) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        circuit.style.transform = `translateY(${scroll * 0.15}px)`;
      }
    }, { passive: true });
  }
})();
