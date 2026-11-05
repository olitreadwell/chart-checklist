# Chartability map

Source: [The Chartability Workbook](https://chartability.github.io/POUR-CAF/), 7 principles and 50 heuristics, 14 marked critical. Accessed 2026-11-05.

Every Chartability critical heuristic maps to at least one critical rule in this repo. Three heuristics are out of scope because this checklist has no matching feature. The out-of-scope rows are decisions, not omissions.

| # | Chartability heuristic | Rules | Note |
| --- | --- | --- | --- |
| 1 | Low contrast (critical) | C2, C3 | Critical preserved |
| 2 | Content is only visual (critical) | A1, A2, A3, I1 | Critical preserved |
| 3 | Small text size (critical) | C1 | Critical preserved, 12px floor |
| 4 | Visual presents seizure risk (critical) | C11 | Critical preserved |
| 5 | Color is used alone to communicate meaning | C5 | WCAG 1.4.1 Level A, kept critical here |
| 6 | Meaningful elements can be distinguished from each other | C3, C4 | |
| 7 | Not CVD-friendly | C6 | |
| 8 | Spacing is inappropriate | C4, E11 | |
| 9 | Interaction modality only has one input type (critical) | A4, I2 | Critical preserved |
| 10 | No interaction cues or instructions (critical) | A9 | Critical preserved |
| 11 | Controls override AT controls (critical) | A12 | Critical preserved |
| 12 | Low contrast on interactive elements | C2, C3 | |
| 13 | Keyboard focus indicator missing, obscured, or low contrast | A5 | Kept critical |
| 14 | Inappropriate tab stops | A6, A13 | |
| 15 | Complex actions have no alternatives | A13, E9 | |
| 16 | Target pointer interaction size is too small | R3 | WCAG 2.5.8 floor |
| 17 | No explanation for purpose or for how to read (critical) | N2 | Critical preserved |
| 18 | No title, summary, or caption (critical) | N1, A2, A3 | Critical preserved |
| 19 | Reading level inappropriate (critical) | N3 | Critical preserved |
| 20 | Interactive context is not clear | A9, I4 | |
| 21 | Information complexity is inappropriate | E11 | Covered by the density critical |
| 22 | Changes are not easy to follow | A7, A8 | |
| 23 | Metrics and variables are undefined | D1, D2 | |
| 24 | Statistical uncertainty is not clearly communicated | D9 | |
| 25 | Axis labels are unclear or missing | D2, C10 | Axis titles stay manual |
| 26 | Controls are inappropriate | A9, I8 | |
| 27 | Does not conform to standards | P3, C2, C3, A1, A3 | axe rules plus the WCAG map |
| 28 | Semantically invalid | A1, P3 | |
| 29 | Fragile technology support | P3, S2 | Browser run plus a named error state |
| 30 | No table (critical) | A3, M1 | Critical preserved |
| 31 | Information can only be reached through a single process | A3, A4, I1 | |
| 32 | Location and history is unclear | A6, A13, I4 | Page history is out of chart scope |
| 33 | Interactions are not forgivable | none | Out of scope, charts have no destructive interaction |
| 34 | Information cannot be navigated by narrative or structure | A6, A13 | |
| 35 | Table or data is static | A3, A11 | Download, filter, and sort are not required |
| 36 | State is not easy to share and reproduce | A11, I4 | |
| 37 | Data density is inappropriate (critical) | E11 | Critical preserved |
| 38 | Navigation and interaction is tedious (critical) | A13 | Critical preserved |
| 39 | Visually apparent features and relationships are not described | A2 | |
| 40 | Data in text is not human-readable | D10, N3 | |
| 41 | Space does not handle extremes | S7 | |
| 42 | No default build-your-own view | none | Out of scope, no chart builder promise |
| 43 | User style change not respected (critical) | C9, A14 | Critical preserved |
| 44 | Long animations cannot be controlled | A8, I5 | |
| 45 | Scrolling experiences cannot be altered | none | Out of scope, no scroll-driven chart |
| 46 | Zoom and reflow are not supported | R1 | WCAG 1.4.10 Level AA, kept critical |
| 47 | User's text adjustments are not respected | A14, R7 | |
| 48 | Design is not consistent and familiar | C12 | Shared tokens and components |
| 49 | Contrast and textures cannot be adjusted | C9 | Forced-colors mode is covered, texture toggles are not required |
| 50 | Difficult chart type has no alternative | E9, I1 | |

## Check

The inventory records the 50 names and 14 critical marks as of 2026-11-05. The workbook has no machine-readable feed. A source change needs a manual diff against the published workbook.
