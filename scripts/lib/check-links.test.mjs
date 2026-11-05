import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { checkRelativeLinks } from './check-links.mjs';

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'chart-checklist-links-'));
  await mkdir(path.join(root, 'docs'), { recursive: true });
  await writeFile(path.join(root, 'docs', 'target.md'), '# Target\n');
  return root;
}

test('accepts a relative link that exists', async () => {
  const root = await fixture();
  await writeFile(path.join(root, 'docs', 'page.md'), '[target](target.md)\n');

  const errors = await checkRelativeLinks({ root, files: ['docs/page.md'] });
  assert.deepEqual(errors, []);
});

test('rejects a relative link that does not exist', async () => {
  const root = await fixture();
  await writeFile(path.join(root, 'docs', 'page.md'), '[missing](missing.md)\n');

  const errors = await checkRelativeLinks({ root, files: ['docs/page.md'] });
  assert.match(errors.join('\n'), /missing\.md/);
});

test('ignores external links and page anchors', async () => {
  const root = await fixture();
  await writeFile(
    path.join(root, 'docs', 'page.md'),
    '[site](https://example.com) [top](#top) [mail](mailto:a@example.com)\n',
  );

  const errors = await checkRelativeLinks({ root, files: ['docs/page.md'] });
  assert.deepEqual(errors, []);
});

test('checks the path but ignores the anchor on a relative link', async () => {
  const root = await fixture();
  await writeFile(path.join(root, 'docs', 'page.md'), '[target](target.md#section)\n');

  const errors = await checkRelativeLinks({ root, files: ['docs/page.md'] });
  assert.deepEqual(errors, []);
});
