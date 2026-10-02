import { Clapperboard, Code, GraduationCap, Sparkles, Users } from 'lucide-react';
import { about, profile, sections } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import DevNote from '../components/DevNote.jsx';
import Media from '../components/Media.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const FACET_ICONS = {
  development: Code,
  creative: Sparkles,
  teaching: GraduationCap,
  content: Clapperboard,
  leadership: Users,
};

const { education } = about;

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__visual reveal">
          <Media
            path={about.image && `images/${about.image}`}
            alt={profile.name}
            label="About image"
            ratio="4 / 5"
            className="about__image"
          />
        </div>

        <div className="about__content">
          <SectionTitle eyebrow={sectionEyebrow('about')} title={sections.about.title} id="about-title" />

          {about.intro ? (
            <p className="about__intro reveal">{about.intro}</p>
          ) : (
            <DevNote>Introduction missing — set about.intro</DevNote>
          )}

          <ul className="about__facets reveal">
            {about.facets.map(({ id, title, text }) => {
              const Icon = FACET_ICONS[id];
              return (
                <li className="facet" key={id}>
                  {Icon && <Icon className="facet__icon" size={20} strokeWidth={1.5} aria-hidden="true" />}
                  <h3 className="facet__title">{title}</h3>
                  {text ? <p className="facet__text">{text}</p> : <DevNote>Text missing</DevNote>}
                </li>
              );
            })}
          </ul>

          {about.stats.length > 0 && (
            <dl className="about__stats reveal">
              {about.stats.map(({ value, label }) => (
                <div className="stat" key={label}>
                  <dt className="stat__label">{label}</dt>
                  <dd className="stat__value">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {education && (
            <div className="education reveal">
              <span className="education__icon">
                <GraduationCap size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="education__body">
                <p className="education__label">Education</p>
                <h3 className="education__degree">{education.degree}</h3>
                <p className="education__school">
                  {[education.institution, education.location].filter(Boolean).join(' · ')}
                </p>
                {education.note && <p className="education__note">{education.note}</p>}
                {education.coursework?.length > 0 && (
                  <ul className="tag-list education__tags" aria-label="Related coursework">
                    {education.coursework.map((course) => (
                      <li className="tag" key={course}>
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
