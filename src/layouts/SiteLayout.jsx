import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';

// Elementos que se animan al entrar en pantalla (scroll-reveal).
// Se aplica solo, sin tocar cada sección una por una.
const REVEAL_SELECTORS = [
  '.hero-title',
  '.hero-desc',
  '.section-title',
  '.spec-card',
  '.project-chip',
  '.tag',
  '.checklist li',
  '.numbered-list li',
  '.gallery-placeholder',
  '.accordion-item',
].join(',');

export function SiteLayout({ children }) {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    // Vuelve al inicio de la página en cada cambio de sección.
    window.scrollTo({ top: 0 });

    const root = mainRef.current;
    if (!root) return undefined;

    const elements = Array.from(root.querySelectorAll(REVEAL_SELECTORS));

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('reveal', 'is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 8) * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-content">
        <Topbar />
        <main ref={mainRef}>{children}</main>
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
}