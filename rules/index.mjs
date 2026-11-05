import { ACCESSIBILITY_RULES } from './data/accessibility.mjs';
import { COLOUR_RULES } from './data/colour.mjs';
import { DATA_HONESTY_RULES } from './data/data-honesty.mjs';
import { ENCODING_RULES } from './data/encoding.mjs';
import { INTERACTION_RULES } from './data/interaction.mjs';
import { LAYOUT_RULES } from './data/layout.mjs';
import { MAPS_RULES } from './data/maps.mjs';
import { NARRATIVE_RULES } from './data/narrative.mjs';
import { PROCESS_RULES } from './data/process.mjs';
import { STATES_RULES } from './data/states.mjs';
import { CATEGORIES } from './categories.mjs';

const CATEGORY_ORDER = new Map(CATEGORIES.map((category) => [category.id, category.order]));

function compareRules(left, right) {
  const leftCategory = CATEGORY_ORDER.get(left.category) ?? 99;
  const rightCategory = CATEGORY_ORDER.get(right.category) ?? 99;
  if (leftCategory !== rightCategory) return leftCategory - rightCategory;

  const leftNumber = Number.parseInt(left.id.slice(1), 10);
  const rightNumber = Number.parseInt(right.id.slice(1), 10);
  return leftNumber - rightNumber;
}

export const RULES = [
  ...DATA_HONESTY_RULES,
  ...ENCODING_RULES,
  ...COLOUR_RULES,
  ...ACCESSIBILITY_RULES,
  ...LAYOUT_RULES,
  ...STATES_RULES,
  ...NARRATIVE_RULES,
  ...INTERACTION_RULES,
  ...MAPS_RULES,
  ...PROCESS_RULES,
].sort(compareRules);

export const RULES_BY_ID = new Map(RULES.map((rule) => [rule.id, rule]));

export const TIERS = ['critical', 'required', 'recommended'];

export const MECHANISMS = [
  'unit',
  'e2e',
  'axe',
  'visual',
  'lighthouse',
  'data',
  'gate',
  'tool',
  'manual',
];
