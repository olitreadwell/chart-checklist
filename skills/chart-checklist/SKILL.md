---
name: chart-checklist
description: Review charts, maps, dashboards, and interactive or 3D data views against stable chart quality rules. Use when asked to audit, review, critique, fix, or ship a chart, data visualisation, map, dashboard, or 3D explorer, or when an agent needs chart-specific honesty, encoding, colour, accessibility, layout, state, or narrative checks.
---

# Chart Checklist

Use this workflow when a chart, map, dashboard, or 3D data view needs a review. It produces a rule-by-rule report, not a general impression.

## Inputs

- The chart source, the rendered page, or both.
- The data source and the visible data table when they exist.
- The chart title, subtitle, source line, and note.
- The target viewports and themes, usually 320px, 768px, and 1280px in light and dark.

## Steps

### 1. Load the rules

The installable skill ships `rules.json` beside this file. Read it first.

If you have the full repo, `rules/rules.json` is the same file. If neither is available, fetch:

```text
https://raw.githubusercontent.com/olitreadwell/chart-checklist/main/rules/rules.json
```

When the repo is available, you can also query it:

```sh
node scripts/query-rules.mjs --tier critical --json
node scripts/query-rules.mjs --category accessibility
node scripts/query-rules.mjs --id D3 --id A3 --id C2
```

Do not call the query script from an installed skill. The installer copies only the skill folder, so use the bundled `rules.json` there.

**Done when:** you have the rule IDs that apply to the artifact, with critical rules first.

### 2. Locate every chart instance

Name the page, component, data path, table, fixture, and test. A page can contain more than one chart. Do not review the page as if it had one chart.

**Done when:** every chart instance has a path and an owner.

### 3. Classify the chart

Record the relationship, the chart family, and whether category I or M applies. The relationship is one of change over time, comparison, ranking, distribution, composition, correlation, geography, or deviation.

**Done when:** each instance has a relationship and a rule set.

### 4. Gather evidence

Use the strongest evidence available, in this order:

1. A test or tool result, such as axe, a component test, a screenshot, or a measured value.
2. DOM inspection for names, roles, focus, tables, and text size.
3. The data and the source for values, units, dates, suppression, and rounding.
4. A manual reading for honesty, chart choice, narrative, and colour judgement.

**Done when:** every applicable rule has a result and evidence. A not-applicable rule has a reason.

### 5. Score

Use `pass`, `fail`, or `n/a`. A blank result is a failure. A manual verdict needs a date and a reviewer.

A chart passes when it has zero critical and zero required failures. Recommended failures are recorded and do not block. A page passes when every chart on it passes.

### 6. Report

Report in severity order. Give one row per chart per rule.

```md
## Findings

### Critical
- `D3` Source and as-of date missing. Evidence: `src/components/SalesChart.tsx:42`. Fix: add publisher, dataset, and date.

### Required
- `E4` Seven series in one chart. Evidence: screenshot at 1280px. Fix: group small series into Other.

### Recommended
- `E5` Legend used for three series. Evidence: `SalesChart.tsx:88`. Fix: label each line directly.

## Verdict

Chart: Sales chart
Result: fail, one critical and one required failure.

## Handoff

- Front-End Checklist: page has no `lang` attribute.
- Chart Checklist: table caption missing, `A3`.
```

### 7. Hand off the page shell

Send HTML, CSS, JavaScript, SEO, security, images, privacy, i18n, and general page accessibility to the Front-End Checklist. Keep chart names, tables, marks, labels, data, and narrative in this report. See `docs/frontend-handoff.md`.

## Guardrails

- Do not claim WCAG conformance from a checklist pass.
- Do not mark a rendered-state rule pass from source reading alone.
- Do not invent a rule ID. Add a rule through the repo process when a real gap exists.
- Do not skip a rule because it is hard to test. Mark it `n/a` with a reason or `fail` with the missing evidence.
- Do not weaken a rule to make a chart pass.
