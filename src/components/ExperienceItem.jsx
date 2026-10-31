import { MapPin } from 'lucide-react';
import { assetUrl } from '../lib/assets.js';
import DevNote from './DevNote.jsx';

// One timeline entry. Every field except `company` is optional and hidden when empty.
export default function ExperienceItem({
  company,
  logo,
  logoFit = 'contain',
  logoZoom = 1,
  location,
  current,
  roles = [],
  dates,
  description,
  responsibilities = [],
  technologies = [],
  ui,
}) {
  const missing = [roles.length === 0 && 'role'].filter(Boolean);
  const hasMeta = Boolean(dates || current);
  const logoUrl = assetUrl(logo && `logos/${logo}`);

  return (
    <li
      className={['timeline__item', current && 'is-current', !hasMeta && 'timeline__item--no-meta']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="timeline__meta">
        {dates && <p className="timeline__dates">{dates}</p>}
        {current && <span className="badge">{ui.current}</span>}
      </div>

      <article className="timeline__card">
        <header className="timeline__head">
          <div className="timeline__identity">
            {logoUrl && (
              <span className={`company-logo company-logo--${logoFit}`} style={{ '--logo-zoom': logoZoom }}>
                <img src={logoUrl} alt={`${company} logo`} loading="lazy" decoding="async" />
              </span>
            )}
            <h3 className="timeline__company">{company}</h3>
          </div>
          {location && (
            <p className="timeline__location">
              <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
              {location}
            </p>
          )}
        </header>
        {roles.length > 0 && (
          <ul className="timeline__roles">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        )}
        {description && <p className="timeline__description">{description}</p>}

        {responsibilities.length > 0 && (
          <ul className="timeline__list">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <ul className="tag-list" aria-label={ui.detailsLabel}>
            {technologies.map((tech) => (
              <li className="tag" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        )}

        {missing.length > 0 && <DevNote>Missing: {missing.join(', ')}</DevNote>}
      </article>
    </li>
  );
}
