import { Code, GraduationCap, HeartHandshake, Layers, Megaphone, PenTool, Sparkles, Wrench } from 'lucide-react';
import { extraSkills, sections, skillGroups } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import SectionTitle from '../components/SectionTitle.jsx';
import SkillBar from '../components/SkillBar.jsx';
import SkillIcon, { hasSkillIcon } from '../components/SkillIcon.jsx';

const GROUP_ICONS = {
  development: Code,
  creative: PenTool,
  ai: Sparkles,
  marketing: Megaphone,
  leadership: GraduationCap,
  soft: HeartHandshake,
};

// Chip with the skill's brand or line icon when one is mapped.
function SkillTag({ name, large = false }) {
  const withIcon = hasSkillIcon(name);
  return (
    <li className={`tag ${large ? 'tag--lg' : ''} ${withIcon ? 'tag--icon' : ''}`}>
      {withIcon && <SkillIcon name={name} size={large ? 15 : 13} />}
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('skills')}
          title={sections.skills.title}
          description={sections.skills.description}
          id="skills-title"
          align="split"
        />

        <ul className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.id] ?? Layers;
            const tags = group.tags ?? [];
            return (
              <li className="skill-card reveal" key={group.id}>
                <header className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="skill-card__title">{group.title}</h3>
                  <span className="skill-card__count">
                    {String(group.skills.length + tags.length).padStart(2, '0')}
                  </span>
                </header>
                {group.skills.length > 0 && (
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                )}
                {tags.length > 0 && (
                  <ul className="tag-list skill-card__tags">
                    {tags.map((tag) => (
                      <SkillTag key={tag} name={tag} />
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {extraSkills.length > 0 && (
          <div className="tools reveal">
            <p className="tools__label">
              <Wrench size={15} strokeWidth={1.75} aria-hidden="true" />
              Tools
            </p>
            <ul className="tag-list">
              {extraSkills.map((tool) => (
                <SkillTag key={tool} name={tool} large />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
