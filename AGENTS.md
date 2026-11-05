# Agent Instructions

<!-- coding-standards:begin -->
Project coding rules: `CODING_STANDARDS.md`. Global baseline:
`~/.agents/standards/CODING_STANDARDS.md`. Read both before changing
behaviour.
<!-- coding-standards:end -->

Chart Checklist is a Markdown and JSON rule corpus for chart review. It has no runtime app. The rules are data. The README and category pages are generated.

## Must pass

`npm run check` must pass before every commit. It validates the corpus, checks the generated files are current, and runs the tests.

## Read this when

| Branch | Open |
| --- | --- |
| Reviewing a chart, map, dashboard, or 3D view | `skills/chart-checklist/SKILL.md` |
| Adding or changing a rule | `CONTRIBUTING.md`, then `rules/data/` |
| Choosing an owner for a finding | `docs/frontend-handoff.md` |
| Writing prose or a report | `~/.agents/standards/WRITING_STANDARDS.md` |
| Checking a source claim | `docs/other-checklists.md` and `docs/sources.md` |

## Source of truth

- `rules/data/*.mjs` holds the rules.
- `rules/sources.mjs` holds source titles and URLs.
- `rules/categories.mjs` holds category order and labels.
- `checklists/index.mjs` holds curated workflows.
- `rules/rules.json`, `docs/rules/*.md`, `docs/sources.md`, `checklists/*.md`, and the README catalog are generated. Do not edit them by hand.

## Commands

```sh
npm run generate
npm run check
npm run query -- --tier critical
npm run query -- --category accessibility
```

## Rule rules

- A rule has a stable ID, a category, a tier, a check, a fix, one or more sources, and one or more mechanisms.
- The ID prefix must match the category letter.
- A check states one condition that a reviewer can pass or fail.
- A fix states the action, not the principle.
- A new rule needs a failing validation test or a failing corpus check first.
- A new source goes in `rules/sources.mjs`, not in a rule as a bare URL.

## Writing

Use plain English. No em dashes. No banned words from the global writing standard. Keep lists scannable and name the owner of every external check.
