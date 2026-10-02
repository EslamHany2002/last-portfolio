import { ImageIcon, Play } from 'lucide-react';
import { assetUrl } from '../lib/assets.js';

/*
 * Image or video from assets/. When the file isn't set (or doesn't exist yet),
 * renders a neutral placeholder graphic instead of a stand-in photo.
 */
export default function Media({ path, type = 'image', alt = '', label, ratio = '16 / 10', className = '' }) {
  const url = assetUrl(path);
  // ratio = null keeps the file's natural aspect ratio
  const style = ratio ? { aspectRatio: ratio } : undefined;

  if (url && type === 'video') {
    return (
      <div className={`media ${className}`} style={style}>
        <video src={url} controls preload="metadata" className="media__el" />
      </div>
    );
  }

  if (url) {
    return (
      <div className={`media ${className}`} style={style}>
        <img src={url} alt={alt} loading="lazy" decoding="async" className="media__el" />
      </div>
    );
  }

  const Icon = type === 'video' ? Play : ImageIcon;
  return (
    <div className={`media media--placeholder ${className}`} style={style} role="img" aria-label={label ?? 'Placeholder image'}>
      <span className="media__frame" aria-hidden="true">
        <Icon size={22} strokeWidth={1.5} />
        {label && <span className="media__label">{label}</span>}
      </span>
    </div>
  );
}
