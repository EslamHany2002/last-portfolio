import { useContent } from '../i18n/LanguageContext.jsx';
import { assetUrl } from '../lib/assets.js';


// Real photo when one is configured; otherwise neutral initials (no stand-in portrait).
export default function Avatar({ size = 'md' }) {
  const { profile } = useContent();
  const photoUrl = assetUrl(profile.photo && `images/${profile.photo}`);
  const initials = profile.initials;
  return (
    <div className={`avatar avatar--${size}`}>
      {photoUrl ? (
        <img src={photoUrl} alt={profile.name} className="avatar__img" />
      ) : (
        <span className="avatar__initials" aria-hidden="true">
          {initials}
        </span>
      )}
    </div>
  );
}
