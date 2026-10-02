// Renders a link when `href` is given, otherwise a native button.
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  block = false,
  className = '',
  children,
  ...props
}) {
  const classes = ['btn', `btn--${variant}`, size === 'sm' && 'btn--sm', block && 'btn--block', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="btn__icon" size={16} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
