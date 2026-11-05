# Front-end handoff

The Front-End Checklist and this checklist overlap at the edge of a chart. These examples show where the line sits.

| Finding | Owner | Rule |
| --- | --- | --- |
| The page has no `lang` attribute | Front-End Checklist | HTML language rule |
| The chart SVG has no accessible name | Chart Checklist | `A1` |
| The page has no skip link | Front-End Checklist | General accessibility rule |
| The chart's data table is missing | Chart Checklist | `A3` |
| The hero chart pushes LCP past 2.5 seconds | Both | `R4`, `R5` here. The page budget belongs to the Front-End Performance Checklist |
| A navigation focus ring is invisible | Front-End Checklist | CSS focus rule |
| A chart control's focus ring is invisible | Chart Checklist | `A5` |
| The chart text is 10px | Chart Checklist | `C1` |
| Body text is 14px on mobile | Front-End Checklist | CSS font-size rule |
| A chart has red and green series with no second channel | Chart Checklist | `C5` |
| The page has an unlabelled search field | Front-End Checklist | Form accessibility rule |
| A filter inside the chart has no name | Chart Checklist | `I8` |
| The chart table has no caption | Chart Checklist | `A3` |
| The page has duplicate IDs | Front-End Checklist | HTML rule |
| A chart tooltip is the only place a value appears | Chart Checklist | `A10` |

## Agent prompt

Use this order when an agent has both checklists available.

1. Run the Front-End Checklist on the page shell first. Fix page-level issues that would hide or block the chart.
2. Run this checklist on every chart instance. Use `rules/rules.json` or the query command.
3. Keep the reports separate. A chart pass does not make the page pass, and a page pass does not make the chart honest.
4. If a finding changes a chart mark, a chart label, the chart table, or the chart narrative, keep it in the chart report.

## Why the split exists

The Front-End Checklist changes often and covers a wider surface. Copying its rules here would create two sources of truth. This repo keeps only the checks that need knowledge of data, encoding, or chart interaction.
