import {
  Award,
  Briefcase,
  Clapperboard,
  FolderGit2,
  GraduationCap,
  House,
  Layers,
  Mail,
  User,
  Wrench,
} from 'lucide-react';

export const navigation = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Layers },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'creative', label: 'Creative Work', icon: Clapperboard },
  { id: 'teaching', label: 'Teaching', icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const sectionIds = navigation.map((item) => item.id);

// "05 · Skills" — keeps section numbering in sync with the navigation order.
export function sectionEyebrow(id) {
  const index = navigation.findIndex((item) => item.id === id);
  return `${String(index + 1).padStart(2, '0')} · ${navigation[index].label}`;
}
