import {
  Clapperboard,
  Layers,
  Megaphone,
  PenTool,
  Presentation,
  Smartphone,
  Users,
  Workflow,
} from 'lucide-react';
import { sections, services } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const SERVICE_ICONS = {
  flutter: Smartphone,
  'ai-marketing': Megaphone,
  instructor: Presentation,
  design: PenTool,
  video: Clapperboard,
  'ai-content': Workflow,
  leadership: Users,
};

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('services')}
          title={sections.services.title}
          description={sections.services.description}
          id="services-title"
          align="split"
        />
        <ul className="services-grid reveal">
          {services.map((service, index) => (
            <li key={service.id}>
              <ServiceCard
                index={index + 1}
                icon={SERVICE_ICONS[service.id] ?? Layers}
                title={service.title}
                description={service.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
