import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const LINK_PATTERN = /\[[^\]]*]\(([^)]+)\)/g;

/**
 * Checks relative Markdown links. External URLs and page anchors are ignored.
 * Returns one readable error per missing target.
 */
export async function checkRelativeLinks({ root, files }) {
  const errors = [];

  for (const file of files) {
    const contents = await readFile(path.join(root, file), 'utf8');
    for (const match of contents.matchAll(LINK_PATTERN)) {
      const target = match[1].trim();
      if (target === '' || target.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(target)) {
        continue;
      }
      const [relativePath] = target.split('#');
      if (relativePath === '') continue;
      const resolved = path.resolve(path.dirname(path.join(root, file)), relativePath);
      try {
        await access(resolved);
      } catch {
        errors.push(`${file}: missing link target ${target}`);
      }
    }
  }

  return errors;
}
