import assert from 'node:assert/strict';
import test from 'node:test';

import { validateChecklists } from './validate-checklists.mjs';

const rules = [
  { id: 'D3', title: 'Source and date' },
  { id: 'A1', title: 'Accessible name' },
];

test('accepts checklist references that exist', () => {
  const result = validateChecklists({
    rules,
    checklists: [
      {
        slug: 'pre-publish',
        title: 'Before you publish',
        steps: [
          { title: 'Check the source', detail: 'Find it.', ruleIds: ['D3'] },
          { title: 'Check the name', detail: 'Read it.', ruleIds: ['A1'] },
        ],
      },
    ],
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.errors, []);
});

test('rejects a checklist that references a missing rule', () => {
  const result = validateChecklists({
    rules,
    checklists: [
      {
        slug: 'broken',
        title: 'Broken',
        steps: [{ title: 'Check the source', detail: 'Find it.', ruleIds: ['D3', 'C99'] }],
      },
    ],
  });

  assert.match(result.errors.join('\n'), /unknown rule C99/i);
});

test('rejects a checklist that repeats a rule', () => {
  const result = validateChecklists({
    rules,
    checklists: [
      {
        slug: 'repeat',
        title: 'Repeat',
        steps: [{ title: 'Check the name', detail: 'Read it.', ruleIds: ['A1', 'A1'] }],
      },
    ],
  });

  assert.match(result.errors.join('\n'), /repeats rule A1/i);
});

test('rejects a checklist with no rules', () => {
  const result = validateChecklists({
    rules,
    checklists: [{ slug: 'empty', title: 'Empty', steps: [{ title: 'Nothing', detail: '', ruleIds: [] }] }],
  });

  assert.match(result.errors.join('\n'), /has no rules/i);
});
