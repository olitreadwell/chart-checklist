# Check mechanisms

Each rule names the mechanism that can prove it. The token is a contract. If a mechanism cannot prove the check, change the check or add the missing evidence.

| Token | Mechanism | What it can prove | What it cannot prove |
| --- | --- | --- | --- |
| `unit` | Component or data test | Axis domain, formatting, units, series order, table parity, empty and error states | Whether the chart choice suits the question |
| `e2e` | Browser test | Keyboard path, focus, reflow, target size, live regions, responsive layout | Whether the announcement is meaningful |
| `axe` | axe-core through a test runner | Names, roles, text contrast, target size, some ARIA errors | Mark contrast, chart meaning, or table equivalence |
| `visual` | Screenshot plus DOM geometry | Label clipping, overlap, theme appearance, layout at set widths | Whether the image is correct, only whether it changed |
| `lighthouse` | Lighthouse CI | Page LCP, CLS, INP proxies, resource budgets | Field performance at the 75th percentile |
| `data` | Data check | Suppression, rounding, source date, totals, denominators | Whether the source is fit for publication |
| `gate` | Project check | Inventory coverage, report freshness, audit expiry | The quality of a manual verdict |
| `tool` | Readability or lint tool | Flesch-Kincaid grade, token usage, formatting | Whether the sentence is true |
| `manual` | Recorded review | Chart choice, honesty, narrative, colour judgement | Nothing automated. This is the only route for meaning |

## Rules for evidence

- A pass needs evidence. A source file alone is not evidence for a rendered-state check.
- A failure needs the rule ID, the evidence, and a fix.
- A not-applicable result needs a reason, such as "static sparkline, no interaction".
- A blank result is a failure.
- A visual snapshot proves the chart is unchanged. It does not prove the chart is correct.
- axe finds presence and semantics. It does not prove that a description is accurate.
- A checklist pass is not WCAG conformance. Chartability and this repo find failures. They do not certify.

## Suggested tool stack

- Unit: Vitest or the project's existing component test runner.
- Browser: Playwright.
- Accessibility: axe-core through Playwright or vitest-axe.
- Visual: Playwright screenshots at 320px, 768px, and 1280px in light and dark.
- Performance: Lighthouse CI and a field metric source where one exists.
- Data: the project's own pipeline tests plus a spot check against the published table.
