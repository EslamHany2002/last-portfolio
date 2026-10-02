import { profile } from '../data/portfolio.js';
import { assetUrl } from '../lib/assets.js';

const photoUrl = assetUrl(profile.photo && `images/${profile.photo}`);
const initials = profile.name
  .split(' ')
  .slice(0, 2)
  .map((part) => part[0])
  .join('');

// Real photo when one is configured; otherwise neutral initials (no stand-in portrait).
export default function Avatar({ size = 'md' }) {
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
