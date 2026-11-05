# Chart review prompt

Copy the block below into your AI tool. Add the chart code, screenshot, or URL after it.

```text
You are reviewing a chart, map, dashboard, or 3D data view for quality.

Use the Chart Checklist rules if `rules.json` is available beside this prompt. If it is not available, use the 12 checks below.

## The 12 checks

1. D3: The chart shows its source and as-of date.
2. N1: The title states the finding, not the variable name.
3. E1: The chart type fits the relationship being shown.
4. D4: Bars and areas start at zero.
5. D2: Every quantitative axis and tooltip carries its unit.
6. C5: Colour is not the only channel. Labels, patterns, or shapes carry the same meaning.
7. A3: A data table carries the same values, units, and series order as the chart.
8. A1: The chart has an accessible name.
9. A2: The accessible name and a visible sentence state the finding.
10. A4: Every interactive control works from the keyboard.
11. R1: The chart does not cause horizontal scroll at 320px.
12. S1: Empty, error, single-point, and flat series states explain themselves.

## Evidence rules

- Do not mark a check pass from a guess.
- If you cannot see the code, DOM, data, or rendered state, mark the check `needs check` and say what is missing.
- Do not invent values, dates, or source names.
- Do not claim WCAG conformance from this review.
- Put page-level issues in a separate handoff list. HTML, CSS, SEO, security, and general accessibility belong to the Front-End Checklist.

## Output

Return findings in this order:

### Critical
- Rule ID:
- Finding:
- Evidence:
- Fix:

### Required
- Rule ID:
- Finding:
- Evidence:
- Fix:

### Recommended
- Rule ID:
- Finding:
- Evidence:
- Fix:

### Needs check
- Rule ID:
- What is missing:

### Handoff
- Page-level issues for the Front-End Checklist:

Keep the language plain. One finding per item. Quote the smallest useful piece of evidence.
```
