import { Menu } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext.jsx';
import Avatar from './Avatar.jsx';

// Top bar shown below the desktop breakpoint; opens the sidebar as a drawer.
export default function MobileMenu({ isOpen, onOpen, menuButtonRef, controlsId }) {
  const { profile, ui } = useContent();
  return (
    <header className="topbar">
      <a href="#home" className="topbar__brand">
        <Avatar size="sm" />
        <span className="topbar__text">
          <span className="topbar__name">{profile.shortName}</span>
          <span className="topbar__role">{profile.primaryRole}</span>
        </span>
      </a>
      <button
        ref={menuButtonRef}
        type="button"
        className="icon-button"
        onClick={onOpen}
        aria-label={ui.openMenu}
        aria-expanded={isOpen}
        aria-controls={controlsId}
      >
        <Menu size={22} strokeWidth={1.75} />
      </button>
    </header>
  );
}
