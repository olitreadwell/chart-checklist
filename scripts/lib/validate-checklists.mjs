/**
 * Checks curated checklists against the rule corpus. A checklist may repeat a
 * rule across steps, but not inside one step. A missing rule is always an error.
 */
export function validateChecklists({ rules, checklists }) {
  const errors = [];
  const ruleIds = new Set(rules.map((rule) => rule.id));
  const slugs = new Set();

  for (const checklist of checklists) {
    const label = checklist.slug || '(no slug)';
    if (!checklist.slug) errors.push(`${label}: missing slug`);
    if (slugs.has(checklist.slug)) errors.push(`${label}: duplicate slug`);
    slugs.add(checklist.slug);

    const allIds = checklist.steps?.flatMap((step) => step.ruleIds ?? []) ?? [];
    if (allIds.length === 0) errors.push(`${label}: has no rules`);

    for (const step of checklist.steps ?? []) {
      const seen = new Set();
      for (const ruleId of step.ruleIds ?? []) {
        if (!ruleIds.has(ruleId)) errors.push(`${label}: unknown rule ${ruleId}`);
        if (seen.has(ruleId)) errors.push(`${label}: repeats rule ${ruleId} in step "${step.title}"`);
        seen.add(ruleId);
      }
    }
  }

  return { ok: errors.length === 0, errors };
}
