import { Phone } from 'lucide-react';
import { brandIconComponent } from '../components/BrandIcon.jsx';
import { BRAND_ICONS } from './brandIcons.js';

const digits = (value) => value.replace(/[^\d+]/g, '');

// WhatsApp accepts either a full link (https://wa.me/…) or a phone number.
const whatsappHref = (value) => (value.startsWith('http') ? value : `https://wa.me/${value.replace(/\D/g, '')}`);

const GithubIcon = brandIconComponent(BRAND_ICONS.GitHub);
const LinkedinIcon = brandIconComponent(BRAND_ICONS.LinkedIn);
const WhatsappIcon = brandIconComponent(BRAND_ICONS.WhatsApp);
const GmailIcon = brandIconComponent(BRAND_ICONS.Gmail);

// Builds the list of social links that actually have data.
export function getSocialLinks(socials) {
  const links = [
    socials.github && { id: 'github', label: 'GitHub', href: socials.github, icon: GithubIcon },
    socials.linkedin && { id: 'linkedin', label: 'LinkedIn', href: socials.linkedin, icon: LinkedinIcon },
    socials.whatsapp && { id: 'whatsapp', label: 'WhatsApp', href: whatsappHref(socials.whatsapp), icon: WhatsappIcon },
    socials.email && { id: 'email', label: 'Email', href: `mailto:${socials.email}`, icon: GmailIcon },
    socials.phone && { id: 'phone', label: 'Phone', href: `tel:${digits(socials.phone)}`, icon: Phone },
  ];
  return links.filter(Boolean);
}

// "https://github.com/user/" -> "github.com/user"
export function displayUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
