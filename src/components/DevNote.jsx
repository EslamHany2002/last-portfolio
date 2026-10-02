/*
 * Marks missing content during development. Off by default; to see the notes, run
 *   VITE_SHOW_CONTENT_NOTES=true npm run dev
 * Never rendered in production builds.
 */
const enabled = import.meta.env.DEV && import.meta.env.VITE_SHOW_CONTENT_NOTES === 'true';

export default function DevNote({ children }) {
  if (!enabled) return null;
  return <p className="dev-note">{children}</p>;
}
