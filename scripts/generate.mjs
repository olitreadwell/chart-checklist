#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CHECKLISTS } from '../checklists/index.mjs';
import { CATEGORIES } from '../rules/categories.mjs';
import { RULES } from '../rules/index.mjs';
import { SOURCES } from '../rules/sources.mjs';
import {
  buildCategoryDoc,
  buildChecklistDoc,
  buildReadmeBlock,
  buildRulesJson,
  buildSourcesDoc,
  extractReadmeBlock,
  replaceReadmeBlock,
} from './lib/generate.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function normalize(value) {
  return `${value.trimEnd()}\n`;
}

async function readIfExists(file) {
  if (!existsSync(file)) return null;
  return readFile(file, 'utf8');
}

async function main(argv) {
  const check = argv.includes('--check');
  const help = argv.includes('--help') || argv.includes('-h');
  if (help) {
    console.log('Usage: node scripts/generate.mjs [--check]');
    return 0;
  }
  if (argv.some((arg) => arg !== '--check' && arg !== '--help' && arg !== '-h')) {
    throw new Error(`Unknown argument: ${argv.find((arg) => arg !== '--check' && arg !== '--help' && arg !== '-h')}`);
  }

  const outputs = new Map();
  outputs.set('rules/rules.json', normalize(buildRulesJson({ rules: RULES, categories: CATEGORIES, sources: SOURCES })));
  outputs.set(
    'skills/chart-checklist/rules.json',
    normalize(buildRulesJson({ rules: RULES, categories: CATEGORIES, sources: SOURCES })),
  );
  outputs.set('docs/sources.md', normalize(buildSourcesDoc(SOURCES)));

  for (const category of CATEGORIES) {
    const categoryRules = RULES.filter((rule) => rule.category === category.id);
    outputs.set(
      `docs/rules/${category.id}.md`,
      normalize(buildCategoryDoc({ category, rules: categoryRules, sources: SOURCES })),
    );
  }

  for (const checklist of CHECKLISTS) {
    outputs.set(
      `checklists/${checklist.slug}.md`,
      normalize(buildChecklistDoc({ checklist, rules: RULES, categories: CATEGORIES })),
    );
  }

  const readmePath = path.join(ROOT, 'README.md');
  const readme = await readIfExists(readmePath);
  if (readme === null) throw new Error('README.md is missing');
  const readmeBlock = normalize(buildReadmeBlock({ rules: RULES, categories: CATEGORIES }));
  const expectedReadme = replaceReadmeBlock(readme, readmeBlock);

  const drift = [];
  for (const [relativePath, expected] of outputs) {
    const file = path.join(ROOT, relativePath);
    const actual = await readIfExists(file);
    if (actual === null || actual !== expected) drift.push(relativePath);
    if (!check) {
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, expected);
    }
  }

  const currentBlock = `${extractReadmeBlock(readme).trimEnd()}\n`;
  if (currentBlock !== readmeBlock) drift.push('README.md');
  if (!check) await writeFile(readmePath, expectedReadme);

  if (check && drift.length > 0) {
    console.error('Generated files are stale:');
    for (const file of drift) console.error(`- ${file}`);
    console.error('Run npm run generate and commit the result.');
    return 1;
  }

  if (!check) {
    console.log(`Generated ${outputs.size + 1} files from ${RULES.length} rules.`);
  }
  return 0;
}

main(process.argv.slice(2)).then(
  (code) => {
    process.exitCode = code;
  },
  (error) => {
    console.error(error.message);
    process.exitCode = 1;
  },
);
