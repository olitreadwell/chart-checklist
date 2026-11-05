# AI builder quickstart

This page is for people building with Lovable, Bolt, v0, Cursor, Claude, ChatGPT, or another AI tool. You do not need to run the repo to get a useful review.

## Path 1: install the skill

If your tool supports skills, install it once:

```sh
npx skills add olitreadwell/chart-checklist --skill chart-checklist -g -y
```

The installed folder includes `rules.json`, so the skill works without the repo.

## Path 2: paste the prompt

If your tool does not support skills:

1. Open `prompts/chart-review.md`.
2. Copy the prompt block.
3. Paste it into your AI tool.
4. Add the chart code, a screenshot, or a live URL.
5. Ask for critical findings first.

## What to give the AI

- The chart component code, or a screenshot.
- A desktop screenshot and a mobile screenshot when you have both.
- The title, source line, and data table.
- One sentence on what the chart is meant to show.

Without code, the AI can still review the visible design. It must mark anything it cannot verify as `needs check`, not `pass`.

## The 12 checks

| ID | Check |
| --- | --- |
| D3 | The chart shows its source and as-of date. |
| N1 | The title states the finding, not the variable name. |
| E1 | The chart type fits the relationship you are showing. |
| D4 | Bars and areas start at zero. |
| D2 | Every quantitative axis and tooltip carries its unit. |
| C5 | Colour is not the only channel. Labels, patterns, or shapes carry the same meaning. |
| A3 | A data table carries the same values, units, and series order as the chart. |
| A1 | The chart has an accessible name. |
| A2 | The accessible name and a visible sentence state the finding. |
| A4 | Every interactive control works from the keyboard. |
| R1 | The chart does not cause horizontal scroll at 320px. |
| S1 | Empty, error, single-point, and flat series states explain themselves. |

These 12 are the short path. The repo has 96 rules across 10 categories.

## What `needs check` means

An AI tool can see a screenshot. It cannot always see the DOM, the data source, the keyboard path, or the table parity.

`needs check` means the tool did not have enough evidence. It is not a pass. It is a note for you or your developer.

## Ask for fixes this way

```text
Fix the critical findings only. Show the changed lines. Do not change the data or the source line.
```

Then re-run the review. One fix can change another check.

## Related

- Full checklist: `README.md`
- Paste-ready prompt: `prompts/chart-review.md`
- Page-level checks: https://github.com/thedaviddias/front-end-checklist
