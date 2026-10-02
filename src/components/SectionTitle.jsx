export default function SectionTitle({ eyebrow, title, description, id, align = 'start' }) {
  return (
    <header className={`section-title reveal ${align === 'split' ? 'section-title--split' : ''}`}>
      <div>
        {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
        <h2 className="section-title__heading" id={id}>
          {title}
        </h2>
      </div>
      {description && <p className="section-title__description">{description}</p>}
    </header>
  );
}
