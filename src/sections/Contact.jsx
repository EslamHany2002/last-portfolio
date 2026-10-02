import { ArrowUpRight, MapPin } from 'lucide-react';
import { contact, socials } from '../data/portfolio.js';
import { sectionEyebrow } from '../data/navigation.js';
import { displayUrl, getSocialLinks } from '../lib/socials.js';
import ContactForm from '../components/ContactForm.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };

// Visible text for each link type.
const VALUES = {
  email: socials.email,
  phone: socials.phone,
  whatsapp: socials.phone ?? 'Chat on WhatsApp',
  github: socials.github && displayUrl(socials.github),
  linkedin: socials.linkedin && displayUrl(socials.linkedin),
};

const methods = [
  ...getSocialLinks(socials).map(({ id, label, href, icon }) => ({
    label,
    value: VALUES[id],
    href,
    icon,
    ...(href.startsWith('http') && external),
  })),
  contact.location && { label: 'Location', value: contact.location, icon: MapPin },
].filter(Boolean);

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <div className="contact__intro reveal">
          <p className="section-title__eyebrow">{sectionEyebrow('contact')}</p>
          <h2 className="contact__headline" id="contact-title">
            {contact.headline}
          </h2>
          {contact.text && <p className="contact__text">{contact.text}</p>}

          <ul className="contact-methods">
            {methods.map(({ label, value, href, icon: Icon, ...linkProps }) => {
              const inner = (
                <>
                  <span className="contact-method__icon">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="contact-method__body">
                    <span className="contact-method__label">{label}</span>
                    <span className="contact-method__value">{value}</span>
                  </span>
                  {href && <ArrowUpRight className="contact-method__arrow" size={16} strokeWidth={1.75} aria-hidden="true" />}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a className="contact-method" href={href} {...linkProps}>
                      {inner}
                    </a>
                  ) : (
                    <div className="contact-method">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="contact__form reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
