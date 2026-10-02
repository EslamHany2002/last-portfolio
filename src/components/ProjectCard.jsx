import { ArrowUpRight, CodeXml } from 'lucide-react';
import Button from './Button.jsx';
import Media from './Media.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };

/*
 * `large` renders the highlighted, side-by-side layout; `wide` adapts it for landscape screenshots.
 * Without an image the card is text-only (no empty frame).
 * Grid screenshots are portrait (3:4 app posters), so the grid media area is portrait too.
 */
export default function ProjectCard({ project, large = false, wide = false }) {
  const { title, category, context, year, description, role, image, links = {} } = project;
  const tags = project.tags ?? project.technologies ?? [];
  const meta = [context, year, role].filter(Boolean);
  const hasLinks = links.live || links.code;
  const variant = large
    ? `project-card--large ${wide ? 'project-card--wide' : ''}`
    : image
      ? ''
      : 'project-card--text';

  return (
    <article className={`project-card ${variant}`}>
      {image && (
        <div className="project-card__media">
          {/* The featured card shows the complete artwork at its natural aspect ratio */}
          <Media path={`projects/${image}`} alt={`${title} — app screenshot`} ratio={large ? null : '4 / 5'} />
        </div>
      )}

      <div className="project-card__body">
        {/* In the body, not over the image, so the screenshot stays unobstructed */}
        {category && <span className="project-card__badge">{category}</span>}
        {meta.length > 0 && (
          <p className="project-card__meta">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        )}
        <h3 className="project-card__title">{title}</h3>
        {description && <p className="project-card__text">{description}</p>}

        {tags.length > 0 && (
          <ul className="tag-list" aria-label="Key features">
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <div className="project-card__actions">
            {large ? (
              <>
                {links.live && (
                  <Button href={links.live} icon={ArrowUpRight} size="sm" {...external}>
                    Live Demo
                  </Button>
                )}
                {links.code && (
                  <Button href={links.code} icon={CodeXml} variant="outline" size="sm" {...external}>
                    Source Code
                  </Button>
                )}
              </>
            ) : (
              <>
                {links.live && (
                  <a href={links.live} className="text-link" {...external}>
                    Live Demo <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                )}
                {links.code && (
                  <a href={links.code} className="text-link" {...external}>
                    Source Code <CodeXml size={15} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
