/**
 * Post-processes the browser build for GitHub Pages.
 *
 * - 404.html: GitHub Pages has no SPA rewrite, so a deep link such as
 *   /daini-electrician/lessons/fukusenzu would 404. Serving a copy of
 *   index.html as the 404 page lets the Angular router take over and show the
 *   right page. (Once the service worker is installed it answers navigation
 *   requests itself, so this only matters on the very first visit.)
 * - .nojekyll: stops GitHub from running Jekyll, which would drop any file or
 *   directory whose name starts with an underscore.
 */
import { copyFile, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const dist = process.argv[2] ?? 'dist/daini-electrician/browser';
const index = join(dist, 'index.html');

try {
  await access(index);
} catch {
  console.error(`prepare-pages: ${index} not found — run the build first.`);
  process.exit(1);
}

await copyFile(index, join(dist, '404.html'));
await writeFile(join(dist, '.nojekyll'), '');

console.log(`prepare-pages: wrote 404.html and .nojekyll into ${dist}`);
