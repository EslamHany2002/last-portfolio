import { BRAND_ICONS } from '../lib/brandIcons.js';
import { SKILL_ICONS } from '../lib/skillIcons.js';
import BrandIcon from './BrandIcon.jsx';

// Real brand icon when one exists, otherwise the Lucide line icon, otherwise nothing.
export default function SkillIcon({ name, size = 15 }) {
  const brand = BRAND_ICONS[name];
  if (brand) return <BrandIcon brand={brand} size={size} className="skill-icon" />;

  const Icon = SKILL_ICONS[name];
  if (Icon) return <Icon className="skill-icon" size={size} strokeWidth={1.75} aria-hidden="true" />;

  return null;
}

export function hasSkillIcon(name) {
  return Boolean(BRAND_ICONS[name] || SKILL_ICONS[name]);
}
