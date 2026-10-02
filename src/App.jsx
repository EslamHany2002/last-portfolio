import { useCallback, useEffect, useRef, useState } from 'react';
import MobileMenu from './components/MobileMenu.jsx';
import Sidebar from './components/Sidebar.jsx';
import { sectionIds } from './data/navigation.js';
import { useActiveSection } from './hooks/useActiveSection.js';
import { useMediaQuery } from './hooks/useMediaQuery.js';
import { useReveal } from './hooks/useReveal.js';
import { scrollToSection } from './lib/scrollToSection.js';
import About from './sections/About.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';
import CreativeWork from './sections/CreativeWork.jsx';
import Experience from './sections/Experience.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Services from './sections/Services.jsx';
import Skills from './sections/Skills.jsx';
import Teaching from './sections/Teaching.jsx';

const SIDEBAR_ID = 'sidebar';

function App() {
  const isDrawer = useMediaQuery('(max-width: 1023.98px)');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  useReveal();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // preventScroll: otherwise focusing interrupts the smooth scroll to the chosen section.
    menuButtonRef.current?.focus({ preventScroll: true });
  }, []);

  // Drawer behaviour: focus, Escape to close, lock page scroll.
  useEffect(() => {
    if (!isMenuOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen, closeMenu]);

  // All other in-page links (#section) scroll via the same helper as the sidebar.
  // The skip link (#main) keeps native behaviour so focus moves to the content.
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const link = event.target.closest('a[href^="#"]');
      const id = link?.getAttribute('href').slice(1);
      if (!id || id === 'main') return;
      if (scrollToSection(id)) event.preventDefault();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Close the drawer if the viewport grows to desktop size.
  useEffect(() => {
    if (!isDrawer) setMenuOpen(false);
  }, [isDrawer]);

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {isDrawer && (
        <MobileMenu
          isOpen={isMenuOpen}
          onOpen={() => setMenuOpen(true)}
          menuButtonRef={menuButtonRef}
          controlsId={SIDEBAR_ID}
        />
      )}

      <Sidebar
        id={SIDEBAR_ID}
        activeId={activeId}
        isDrawer={isDrawer}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        closeButtonRef={closeButtonRef}
      />

      <div
        className={`overlay ${isMenuOpen ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className="page">
        <main id="main" className="main" tabIndex={-1}>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Skills />
          <Projects />
          <CreativeWork />
          <Teaching />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
