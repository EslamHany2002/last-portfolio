import {
  Boxes,
  Braces,
  Brush,
  Clapperboard,
  Component,
  FileSpreadsheet,
  Languages,
  LayoutGrid,
  LayoutTemplate,
  Layers,
  Megaphone,
  MessageSquareText,
  MonitorSmartphone,
  Network,
  Palette,
  PenTool,
  Share2,
  Sparkles,
  SquareTerminal,
  Video,
  WandSparkles,
  Webhook,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';

/*
 * Lucide line icons for skills that are not a brand (or whose brand icon is not
 * openly licensed — Java, Excel). Brand icons in brandIcons.js take precedence.
 */
export const SKILL_ICONS = {
  // Development
  'REST APIs': Network,
  'BLoC / Cubit': Boxes,
  'Responsive UI': MonitorSmartphone,
  'Clean Architecture': Layers,
  Java: Braces,
  'Custom Widgets': Component,
  MVC: LayoutGrid,
  Dio: Webhook,
  Localization: Languages,
  'Flutter DevTools': Wrench,

  // AI & Marketing
  'AI for Marketing': Sparkles,
  'AI-Powered Content Creation': WandSparkles,
  'AI Marketing Workflows': Workflow,
  'Digital Marketing': Megaphone,
  'Social Media Content Creation': Share2,
  'Marketing Automation': Zap,
  'Prompt Engineering': SquareTerminal,
  'Prompt Creation': MessageSquareText,
  'AI Workflow Design': Workflow,
  'AI-Assisted Content Production': WandSparkles,

  // Creative & Design
  'UI/UX Design': LayoutTemplate,
  'Video Creation': Video,
  'Video Editing': Clapperboard,
  'Graphic Design': PenTool,
  'Marketing Design': Palette,
  'Creative Content': Brush,

  // Tools
  Excel: FileSpreadsheet,
};
