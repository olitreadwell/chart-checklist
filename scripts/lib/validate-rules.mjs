import { MECHANISMS, TIERS } from '../../rules/index.mjs';

const TIER_SET = new Set(TIERS);
const MECHANISM_SET = new Set(MECHANISMS);
const RULE_ID_PATTERN = /^([A-Z])\d{1,2}$/;

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

/**
 * Checks the rule corpus before generation. Returns every error it can find,
 * not just the first, so one run shows the full repair list.
 */
export function validateRules({ rules, categories, sources }) {
  const errors = [];
  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const ruleIds = new Set();
  const sourceKeys = new Set(Object.keys(sources));
  const allRuleIds = new Set(rules.map((rule) => rule.id));
  const seenTitles = new Map();

  for (const rule of rules) {
    const label = rule.id || '(no id)';

    if (!RULE_ID_PATTERN.test(rule.id ?? '')) {
      errors.push(`${label}: rule id must match a letter and number, such as D1`);
    } else if (ruleIds.has(rule.id)) {
      errors.push(`duplicate rule id ${rule.id}`);
    }
    ruleIds.add(rule.id);

    const category = categoryById.get(rule.category);
    if (!category) {
      errors.push(`${label}: unknown category "${rule.category}"`);
    } else if (RULE_ID_PATTERN.test(rule.id ?? '') && !rule.id.startsWith(category.letter)) {
      errors.push(`${label}: ${rule.id} must start with ${category.letter} for category ${category.id}`);
    }

    if (!TIER_SET.has(rule.tier)) {
      errors.push(`${label}: unknown tier "${rule.tier}"`);
    }

    for (const field of ['title', 'check', 'fix']) {
      if (!isNonEmptyString(rule[field])) errors.push(`${label}: missing ${field}`);
    }

    if (!Array.isArray(rule.sources) || rule.sources.length === 0) {
      errors.push(`${label}: needs at least one source`);
    } else {
      for (const source of rule.sources) {
        if (!sourceKeys.has(source)) errors.push(`${label}: unknown source "${source}"`);
      }
    }

    if (!Array.isArray(rule.mechanisms) || rule.mechanisms.length === 0) {
      errors.push(`${label}: needs at least one check mechanism`);
    } else {
      for (const mechanism of rule.mechanisms) {
        if (!MECHANISM_SET.has(mechanism)) errors.push(`${label}: unknown mechanism "${mechanism}"`);
      }
    }

    if (Array.isArray(rule.related)) {
      for (const relatedId of rule.related) {
        if (relatedId === rule.id) errors.push(`${label}: cannot relate to itself`);
        else if (!allRuleIds.has(relatedId)) errors.push(`${label}: unknown related rule ${relatedId}`);
      }
    } else {
      errors.push(`${label}: related must be an array`);
    }

    const titleKey = (rule.title ?? '').trim().toLowerCase();
    if (titleKey && seenTitles.has(titleKey)) {
      errors.push(`${label}: duplicate title, already used by ${seenTitles.get(titleKey)}`);
    }
    seenTitles.set(titleKey, rule.id);
  }

  for (const category of categories) {
    const count = rules.filter((rule) => rule.category === category.id).length;
    if (count === 0) errors.push(`category ${category.id} has no rules`);
  }

  return { ok: errors.length === 0, errors };
}
