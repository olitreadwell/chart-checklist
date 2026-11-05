import { readFile } from 'node:fs/promises';
import path from 'node:path';

async function readText(file) {
  try {
    return await readFile(file, 'utf8');
  } catch {
    return null;
  }
}

/**
 * Checks the installable skill folder. The skills CLI copies the folder, not
 * the repo, so the rule corpus must sit beside SKILL.md.
 */
export async function validateSkillBundle({ root, expectedRuleCount }) {
  const errors = [];
  const skillText = await readText(path.join(root, 'skills', 'chart-checklist', 'SKILL.md'));
  const bundledRulesText = await readText(
    path.join(root, 'skills', 'chart-checklist', 'rules.json'),
  );
  const repoRulesText = await readText(path.join(root, 'rules', 'rules.json'));

  if (skillText === null) {
    errors.push('skill SKILL.md is missing');
  } else if (!skillText.includes('rules.json')) {
    errors.push('SKILL.md must mention rules.json so the agent loads the bundled corpus');
  }

  if (bundledRulesText === null) {
    errors.push('skill rules.json is missing');
  }

  if (repoRulesText === null) {
    errors.push('rules/rules.json is missing');
  }

  if (bundledRulesText !== null && repoRulesText !== null && bundledRulesText !== repoRulesText) {
    errors.push('skill rules.json differs from rules/rules.json');
  }

  if (bundledRulesText !== null) {
    try {
      const corpus = JSON.parse(bundledRulesText);
      const rules = Array.isArray(corpus.rules) ? corpus.rules : [];
      if (rules.length !== expectedRuleCount) {
        errors.push(`skill rules.json has ${rules.length} rules, expected ${expectedRuleCount}`);
      }
      if (corpus.counts?.rules !== expectedRuleCount) {
        errors.push(
          `skill rules.json counts.rules is ${corpus.counts?.rules ?? 'missing'}, expected ${expectedRuleCount}`,
        );
      }
      for (const rule of rules) {
        if (!rule.id || !rule.tier || !rule.check) {
          errors.push(`skill rules.json has an incomplete rule: ${rule.id ?? '(no id)'}`);
        }
      }
    } catch {
      errors.push('skill rules.json is not valid JSON');
    }
  }

  return { ok: errors.length === 0, errors };
}
