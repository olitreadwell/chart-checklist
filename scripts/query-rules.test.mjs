import assert from 'node:assert/strict';
import test from 'node:test';

import { filterRules, parseArgs } from './query-rules.mjs';

const rules = [
  { id: 'D3', title: 'Source and date', category: 'data-honesty', tier: 'critical', check: 'Show the source.', mechanisms: ['data'] },
  { id: 'A1', title: 'Accessible name', category: 'accessibility', tier: 'critical', check: 'Name the chart.', mechanisms: ['unit'] },
  { id: 'E5', title: 'Direct labels', category: 'encoding', tier: 'recommended', check: 'Label series directly.', mechanisms: ['manual'] },
];

test('filters by tier', () => {
  assert.deepEqual(filterRules(rules, { tier: 'critical' }).map((rule) => rule.id), ['D3', 'A1']);
});

test('filters by category', () => {
  assert.deepEqual(filterRules(rules, { category: 'encoding' }).map((rule) => rule.id), ['E5']);
});

test('filters by free text across title and check', () => {
  assert.deepEqual(filterRules(rules, { query: 'accessible' }).map((rule) => rule.id), ['A1']);
  assert.deepEqual(filterRules(rules, { query: 'source' }).map((rule) => rule.id), ['D3']);
});

test('parses repeatable ids and tiers', () => {
  const options = parseArgs(['--id', 'D3', '--id', 'A1', '--tier', 'critical']);

  assert.deepEqual(options.ids, ['D3', 'A1']);
  assert.deepEqual(options.tiers, ['critical']);
});

test('rejects an unknown argument', () => {
  assert.throws(() => parseArgs(['--nope']), /unknown argument/i);
});
