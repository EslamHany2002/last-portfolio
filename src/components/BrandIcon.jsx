// Renders a brand icon from lib/brandIcons.js at the given size.
export default function BrandIcon({ brand, size = 16, className = '' }) {
  if (brand.kind === 'img') {
    return (
      <img
        src={brand.src}
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
        className={`brand-icon brand-icon--img ${className}`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`brand-icon ${brand.dark ? 'brand-icon--dark' : ''} ${className}`}
      style={{ '--brand': brand.color }}
    >
      <path d={brand.path} />
    </svg>
  );
}

// Wraps a brand as an icon component with the same call signature as Lucide icons.
export function brandIconComponent(brand) {
  return function Icon({ size = 16, className = '' }) {
    return <BrandIcon brand={brand} size={size} className={className} />;
  };
}
