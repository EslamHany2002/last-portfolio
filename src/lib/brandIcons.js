import {
  siAndroid,
  siAndroidstudio,
  siClaude,
  siDart,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGmail,
  siGooglefonts,
  siHtml5,
  siKotlin,
  siLottiefiles,
  siPostman,
  siSupabase,
  siWhatsapp,
} from 'simple-icons';
import canvaUrl from '../assets/brands/canva.svg';
import csharpUrl from '../assets/brands/csharp.svg';
import googleUrl from '../assets/brands/google.svg';
import linkedinUrl from '../assets/brands/linkedin.svg';
import vscodeUrl from '../assets/brands/vscode.svg';

/*
 * Real brand icons, keyed by the exact names used in portfolio.js.
 * - Simple Icons (CC0): single-colour glyphs, drawn inline in the brand colour.
 * - Devicon (MIT, src/assets/brands): for brands Simple Icons no longer ships.
 * Names without an entry fall back to the Lucide line icons in skillIcons.js.
 */

// Very dark brand colours (e.g. GitHub) switch to the text colour on dark backgrounds.
const isDark = (hex) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
};

const si = (icon) => ({ kind: 'si', path: icon.path, color: `#${icon.hex}`, dark: isDark(icon.hex) });
const img = (src) => ({ kind: 'img', src });

export const BRAND_ICONS = {
  // Development
  Flutter: si(siFlutter),
  'Flutter SDK': si(siFlutter),
  Dart: si(siDart),
  Firebase: si(siFirebase),
  Supabase: si(siSupabase),
  Kotlin: si(siKotlin),
  'C#': img(csharpUrl),
  HTML: si(siHtml5),
  'Android SDK': si(siAndroid),
  'Google Fonts': si(siGooglefonts),
  Lottie: si(siLottiefiles),
  Git: si(siGit),
  GitHub: si(siGithub),

  // AI
  Claude: si(siClaude),

  // Tools
  Figma: si(siFigma),
  Canva: img(canvaUrl),
  'VS Code': img(vscodeUrl),
  'Android Studio': si(siAndroidstudio),
  Postman: si(siPostman),
  'Google Workspace': img(googleUrl),

  // Contact
  LinkedIn: img(linkedinUrl),
  WhatsApp: si(siWhatsapp),
  Gmail: si(siGmail),
};
