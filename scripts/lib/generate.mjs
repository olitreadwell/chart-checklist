export const README_START = '<!-- rules-catalog:start -->';
export const README_END = '<!-- rules-catalog:end -->';

const TIER_LABEL = {
  critical: 'critical',
  required: 'required',
  recommended: 'recommended',
};

function escapeCell(value) {
  return String(value).replaceAll('|', '\\|');
}

function anchorForRule(ruleId) {
  return ruleId.toLowerCase();
}

function countByTier(rules) {
  return Object.fromEntries(
    Object.keys(TIER_LABEL).map((tier) => [tier, rules.filter((rule) => rule.tier === tier).length]),
  );
}

export function buildReadmeBlock({ rules, categories }) {
  const counts = countByTier(rules);
  const lines = [];

  lines.push(`**${rules.length} rules** across **${categories.length} categories**.`);
  lines.push('');
  lines.push(`Critical: ${counts.critical}. Required: ${counts.required}. Recommended: ${counts.recommended}.`);
  lines.push('');
  lines.push('### Jump to a category');
  lines.push('');
  for (const category of categories) {
    const categoryRules = rules.filter((rule) => rule.category === category.id);
    lines.push(
      `- [${category.letter}. ${category.title}](#${category.letter.toLowerCase()}-${category.id}) (${categoryRules.length})`,
    );
  }
  lines.push('');

  for (const category of categories) {
    const categoryRules = rules.filter((rule) => rule.category === category.id);
    lines.push(`### ${category.letter}. ${category.title}`);
    lines.push('');
    lines.push(`*${categoryRules.length} rules. ${category.blurb}*`);
    lines.push('');
    for (const rule of categoryRules) {
      const detailPath = `docs/rules/${category.id}.md#${anchorForRule(rule.id)}`;
      lines.push(
        `- [ ] **${rule.id}** ${rule.title}. \`${rule.tier}\` · [details](${detailPath})`,
      );
    }
    lines.push('');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

export function extractReadmeBlock(readme) {
  const start = readme.indexOf(README_START);
  const end = readme.indexOf(README_END);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`README must contain ${README_START} and ${README_END} in that order`);
  }
  return readme.slice(start + README_START.length, end).replace(/^\n/, '');
}

export function replaceReadmeBlock(readme, block) {
  const start = readme.indexOf(README_START);
  const end = readme.indexOf(README_END);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`README must contain ${README_START} and ${README_END} in that order`);
  }
  return `${readme.slice(0, start + README_START.length)}\n${block.trimEnd()}\n${readme.slice(end)}`;
}

export function buildCategoryDoc({ category, rules, sources }) {
  const lines = [];
  lines.push(`# ${category.letter}. ${category.title}`);
  lines.push('');
  lines.push(category.blurb);
  lines.push('');
  lines.push('A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.');
  lines.push('');

  for (const rule of rules) {
    lines.push(`<a id="${anchorForRule(rule.id)}"></a>`);
    lines.push(`## ${rule.id}. ${rule.title}`);
    lines.push('');
    lines.push(`**Tier:** ${TIER_LABEL[rule.tier]}`);
    lines.push('');
    lines.push(`**Check:** ${rule.check}`);
    lines.push('');
    lines.push(`**Fix:** ${rule.fix}`);
    lines.push('');
    lines.push(`**Check with:** ${rule.mechanisms.join(', ')}`);
    lines.push('');
    const evidence = rule.sources
      .map((key) => {
        const source = sources[key];
        if (!source) return key;
        if (!source.url) return source.title;
        return `[${source.title}](${source.url})`;
      })
      .join(' · ');
    lines.push(`**Evidence:** ${evidence}`);
    if (rule.related.length > 0) {
      lines.push('');
      lines.push(`**Related:** ${rule.related.join(', ')}`);
    }
    lines.push('');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

export function buildRulesJson({ rules, categories, sources }) {
  const resolvedRules = rules.map((rule) => ({
    ...rule,
    sources: rule.sources.map((key) => ({ key, ...sources[key] })),
  }));

  return `${JSON.stringify(
    {
      version: 1,
      generatedBy: 'npm run generate',
      counts: {
        rules: rules.length,
        categories: categories.length,
        ...countByTier(rules),
      },
      categories,
      rules: resolvedRules,
    },
    null,
    2,
  )}\n`;
}

export function buildSourcesDoc(sources) {
  const lines = ['# Sources', '', 'Every rule names at least one source. Links open the publisher page.', ''];
  lines.push('| Key | Source | Link |');
  lines.push('| --- | --- | --- |');
  for (const [key, source] of Object.entries(sources)) {
    lines.push(
      `| ${key} | ${escapeCell(source.title)} | ${source.url ? `[open](${source.url})` : 'House rule'} |`,
    );
  }
  lines.push('');
  return `${lines.join('\n').trimEnd()}\n`;
}

export function buildChecklistDoc({ checklist, rules, categories }) {
  const ruleById = new Map(rules.map((rule) => [rule.id, rule]));
  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const lines = [];

  lines.push(`# ${checklist.title}`);
  lines.push('');
  lines.push(checklist.description);
  lines.push('');
  lines.push(`**Time:** ${checklist.time}`);
  lines.push('');
  lines.push(`**Audience:** ${checklist.audience}`);
  lines.push('');

  checklist.steps.forEach((step, index) => {
    lines.push(`## ${index + 1}. ${step.title}`);
    lines.push('');
    lines.push(step.detail);
    lines.push('');
    const links = step.ruleIds.map((ruleId) => {
      const rule = ruleById.get(ruleId);
      if (!rule) return ruleId;
      const category = categoryById.get(rule.category);
      const href = category ? `../docs/rules/${category.id}.md#${ruleId.toLowerCase()}` : null;
      return href ? `[${ruleId}](${href})` : ruleId;
    });
    lines.push(`Rules: ${links.join(', ')}.`);
    lines.push('');
  });

  return `${lines.join('\n').trimEnd()}\n`;
}
