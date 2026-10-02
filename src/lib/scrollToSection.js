/*
 * Scrolls to a section by computing its position explicitly (honouring the CSS
 * scroll-margin-top, i.e. the mobile top bar). Native anchor jumps and
 * scrollIntoView can stop short on mobile, so all in-page links use this.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;

  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = el.getBoundingClientRect().top + window.scrollY - margin;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  history.replaceState(null, '', `#${id}`);
  return true;
}
