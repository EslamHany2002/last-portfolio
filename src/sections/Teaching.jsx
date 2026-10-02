import {
  Bug,
  Code,
  Gauge,
  GitPullRequest,
  GraduationCap,
  Layers,
  Lightbulb,
  Network,
  Presentation,
  Users,
} from 'lucide-react';
import { sections, teaching } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import SectionTitle from '../components/SectionTitle.jsx';

const FOCUS_ICONS = {
  training: Presentation,
  mentoring: Users,
  'code-review': GitPullRequest,
  architecture: Network,
  debugging: Bug,
  performance: Gauge,
  practices: Code,
  students: GraduationCap,
  workshops: Lightbulb,
};

export default function Teaching() {
  return (
    <section id="teaching" className="section" aria-labelledby="teaching-title">
      <div className="container teaching__inner">
        <div className="teaching__aside">
          <SectionTitle eyebrow={sectionEyebrow('teaching')} title={sections.teaching.title} id="teaching-title" />
          {teaching.intro && <p className="teaching__intro reveal">{teaching.intro}</p>}

          {teaching.highlights.length > 0 && (
            <dl className="teaching__highlights reveal">
              {teaching.highlights.map(({ value, label }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <ol className="focus-list reveal">
          {teaching.focusAreas.map(({ id, title, text }, index) => {
            const Icon = FOCUS_ICONS[id] ?? Layers;
            return (
              <li className="focus-item" key={id}>
                <span className="focus-item__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="focus-item__icon">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="focus-item__title">{title}</h3>
                  {text && <p className="focus-item__text">{text}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
