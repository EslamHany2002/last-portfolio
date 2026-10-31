import { Briefcase, FolderGit2, GraduationCap, House, Layers, Mail, User, Wrench } from 'lucide-react';

// Labels live in the content files (ui.nav) so they follow the selected language.
export const navigation = [
  { id: 'home', icon: House },
  { id: 'about', icon: User },
  { id: 'services', icon: Layers },
  { id: 'experience', icon: Briefcase },
  { id: 'skills', icon: Wrench },
  { id: 'projects', icon: FolderGit2 },
  { id: 'teaching', icon: GraduationCap },
  { id: 'contact', icon: Mail },
];

export const sectionIds = navigation.map((item) => item.id);

// "05 · Skills" — keeps section numbering in sync with the navigation order.
export function sectionEyebrow(id, labels) {
  const index = navigation.findIndex((item) => item.id === id);
  return `${String(index + 1).padStart(2, '0')} · ${labels[id]}`;
}
