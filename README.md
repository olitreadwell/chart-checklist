# Chart Checklist

**The chart and data visualisation quality checklist for humans and AI agents.**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Rules](https://img.shields.io/badge/rules-96-6366f1)](rules/rules.json)
[![Agent ready](https://img.shields.io/badge/agent-ready-16a34a)](skills/chart-checklist/SKILL.md)

Chart Checklist turns chart review into small, testable rules. It covers charts, maps, dashboards, and interactive or 3D data views. Each rule has a stable ID, a tier, a check, a fix, and at least one source. The rules come from Chartability, ONS, the GOV.UK Analysis Function, the FT Visual Vocabulary, Data-to-Viz, Datawrapper, USWDS, WCAG 2.2, and the chart quality rubric used in the open-data labs.

The repo is built for two readers. A person can scan the checklist and tick boxes. An agent can load `rules/rules.json`, query a subset, and record a verdict for every rule.

## What it covers

- Data honesty: source, date, baseline, denominator, uncertainty, suppression, rounding, and missing data.
- Encoding and chart choice: relationship, chart type, order, series count, small multiples, and density.
- Colour and legibility: contrast, non-colour channels, dark mode, forced colours, and gridlines.
- Accessibility: names, tables, keyboard access, focus, live regions, motion, and dense data.
- Layout: 320px reflow, label clipping, target size, layout shift, print, and zoom.
- States: empty, error, single point, flat series, stale data, extremes, and missing versus zero.
- Narrative: title, reading note, reading level, causal claims, and page fit.
- Interaction and 3D: non-visual fallbacks, keyboard paths, state, reduced motion, labels, and budgets.
- Maps: text equivalents, projection, legend, boundary vintage, missing areas, and keyboard zoom.
- Process: inventory, snapshots, axe, manual audit, report generation, and verdict coverage.

It does not cover the page shell. HTML, CSS, JavaScript, general accessibility, SEO, security, images, privacy, i18n, and page performance belong to the Front-End Checklist. See `docs/other-checklists.md` and `docs/frontend-handoff.md`.

Where the sources disagree, this repo records the choice instead of presenting it as consensus. The decisions are in `docs/conflicts.md`.

## Start here

- **Reviewing one chart:** open the [pre-publish checklist](checklists/pre-publish.md).
- **Choosing a chart type:** open the [relationship map](docs/relationship-map.md).
- **Reviewing a map:** open the [map review](checklists/map-review.md).
- **Reviewing a 3D or interactive view:** open the [interactive and 3D review](checklists/interactive-3d.md).
- **Using an AI builder:** open the [AI builder quickstart](AI-BUILDER-QUICKSTART.md) or copy the [chart review prompt](prompts/chart-review.md).
- **Running an agent:** read `skills/chart-checklist/SKILL.md` and use the [agent review workflow](checklists/agent-review.md).
- **Adding a rule:** read `CONTRIBUTING.md` and run `npm run check`.

## Priority legend

- `critical` blocks release. A reader cannot get the finding, or the chart makes a false claim.
- `required` blocks release. The chart is honest but still fails a reader.
- `recommended` is recorded and fixed when there is time. It does not block release.

A rule can pass, fail, or not apply. A not-applicable result needs a reason. A blank result counts as a failure.

## Use with an AI agent

The corpus is plain JSON and Markdown. No server is needed.

Install the skill globally when your tool supports skills:

```sh
npx skills add olitreadwell/chart-checklist --skill chart-checklist -g -y
```

The installed folder includes `rules.json`, so the skill does not depend on the rest of the repo. If your AI builder does not support skills, use the [AI builder quickstart](AI-BUILDER-QUICKSTART.md) and the [paste-ready prompt](prompts/chart-review.md).

```sh
node scripts/query-rules.mjs --tier critical --json
node scripts/query-rules.mjs --category accessibility
node scripts/query-rules.mjs --query "source"
node scripts/query-rules.mjs --id D3 --id A3
```

Agent entry points:

- `rules/rules.json` holds every rule, its sources, and its related IDs. The installable skill ships the same file at `skills/chart-checklist/rules.json`.
- `skills/chart-checklist/SKILL.md` holds the review workflow.
- `checklists/agent-review.md` holds the short loop and the report shape.
- `prompts/chart-review.md` is the paste-ready prompt for tools without skill installs.
- `llms.txt` points at the same files without the prose.

An agent report uses one row per chart per rule:

| Rule | Verdict | Evidence | Fix |
| --- | --- | --- | --- |
| D3 | fail | `src/components/SalesChart.tsx:42`, no source line | Add publisher, dataset, and as-of date |

The agent must not claim WCAG conformance from a checklist pass. Chartability and this checklist find failures. They do not certify.

## Checklists

- [Before you publish](checklists/pre-publish.md)
- [Data honesty review](checklists/data-honesty.md)
- [Chart accessibility review](checklists/accessibility.md)
- [Agent review workflow](checklists/agent-review.md)
- [Interactive and 3D review](checklists/interactive-3d.md)
- [Map review](checklists/map-review.md)

## Checklist

<!-- rules-catalog:start -->
**96 rules** across **10 categories**.

Critical: 29. Required: 56. Recommended: 11.

### Jump to a category

- [D. Data honesty](#d-data-honesty) (12)
- [E. Encoding and chart choice](#e-encoding) (13)
- [C. Colour and legibility](#c-colour) (12)
- [A. Accessibility](#a-accessibility) (14)
- [R. Layout and responsiveness](#r-layout) (8)
- [S. States and failure](#s-states) (8)
- [N. Narrative and context](#n-narrative) (5)
- [I. Interaction, animation and 3D](#i-interaction) (10)
- [M. Maps and spatial views](#m-maps) (8)
- [P. Process and delivery](#p-process) (6)

### D. Data honesty

*12 rules. The number is what it says it is, and the reader can tell where it came from.*

- [ ] **D1** Name the measure, geography, and period. `required` · [details](docs/rules/data-honesty.md#d1)
- [ ] **D2** Put units on every quantitative value. `required` · [details](docs/rules/data-honesty.md#d2)
- [ ] **D3** Show the source and as-of date. `critical` · [details](docs/rules/data-honesty.md#d3)
- [ ] **D4** Start bars and areas at zero. `critical` · [details](docs/rules/data-honesty.md#d4)
- [ ] **D5** Label a cropped axis and leave room before the first point. `required` · [details](docs/rules/data-honesty.md#d5)
- [ ] **D6** Remove the reader-facing second y-axis. `critical` · [details](docs/rules/data-honesty.md#d6)
- [ ] **D7** State the denominator or population base. `required` · [details](docs/rules/data-honesty.md#d7)
- [ ] **D8** Suppress cells below the publisher threshold. `required` · [details](docs/rules/data-honesty.md#d8)
- [ ] **D9** Show published uncertainty where it changes the reading. `required` · [details](docs/rules/data-honesty.md#d9)
- [ ] **D10** Keep rounding within source precision. `required` · [details](docs/rules/data-honesty.md#d10)
- [ ] **D11** Explain a non-zero baseline. `required` · [details](docs/rules/data-honesty.md#d11)
- [ ] **D12** Distinguish missing periods from assumptions. `required` · [details](docs/rules/data-honesty.md#d12)

### E. Encoding and chart choice

*13 rules. The mark matches the relationship, and the chart does not hide a simpler reading.*

- [ ] **E1** Declare the relationship and match the chart type. `required` · [details](docs/rules/encoding.md#e1)
- [ ] **E2** Use position or length for precise comparison. `required` · [details](docs/rules/encoding.md#e2)
- [ ] **E3** Declare the order and render it. `required` · [details](docs/rules/encoding.md#e3)
- [ ] **E4** Keep categorical series to five or fewer. `required` · [details](docs/rules/encoding.md#e4)
- [ ] **E5** Label four or fewer series directly. `recommended` · [details](docs/rules/encoding.md#e5)
- [ ] **E6** Label a log scale and state its base. `required` · [details](docs/rules/encoding.md#e6)
- [ ] **E7** Compare like with like. `required` · [details](docs/rules/encoding.md#e7)
- [ ] **E8** Cite the source for event annotations. `recommended` · [details](docs/rules/encoding.md#e8)
- [ ] **E9** Offer a simpler alternative for a hard chart type. `recommended` · [details](docs/rules/encoding.md#e9)
- [ ] **E10** Keep pie and doughnut slices honest. `required` · [details](docs/rules/encoding.md#e10)
- [ ] **E11** Match data density to the question. `critical` · [details](docs/rules/encoding.md#e11)
- [ ] **E12** Keep grouped bars to four categories. `required` · [details](docs/rules/encoding.md#e12)
- [ ] **E13** Share scales across small multiples. `required` · [details](docs/rules/encoding.md#e13)

### C. Colour and legibility

*12 rules. Colour carries meaning without becoming the only carrier, in light and dark mode.*

- [ ] **C1** Keep chart text at 12px or larger. `critical` · [details](docs/rules/colour.md#c1)
- [ ] **C2** Meet text contrast ratios. `critical` · [details](docs/rules/colour.md#c2)
- [ ] **C3** Meet 3:1 for marks against adjacent colours. `critical` · [details](docs/rules/colour.md#c3)
- [ ] **C4** Separate touching fills. `required` · [details](docs/rules/colour.md#c4)
- [ ] **C5** Never use colour as the only channel. `critical` · [details](docs/rules/colour.md#c5)
- [ ] **C6** Check the palette under colour vision deficiency. `required` · [details](docs/rules/colour.md#c6)
- [ ] **C7** Use sequential and diverging palettes only for ordered data. `required` · [details](docs/rules/colour.md#c7)
- [ ] **C8** Repeat contrast checks in dark mode. `required` · [details](docs/rules/colour.md#c8)
- [ ] **C9** Survive forced-colors and high contrast. `critical` · [details](docs/rules/colour.md#c9)
- [ ] **C10** Use round, labelled gridlines. `required` · [details](docs/rules/colour.md#c10)
- [ ] **C11** Avoid flashing and red large-area animation. `critical` · [details](docs/rules/colour.md#c11)
- [ ] **C12** Use shared tokens and components. `required` · [details](docs/rules/colour.md#c12)

### A. Accessibility

*14 rules. A screen reader, keyboard, or low-vision reader can reach the same finding.*

- [ ] **A1** Give the chart an image role and a short name. `critical` · [details](docs/rules/accessibility.md#a1)
- [ ] **A2** State the finding in the accessible name and visible text. `critical` · [details](docs/rules/accessibility.md#a2)
- [ ] **A3** Provide a data table with the same values. `critical` · [details](docs/rules/accessibility.md#a3)
- [ ] **A4** Make every interactive feature keyboard operable. `critical` · [details](docs/rules/accessibility.md#a4)
- [ ] **A5** Keep focus visible and unobscured. `critical` · [details](docs/rules/accessibility.md#a5)
- [ ] **A6** Keep non-interactive marks out of the tab order. `required` · [details](docs/rules/accessibility.md#a6)
- [ ] **A7** Announce tooltips and status changes. `required` · [details](docs/rules/accessibility.md#a7)
- [ ] **A8** Let the reader reduce motion. `critical` · [details](docs/rules/accessibility.md#a8)
- [ ] **A9** Explain the purpose and the controls. `critical` · [details](docs/rules/accessibility.md#a9)
- [ ] **A10** Keep no value or comparison on hover alone. `required` · [details](docs/rules/accessibility.md#a10)
- [ ] **A11** Make changed state reproducible. `recommended` · [details](docs/rules/accessibility.md#a11)
- [ ] **A12** Do not override assistive technology settings. `critical` · [details](docs/rules/accessibility.md#a12)
- [ ] **A13** Use one tab stop for dense charts. `critical` · [details](docs/rules/accessibility.md#a13)
- [ ] **A14** Survive text spacing and font overrides. `required` · [details](docs/rules/accessibility.md#a14)

### R. Layout and responsiveness

*8 rules. The chart survives narrow screens, zoom, loading, and print without losing labels.*

- [ ] **R1** Avoid horizontal scroll at 320px. `critical` · [details](docs/rules/layout.md#r1)
- [ ] **R2** Keep labels unclipped at three widths. `required` · [details](docs/rules/layout.md#r2)
- [ ] **R3** Keep pointer targets at 24px or larger. `required` · [details](docs/rules/layout.md#r3)
- [ ] **R4** Reserve chart height before hydration. `required` · [details](docs/rules/layout.md#r4)
- [ ] **R5** Lazy-load charts below the first viewport. `recommended` · [details](docs/rules/layout.md#r5)
- [ ] **R6** Keep the chart in print. `recommended` · [details](docs/rules/layout.md#r6)
- [ ] **R7** Survive 200% text zoom. `recommended` · [details](docs/rules/layout.md#r7)
- [ ] **R8** Keep reading order with the visual order. `required` · [details](docs/rules/layout.md#r8)

### S. States and failure

*8 rules. Empty, partial, stale, flat, and broken data each get a state a reader can understand.*

- [ ] **S1** Explain an empty dataset. `required` · [details](docs/rules/states.md#s1)
- [ ] **S2** Name the source and retry path on failure. `required` · [details](docs/rules/states.md#s2)
- [ ] **S3** Render a single data point clearly. `required` · [details](docs/rules/states.md#s3)
- [ ] **S4** Give a flat series an explicit domain. `required` · [details](docs/rules/states.md#s4)
- [ ] **S5** State when outliers are excluded. `recommended` · [details](docs/rules/states.md#s5)
- [ ] **S6** Mark stale and partial data. `required` · [details](docs/rules/states.md#s6)
- [ ] **S7** Handle extreme values without clipping. `required` · [details](docs/rules/states.md#s7)
- [ ] **S8** Separate no data, zero, and missing. `required` · [details](docs/rules/states.md#s8)

### N. Narrative and context

*5 rules. The title, note, and surrounding text state the finding and the limits of the data.*

- [ ] **N1** State the finding in the title. `critical` · [details](docs/rules/narrative.md#n1)
- [ ] **N2** Explain what the chart is for. `critical` · [details](docs/rules/narrative.md#n2)
- [ ] **N3** Keep chart text at grade 9 or lower. `critical` · [details](docs/rules/narrative.md#n3)
- [ ] **N4** Do not imply causation without support. `required` · [details](docs/rules/narrative.md#n4)
- [ ] **N5** Answer the question the page asks. `required` · [details](docs/rules/narrative.md#n5)

### I. Interaction, animation and 3D

*10 rules. Exploratory views stay operable, understandable, and still when the reader asks.*

- [ ] **I1** Give every 3D or interactive view a non-visual equivalent. `critical` · [details](docs/rules/interaction.md#i1)
- [ ] **I2** Give every pointer action a keyboard path. `critical` · [details](docs/rules/interaction.md#i2)
- [ ] **I3** Expose the active state of controls. `required` · [details](docs/rules/interaction.md#i3)
- [ ] **I4** Describe and reproduce the current view. `required` · [details](docs/rules/interaction.md#i4)
- [ ] **I5** Respect reduced motion in the scene. `required` · [details](docs/rules/interaction.md#i5)
- [ ] **I6** Announce loading and keep the page usable. `required` · [details](docs/rules/interaction.md#i6)
- [ ] **I7** Keep labels legible and controllable. `required` · [details](docs/rules/interaction.md#i7)
- [ ] **I8** Name layer, region, and search controls. `required` · [details](docs/rules/interaction.md#i8)
- [ ] **I9** Give spatial views an orientation aid. `recommended` · [details](docs/rules/interaction.md#i9)
- [ ] **I10** Set a frame-rate and asset budget. `recommended` · [details](docs/rules/interaction.md#i10)

### M. Maps and spatial views

*8 rules. Geography carries values without hiding scale, vintage, coverage, or missing areas.*

- [ ] **M1** Give the map a text equivalent. `critical` · [details](docs/rules/maps.md#m1)
- [ ] **M2** State the projection, extent, and scale. `required` · [details](docs/rules/maps.md#m2)
- [ ] **M3** Explain the map legend and units. `required` · [details](docs/rules/maps.md#m3)
- [ ] **M4** Show boundary and geometry vintage. `required` · [details](docs/rules/maps.md#m4)
- [ ] **M5** Do not rely on colour alone on a map. `critical` · [details](docs/rules/maps.md#m5)
- [ ] **M6** Distinguish missing areas from zero. `required` · [details](docs/rules/maps.md#m6)
- [ ] **M7** Make zoom and pan keyboard accessible. `required` · [details](docs/rules/maps.md#m7)
- [ ] **M8** Offer a small-screen text view. `recommended` · [details](docs/rules/maps.md#m8)

### P. Process and delivery

*6 rules. Every chart has an owner, an evidence trail, and a check that runs before release.*

- [ ] **P1** List every chart instance with an owner. `critical` · [details](docs/rules/process.md#p1)
- [ ] **P2** Capture visual snapshots at three widths. `required` · [details](docs/rules/process.md#p2)
- [ ] **P3** Run axe on every chart page. `required` · [details](docs/rules/process.md#p3)
- [ ] **P4** Keep a current manual audit. `required` · [details](docs/rules/process.md#p4)
- [ ] **P5** Regenerate the audit report. `required` · [details](docs/rules/process.md#p5)
- [ ] **P6** Record a verdict for every rule and chart. `critical` · [details](docs/rules/process.md#p6)
<!-- rules-catalog:end -->

## When another checklist owns the check

This repo keeps the chart-specific check. It does not restate the page-level checks that another maintained checklist already covers.

| If the problem is | Use |
| --- | --- |
| Page HTML, CSS, JavaScript, forms, SEO, security, images, privacy, i18n, or general accessibility | [Front-End Checklist](https://github.com/thedaviddias/front-end-checklist) |
| Page load, bundles, caching, fonts, or Core Web Vitals beyond the chart container | [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist) |
| Layout, typography, spacing, or visual hierarchy outside the chart | [Front-End Design Checklist](https://github.com/thedaviddias/Front-End-Design-Checklist) |
| Chart accessibility heuristics | [Chartability](https://chartability.fizz.studio/) |
| Official UK chart guidance | [ONS data visualisation](https://service-manual.ons.gov.uk/data-visualisation) and [GOV.UK Analysis Function charts](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) |
| Practical chart, map, and table advice | [Datawrapper Academy](https://www.datawrapper.de/academy) |
| Chart type selection | [FT Visual Vocabulary](https://ft-interactive.github.io/visual-vocabulary/) and [Data-to-Viz](https://www.data-to-viz.com/) |
| Normative accessibility requirements | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [W3C complex images](https://www.w3.org/WAI/tutorials/images/complex/) |
| Interactive 3D reference | [BodyVista](https://freedomintelligence.github.io/BodyVista/) |

`docs/other-checklists.md` explains the boundary. `docs/frontend-handoff.md` gives examples of which repo owns which finding.

## Contributing

Rules are data, not prose spread across files. Add or change a rule in `rules/data/`, run `npm run generate`, then run `npm run check`. A new rule needs a stable ID, a tier, a check, a fix, at least one source, and a related ID when the rule depends on another. See `CONTRIBUTING.md`.

## License

The code and original text in this repo are MIT licensed. Linked checklists and standards keep their own licenses. This repo adapts concepts and links to the source. It does not republish the Evergreen checklist, Datawrapper articles, or other restricted material.
