import { Award } from 'lucide-react';
import { achievements, sections } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="achievements-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('achievements')}
          title={sections.achievements.title}
          description={sections.achievements.description}
          id="achievements-title"
          align="split"
        />

        <ul className="achievements-grid reveal">
          {achievements.map(({ title, issuer, year, description }) => (
            <li key={title}>
              <article className="achievement">
                <div className="achievement__top">
                  <span className="achievement__icon">
                    <Award size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  {year && <span className="achievement__year">{year}</span>}
                </div>
                <h3 className="achievement__title">{title}</h3>
                {issuer && <p className="achievement__issuer">{issuer}</p>}
                {description && <p className="achievement__text">{description}</p>}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
