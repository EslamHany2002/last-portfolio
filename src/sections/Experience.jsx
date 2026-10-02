import { experience, sections } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import ExperienceItem from '../components/ExperienceItem.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('experience')}
          title={sections.experience.title}
          description={sections.experience.description}
          id="experience-title"
          align="split"
        />
        <ol className="timeline reveal">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.dates}`} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
