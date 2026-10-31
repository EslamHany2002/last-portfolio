import { ArrowUp } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

const year = new Date().getFullYear();

// One compact row: identity + copyright, social links, back to top.
export default function Footer() {
  const { footer, profile, ui } = useContent();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <p className="footer__name">
            {profile.name}
            {footer.tagline && <span className="footer__tagline"> — {footer.tagline}</span>}
          </p>
          <p className="footer__copy">
            © {year} {profile.name}. {ui.rights}
          </p>
        </div>
        <SocialLinks tone="light" className="footer__socials" />
        <a href="#home" className="footer__top-link">
          {ui.backToTop} <ArrowUp size={14} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
