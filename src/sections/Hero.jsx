import { Fragment } from 'react';
import { ArrowDown, ArrowRight, Send } from 'lucide-react';
import { hero, profile } from '../data/portfolio.js';
import { assetUrl } from '../lib/assets.js';
import Button from '../components/Button.jsx';
import DevNote from '../components/DevNote.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };
const photoUrl = assetUrl(profile.heroPhoto && `images/${profile.heroPhoto}`);
const supportingRoles = profile.roles.filter((role) => role !== profile.primaryRole);

// Without a real photo the visual side lists the disciplines instead of a stand-in image.
function HeroVisual() {
  if (photoUrl) {
    return (
      <figure className="hero__photo">
        <img src={photoUrl} alt={profile.name} width="560" height="700" fetchPriority="high" />
      </figure>
    );
  }

  return (
    <div className="hero__panel">
      <div className="hero__panel-head">
        <p className="hero__panel-label">Disciplines</p>
        <span className="hero__panel-count" aria-hidden="true">
          {String(profile.roles.length).padStart(2, '0')}
        </span>
      </div>
      <ol className="hero__panel-list">
        {profile.roles.map((role, index) => (
          <li key={role}>
            <span className="hero__panel-index">{String(index + 1).padStart(2, '0')}</span>
            <span>{role}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-labelledby="home-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">{profile.greeting}</p>
          <h1 className="hero__title" id="home-title">
            {profile.name}
          </h1>
          <p className="hero__role">{profile.primaryRole}</p>
          <p className="hero__roles">
            {supportingRoles.map((role, index) => (
              <Fragment key={role}>
                {index > 0 && <span className="hero__dot" aria-hidden="true"> · </span>}
                <span className="hero__role-item">{role}</span>
              </Fragment>
            ))}
          </p>

          {profile.summary ? (
            <p className="hero__summary">{profile.summary}</p>
          ) : (
            <DevNote>Hero summary missing — set profile.summary</DevNote>
          )}

          <div className="hero__actions">
            <Button
              href={hero.primaryCta.href}
              icon={Send}
              {...(hero.primaryCta.href.startsWith('http') && external)}
            >
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} icon={ArrowRight}>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>

      <a href="#about" className="hero__scroll">
        <span>Scroll</span>
        <ArrowDown size={14} strokeWidth={1.75} aria-hidden="true" />
      </a>
    </section>
  );
}
