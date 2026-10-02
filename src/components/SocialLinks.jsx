import { socials } from '../data/portfolio.js';
import { getSocialLinks } from '../lib/socials.js';
import DevNote from './DevNote.jsx';

const links = getSocialLinks(socials);

// `tone="light"` is for dark backgrounds (contact, footer).
export default function SocialLinks({ className = '', tone = 'dark' }) {
  if (links.length === 0) {
    return <DevNote>Social links missing — add them in src/data/portfolio.js</DevNote>;
  }

  return (
    <ul className={`social-links ${tone === 'light' ? 'social-links--light' : ''} ${className}`}>
      {links.map(({ id, label, href, icon: Icon }) => {
        const external = href.startsWith('http');
        return (
          <li key={id}>
            <a
              href={href}
              className="social-links__link"
              aria-label={label}
              title={label}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon size={17} strokeWidth={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
