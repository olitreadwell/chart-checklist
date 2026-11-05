import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildReadmeBlock,
  extractReadmeBlock,
  replaceReadmeBlock,
  README_END,
  README_START,
} from './generate.mjs';

const categories = [
  { id: 'data-honesty', letter: 'D', title: 'Data honesty', blurb: 'Honest numbers.', order: 1 },
];

const rules = [
  {
    id: 'D3',
    title: 'Show the source and as-of date',
    category: 'data-honesty',
    tier: 'critical',
    check: 'The chart shows a source and date.',
    fix: 'Add both.',
    mechanisms: ['data'],
    sources: ['ONS'],
    related: [],
  },
];

test('builds a README block with every rule ID', () => {
  const block = buildReadmeBlock({ rules, categories });

  assert.match(block, /D3/);
  assert.match(block, /Show the source and as-of date/);
  assert.match(block, /critical/);
});

test('extracts the generated block from a README', () => {
  const readme = `intro\n${README_START}\nold\n${README_END}\noutro\n`;

  assert.equal(extractReadmeBlock(readme), 'old\n');
});

test('replaces the generated block and keeps the rest', () => {
  const readme = `intro\n${README_START}\nold\n${README_END}\noutro\n`;
  const replaced = replaceReadmeBlock(readme, 'new\n');

  assert.match(replaced, /^intro/);
  assert.match(replaced, /new/);
  assert.doesNotMatch(replaced, /old/);
  assert.match(replaced, /outro/);
});
