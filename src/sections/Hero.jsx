import { Fragment } from 'react';
import {
  ArrowRight,
  Cpu,
  Layers,
  PenTool,
  Send,
  ShoppingCart,
  Video,
  Zap,
} from 'lucide-react';
import { useContent } from '../i18n/LanguageContext.jsx';
import { assetUrl } from '../lib/assets.js';
import Button from '../components/Button.jsx';
import DevNote from '../components/DevNote.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const DISCIPLINE_ICONS = {
  ai: Cpu,
  ecommerce: ShoppingCart,
  automation: Zap,
  uiux: PenTool,
  video: Video,
  models: Layers,
};

// Laptop on a stone plinth, framed by floating discipline cards.
function HeroStage({ visual, disciplines }) {
  const visualUrl = assetUrl(visual && `images/${visual}`);

  return (
    <div className="hero__stage">
      {visualUrl && <img className="hero__laptop" src={visualUrl} alt="" width="765" height="388" fetchPriority="high" />}
      <ul className="hero__chips" aria-hidden="true">
        {disciplines.map(({ id, chip }) => {
          const Icon = DISCIPLINE_ICONS[id] ?? Layers;
          return (
            <li className={`hero__chip hero__chip--${id}`} key={id}>
              <Icon size={26} strokeWidth={1.5} />
              <span>{chip}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Hero() {
  const { hero, profile } = useContent();
  const supportingRoles = profile.roles.filter((role) => role !== profile.primaryRole);
  const nameParts = profile.name.split(' ');
  const lastName = nameParts.pop();

  return (
    <section id="home" className="section hero" aria-labelledby="home-title">
      <div className="container hero__container">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__greeting">{profile.greeting}</p>
            <h1 className="hero__title" id="home-title">
              {nameParts.join(' ')} <span className="hero__title-accent">{lastName}</span>
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
                variant="light"
                {...(hero.primaryCta.href.startsWith('http') && external)}
              >
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} icon={ArrowRight} variant="outline-light">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <HeroStage visual={hero.visual} disciplines={hero.disciplines} />
        </div>

        <div className="hero__disciplines">
          <p className="hero__disciplines-title">{hero.disciplinesTitle}</p>
          <ul className="hero__disciplines-list">
            {hero.disciplines.map(({ id, label }) => {
              const Icon = DISCIPLINE_ICONS[id] ?? Layers;
              return (
                <li className="hero__discipline" key={id}>
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
