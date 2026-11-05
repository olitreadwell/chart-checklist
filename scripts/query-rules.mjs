#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { RULES, TIERS } from '../rules/index.mjs';
import { SOURCES } from '../rules/sources.mjs';
import { CATEGORIES } from '../rules/categories.mjs';

const TIER_SET = new Set(TIERS);
const CATEGORY_SET = new Set(CATEGORIES.map((category) => category.id));

function takeValue(argv, index, name) {
  const value = argv[index + 1];
  if (value === undefined || value.startsWith('--')) throw new Error(`${name} requires a value`);
  return value;
}

export function parseArgs(argv) {
  const options = {
    ids: [],
    tiers: [],
    category: null,
    query: '',
    json: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--json') {
      options.json = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--id' || arg === '--tier' || arg === '--category' || arg === '--query') {
      const value = takeValue(argv, index, arg);
      index += 1;
      if (arg === '--id') options.ids.push(value.toUpperCase());
      else if (arg === '--tier') {
        if (!TIER_SET.has(value)) throw new Error(`Unknown tier: ${value}`);
        options.tiers.push(value);
      } else if (arg === '--category') {
        if (!CATEGORY_SET.has(value)) throw new Error(`Unknown category: ${value}`);
        options.category = value;
      } else {
        options.query = value;
      }
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

export function filterRules(rules, { ids = [], tiers = [], tier = null, category = null, query = '' } = {}) {
  const idSet = new Set(ids);
  const tierSet = new Set(tiers.length > 0 ? tiers : tier ? [tier] : []);
  const needle = query.trim().toLowerCase();

  return rules.filter((rule) => {
    if (idSet.size > 0 && !idSet.has(rule.id)) return false;
    if (tierSet.size > 0 && !tierSet.has(rule.tier)) return false;
    if (category !== null && rule.category !== category) return false;
    if (needle !== '') {
      const haystack = [
        rule.id,
        rule.title,
        rule.check,
        rule.fix,
        rule.category,
        ...(rule.mechanisms ?? []),
        ...(rule.sources ?? []),
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    return true;
  });
}

function resolveRule(rule) {
  return {
    ...rule,
    sources: rule.sources.map((key) => ({ key, ...SOURCES[key] })),
  };
}

export function main(argv) {
  const options = parseArgs(argv);
  if (options.help) {
    console.log('Usage: node scripts/query-rules.mjs [--tier critical] [--category accessibility] [--id D3] [--query source] [--json]');
    return 0;
  }

  const matches = filterRules(RULES, options).map(resolveRule);
  if (options.json) {
    console.log(JSON.stringify(matches, null, 2));
  } else if (matches.length === 0) {
    console.log('No matching rules.');
  } else {
    for (const rule of matches) {
      console.log(`${rule.id}\t${rule.tier}\t${rule.title}`);
    }
  }
  return 0;
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
const modulePath = path.resolve(fileURLToPath(import.meta.url));
if (invokedPath === modulePath) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
