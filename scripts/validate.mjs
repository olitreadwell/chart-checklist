#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CATEGORIES } from '../rules/categories.mjs';
import { RULES } from '../rules/index.mjs';
import { SOURCES } from '../rules/sources.mjs';
import { CHECKLISTS } from '../checklists/index.mjs';
import { validateChecklists } from './lib/validate-checklists.mjs';
import { validateRules } from './lib/validate-rules.mjs';
import { buildReadmeBlock, extractReadmeBlock } from './lib/generate.mjs';
import { checkRelativeLinks } from './lib/check-links.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

const ruleResult = validateRules({ rules: RULES, categories: CATEGORIES, sources: SOURCES });
errors.push(...ruleResult.errors);

const checklistResult = validateChecklists({ rules: RULES, checklists: CHECKLISTS });
errors.push(...checklistResult.errors);

async function collectMarkdown(relativeDir) {
  const found = [];
  const entries = await readdir(path.join(ROOT, relativeDir), { withFileTypes: true });
  for (const entry of entries) {
    const relativePath = path.join(relativeDir, entry.name);
    if (entry.isDirectory()) found.push(...(await collectMarkdown(relativePath)));
    else if (entry.isFile() && entry.name.endsWith('.md')) found.push(relativePath);
  }
  return found;
}

try {
  const readme = await readFile(path.join(ROOT, 'README.md'), 'utf8');
  const actual = extractReadmeBlock(readme).trimEnd();
  const expected = buildReadmeBlock({ rules: RULES, categories: CATEGORIES }).trimEnd();
  if (actual !== expected) {
    errors.push('README rule catalog is stale: run npm run generate');
  }
} catch (error) {
  errors.push(`README check failed: ${error.message}`);
}

const markdownFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'AGENTS.md',
  'CLAUDE.md',
  ...(await collectMarkdown('docs')),
  ...(await collectMarkdown('checklists')),
  ...(await collectMarkdown('skills')),
];
errors.push(...(await checkRelativeLinks({ root: ROOT, files: markdownFiles })));

if (errors.length > 0) {
  console.error(`Chart Checklist validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Chart Checklist: ${RULES.length} rules, ${CATEGORIES.length} categories, ${CHECKLISTS.length} checklists.`);
}
