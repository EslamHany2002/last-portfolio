import DevNote from './DevNote.jsx';

export default function ServiceCard({ index, icon: Icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="service-card__index">{String(index).padStart(2, '0')}</span>
      </div>
      <h3 className="service-card__title">{title}</h3>
      {description ? (
        <p className="service-card__text">{description}</p>
      ) : (
        <DevNote>Description missing</DevNote>
      )}
    </article>
  );
}
