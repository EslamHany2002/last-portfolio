import { Check, X } from 'lucide-react';
import {
  extraSkills,
  languages,
  personalInfo,
  profile,
  sidebarSkills,
  skillGroups,
} from '../data/portfolio.js';
import { navigation } from '../data/navigation.js';
import { scrollToSection } from '../lib/scrollToSection.js';
import Avatar from './Avatar.jsx';
import CvButton from './CvButton.jsx';
import DevNote from './DevNote.jsx';
import SkillBar from './SkillBar.jsx';
import SocialLinks from './SocialLinks.jsx';

const filledInfo = personalInfo.filter((item) => item.value);
const allSkills = skillGroups.flatMap((group) => group.skills);
const featuredSkills = sidebarSkills
  .map((name) => allSkills.find((skill) => skill.name === name))
  .filter(Boolean);

function SidebarBlock({ title, children }) {
  return (
    <section className="sidebar__block">
      <h2 className="sidebar__block-title">{title}</h2>
      {children}
    </section>
  );
}

export default function Sidebar({ id, activeId, isDrawer, isOpen, onClose, closeButtonRef }) {
  const hidden = isDrawer && !isOpen;

  // The drawer locks page scroll, so unlock it before scrolling, then close.
  const onDrawerNavClick = (event, sectionId) => {
    event.preventDefault();
    document.body.classList.remove('no-scroll');
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <aside
      id={id}
      className={`sidebar ${isOpen ? 'is-open' : ''}`}
      aria-label="Profile and navigation"
      inert={hidden}
      {...(isDrawer && { role: 'dialog', 'aria-modal': isOpen })}
    >
      {isDrawer && (
        <button
          ref={closeButtonRef}
          type="button"
          className="sidebar__close icon-button"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} strokeWidth={1.75} />
        </button>
      )}

      <div className="sidebar__scroll">
        <div className="sidebar__profile">
          <Avatar size="lg" />
          <p className="sidebar__name">{profile.name}</p>
          <p className="sidebar__role">{profile.primaryRole}</p>
          <SocialLinks className="sidebar__socials" />
        </div>

        <nav className="sidebar__nav" aria-label="Sections">
          <ul>
            {navigation.map(({ id: sectionId, label, icon: Icon }) => {
              const isActive = sectionId === activeId;
              return (
                <li key={sectionId}>
                  <a
                    href={`#${sectionId}`}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={isDrawer ? (event) => onDrawerNavClick(event, sectionId) : undefined}
                  >
                    <Icon className="nav-link__icon" size={17} strokeWidth={1.75} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {filledInfo.length > 0 ? (
          <SidebarBlock title="Info">
            <dl className="info-list">
              {filledInfo.map(({ label, value }) => (
                <div className="info-list__row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </SidebarBlock>
        ) : (
          <DevNote>Personal info (age, residence, location, availability) not provided yet</DevNote>
        )}

        <SidebarBlock title="Languages">
          <ul className="info-list">
            {languages.map(({ name, level }) => (
              <li className="info-list__row" key={name}>
                <span>{name}</span>
                {level && <span className="info-list__muted">{level}</span>}
              </li>
            ))}
          </ul>
        </SidebarBlock>

        {featuredSkills.length > 0 && (
          <SidebarBlock title="Skills">
            <div className="skill-list">
              {featuredSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
            {featuredSkills.every((skill) => skill.level === null) && (
              <DevNote>No proficiency levels provided — bars stay hidden until you add them</DevNote>
            )}
          </SidebarBlock>
        )}

        {extraSkills.length > 0 && (
          <SidebarBlock title="Extra Skills">
            <ul className="check-list">
              {extraSkills.map((skill) => (
                <li key={skill}>
                  <Check size={14} strokeWidth={2.25} aria-hidden="true" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </SidebarBlock>
        )}
      </div>

      <div className="sidebar__footer">
        <CvButton block />
      </div>
    </aside>
  );
}
