import { ClipboardList, Globe, Layers, Package, Presentation, Users, Workflow } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext.jsx';
import { sectionEyebrow } from '../data/navigation.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const SERVICE_ICONS = {
  leadership: Users,
  products: Package,
  websites: Globe,
  systems: Workflow,
  training: Presentation,
  management: ClipboardList,
};

export default function Services() {
  const { sections, services, ui } = useContent();
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow('services', ui.nav)}
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
