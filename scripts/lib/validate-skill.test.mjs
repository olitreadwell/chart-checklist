import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { validateSkillBundle } from './validate-skill.mjs';

const RULES = '{"version":1,"counts":{"rules":1},"rules":[{"id":"D1","tier":"required","check":"Check it."}]}\n';

async function fixture({ skillText = 'Read rules.json first.', skillRules = RULES, mainRules = RULES } = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'chart-skill-'));
  await mkdir(path.join(root, 'skills', 'chart-checklist'), { recursive: true });
  await mkdir(path.join(root, 'rules'), { recursive: true });
  if (skillText !== null) {
    await writeFile(path.join(root, 'skills', 'chart-checklist', 'SKILL.md'), skillText);
  }
  if (skillRules !== null) {
    await writeFile(path.join(root, 'skills', 'chart-checklist', 'rules.json'), skillRules);
  }
  if (mainRules !== null) {
    await writeFile(path.join(root, 'rules', 'rules.json'), mainRules);
  }
  return root;
}

test('accepts a self-contained skill bundle', async () => {
  const root = await fixture();
  const result = await validateSkillBundle({ root, expectedRuleCount: 1 });

  assert.equal(result.ok, true);
  assert.deepEqual(result.errors, []);
});

test('rejects a skill bundle with no rules.json', async () => {
  const root = await fixture({ skillRules: null });
  const result = await validateSkillBundle({ root, expectedRuleCount: 1 });

  assert.match(result.errors.join('\n'), /skill rules\.json is missing/i);
});

test('rejects a skill rules.json that drifts from the repo copy', async () => {
  const root = await fixture({ skillRules: '{"counts":{"rules":1},"rules":[]}\n' });
  const result = await validateSkillBundle({ root, expectedRuleCount: 1 });

  assert.match(result.errors.join('\n'), /differs from rules\/rules\.json/i);
});

test('rejects a skill that does not point at its rules.json', async () => {
  const root = await fixture({ skillText: 'Review the chart.' });
  const result = await validateSkillBundle({ root, expectedRuleCount: 1 });

  assert.match(result.errors.join('\n'), /SKILL\.md must mention rules\.json/i);
});

test('rejects a missing SKILL.md', async () => {
  const root = await fixture({ skillText: null });
  const result = await validateSkillBundle({ root, expectedRuleCount: 1 });

  assert.match(result.errors.join('\n'), /SKILL\.md is missing/i);
});
