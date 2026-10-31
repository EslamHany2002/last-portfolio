import { useContent } from '../i18n/LanguageContext.jsx';
import { sectionEyebrow } from '../data/navigation.js';
import ExperienceItem from '../components/ExperienceItem.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Experience() {
  const { experience, sections, ui } = useContent();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('experience', ui.nav)}
          title={sections.experience.title}
          description={sections.experience.description}
          id="experience-title"
          align="split"
        />
        {sections.experience.groups.map(({ id, title }) => {
          const items = experience.filter((item) => item.group === id);
          if (items.length === 0) return null;
          return (
            <div className="experience-group" key={id}>
              <h3 className="projects-more__title reveal">{title}</h3>
              <ol className="timeline reveal">
                {items.map((item) => (
                  <ExperienceItem key={`${item.company}-${item.dates}`} {...item} ui={ui} />
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
}
