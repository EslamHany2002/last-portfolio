import { useRef, useState } from 'react';
import { Check, Clapperboard, Layers, PenTool, Play, Sparkles } from 'lucide-react';
import { creativeWork, sections } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import Media from '../components/Media.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const AREA_ICONS = {
  design: PenTool,
  video: Clapperboard,
  'ai-marketing': Sparkles,
};

// Only real media appears in the gallery; without any, the section shows the creative areas instead.
const categories = creativeWork.filter((category) => category.items.length > 0);

function CreativeAreas() {
  return (
    <ul className="creative-areas">
      {creativeWork.map(({ id, label, areas = [] }) => {
        const Icon = AREA_ICONS[id] ?? Layers;
        return (
          <li className="skill-card reveal" key={id}>
            <header className="skill-card__head">
              <span className="skill-card__icon">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="skill-card__title">{label}</h3>
            </header>
            <ul className="check-list">
              {areas.map((area) => (
                <li key={area}>
                  <Check size={14} strokeWidth={2.25} aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function Gallery() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const tabRefs = useRef([]);
  const active = categories.find((category) => category.id === activeId);

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (event, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + categories.length) % categories.length;
    setActiveId(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="reveal">
      <div className="tabs" role="tablist" aria-label="Creative work categories">
        {categories.map((category, index) => {
          const selected = category.id === activeId;
          return (
            <button
              key={category.id}
              ref={(el) => (tabRefs.current[index] = el)}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`panel-${category.id}`}
              tabIndex={selected ? 0 : -1}
              className={`tabs__tab ${selected ? 'is-active' : ''}`}
              onClick={() => setActiveId(category.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {category.label}
              <span className="tabs__count">{category.items.length}</span>
            </button>
          );
        })}
      </div>

      <ul
        className="gallery"
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        key={active.id}
      >
        {active.items.map((item) => {
          const folder = item.type === 'video' ? 'videos' : 'images';
          return (
            <li key={item.title}>
              <figure className="gallery-item">
                <div className="gallery-item__media">
                  <Media
                    path={item.file && `${folder}/${item.file}`}
                    type={item.type}
                    alt={item.title}
                    label={item.type === 'video' ? 'Video' : 'Image'}
                    ratio="4 / 3"
                  />
                  {item.type === 'video' && !item.file && (
                    <span className="gallery-item__play" aria-hidden="true">
                      <Play size={16} strokeWidth={2} />
                    </span>
                  )}
                </div>
                <figcaption className="gallery-item__caption">
                  <span className="gallery-item__title">{item.title}</span>
                  {item.meta && <span className="gallery-item__meta">{item.meta}</span>}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function CreativeWork() {
  return (
    <section id="creative" className="section" aria-labelledby="creative-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('creative')}
          title={sections.creative.title}
          description={sections.creative.description}
          id="creative-title"
          align="split"
        />
        {categories.length > 0 ? <Gallery /> : <CreativeAreas />}
      </div>
    </section>
  );
}
