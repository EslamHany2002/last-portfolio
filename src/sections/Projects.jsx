import { useContent } from '../i18n/LanguageContext.jsx';
import { sectionEyebrow } from '../data/navigation.js';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Projects() {
  const { projects, sections, ui } = useContent();
  const featured = projects.filter((project) => project.featured !== false);
  // Projects with a screenshot form the showcase; the rest are listed as compact cards.
  const showcase = featured.filter((project) => project.image);
  const textOnly = featured.filter((project) => !project.image);
  const current = textOnly.filter((project) => !project.earlier);
  const earlier = textOnly.filter((project) => project.earlier);
  const highlight = showcase.find((project) => project.highlight);
  // Landscape screenshots get a full-width card after the grid so they aren't cropped.
  const wide = showcase.filter((project) => project.layout === 'wide' && project !== highlight);
  const rest = showcase.filter((project) => project !== highlight && !wide.includes(project));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('projects', ui.nav)}
          title={sections.projects.title}
          description={sections.projects.description}
          id="projects-title"
          align="split"
        />

        {highlight && (
          <div className="reveal">
            <ProjectCard project={highlight} large />
          </div>
        )}

        {rest.length > 0 && (
          <ul className="projects-grid">
            {rest.map((project) => (
              <li className="reveal" key={project.title}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}

        {wide.map((project) => (
          <div className="projects-wide reveal" key={project.title}>
            <ProjectCard project={project} large wide />
          </div>
        ))}

        {current.length > 0 && (
          <ul className="projects-more__grid projects-main">
            {current.map((project) => (
              <li className="reveal" key={project.title}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}

        {earlier.length > 0 && (
          <div className="projects-more">
            <h3 className="projects-more__title reveal">{sections.projects.moreTitle}</h3>
            <ul className="projects-more__grid">
              {earlier.map((project) => (
                <li className="reveal" key={project.title}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
