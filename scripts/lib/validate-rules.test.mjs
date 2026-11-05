import assert from 'node:assert/strict';
import test from 'node:test';

import { validateRules } from './validate-rules.mjs';

const categories = [
  { id: 'data-honesty', letter: 'D', title: 'Data honesty', order: 1 },
];

const sources = {
  ONS: { title: 'ONS data visualisation', url: 'https://service-manual.ons.gov.uk/data-visualisation' },
};

function validRule(overrides = {}) {
  return {
    id: 'D1',
    title: 'Name the measure',
    category: 'data-honesty',
    tier: 'required',
    check: 'The subtitle names the measure.',
    fix: 'Add the measure to the subtitle.',
    mechanisms: ['manual'],
    sources: ['ONS'],
    related: [],
    ...overrides,
  };
}

test('accepts a valid rule corpus', () => {
  const result = validateRules({ rules: [validRule()], categories, sources });

  assert.equal(result.ok, true);
  assert.deepEqual(result.errors, []);
});

test('rejects duplicate rule IDs', () => {
  const result = validateRules({
    rules: [validRule(), validRule({ title: 'Another title' })],
    categories,
    sources,
  });

  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /duplicate rule id D1/i);
});

test('rejects an unknown tier', () => {
  const result = validateRules({
    rules: [validRule({ tier: 'blocker' })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /unknown tier "blocker"/i);
});

test('rejects an unknown category', () => {
  const result = validateRules({
    rules: [validRule({ category: 'vibes' })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /unknown category "vibes"/i);
});

test('rejects an unknown source key', () => {
  const result = validateRules({
    rules: [validRule({ sources: ['MISSING'] })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /unknown source "MISSING"/i);
});

test('rejects a rule with no source', () => {
  const result = validateRules({
    rules: [validRule({ sources: [] })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /needs at least one source/i);
});

test('rejects a rule with empty required text', () => {
  const result = validateRules({
    rules: [validRule({ check: '  ' })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /missing check/i);
});

test('rejects a related rule that does not exist', () => {
  const result = validateRules({
    rules: [validRule({ related: ['D99'] })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /unknown related rule D99/i);
});

test('rejects a rule ID that does not match its category letter', () => {
  const result = validateRules({
    rules: [validRule({ id: 'A1' })],
    categories,
    sources,
  });

  assert.match(result.errors.join('\n'), /A1 must start with D/i);
});
