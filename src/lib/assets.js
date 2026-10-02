/*
 * Resolves files placed in the project-root assets/ folder.
 * Vite bundles whatever exists there, so filenames are never guessed.
 */
const files = import.meta.glob('/assets/**/*.*', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function assetUrl(path) {
  if (!path) return null;
  return files[`/assets/${path}`] ?? null;
}

export function listAssets(folder) {
  const prefix = `/assets/${folder}/`;
  return Object.entries(files)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, url]) => ({ name: path.slice(prefix.length), url }));
}

// Uses the configured filename, otherwise the first file in assets/cv/.
export function getCv(file) {
  if (file) {
    const url = assetUrl(`cv/${file}`);
    return url ? { name: file, url } : null;
  }
  return listAssets('cv')[0] ?? null;
}
