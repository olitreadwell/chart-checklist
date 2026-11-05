# Agent review workflow

A repeatable review for an AI agent with access to the source, the rendered page, or both.

**Time:** 10 to 25 minutes

**Audience:** AI coding or review agent.

## 1. Locate the chart

Find the page, component, data source, table, and test fixture. Name every path in the report.

Rules: [P1](../docs/rules/process.md#p1).

## 2. Load the critical rules

Run `node scripts/query-rules.mjs --tier critical --json` or read `rules/rules.json`. Review critical first.

Rules: [P6](../docs/rules/process.md#p6).

## 3. Collect evidence

Use the DOM, axe, a screenshot, the table, and the data. Do not mark a rule pass from source reading alone.

Rules: [P3](../docs/rules/process.md#p3), [P4](../docs/rules/process.md#p4).

## 4. Record every verdict

Write pass, fail, or n/a with a reason and an evidence path. A blank row is a fail.

Rules: [P5](../docs/rules/process.md#p5), [P6](../docs/rules/process.md#p6).

## 5. Hand off general web issues

Send page-shell, HTML, CSS, JS, SEO, security, and i18n issues to the Front-End Checklist. Keep shared chart tokens and chart lazy loading in this report.

Rules: [C12](../docs/rules/colour.md#c12), [R5](../docs/rules/layout.md#r5).

## 6. Report in severity order

List critical, then required, then recommended. Give each finding a rule ID, evidence, and a concrete fix.

Rules: [P4](../docs/rules/process.md#p4).
