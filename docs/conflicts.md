# Source conflicts

The chart guidance sources disagree on several defaults. This page records the choice behind the rule, so a reviewer can see when a rule is a house decision rather than a consensus standard.

| Question | Sources disagree | Choice in this repo | Rule |
| --- | --- | --- | --- |
| Must a bar or area start at zero? | GOV.UK and ONS say yes for bars and areas. ONS and Evergreen allow lines and scatters to crop. | Bars and areas start at zero. Lines and scatters may crop with an explicit domain and a note. | D4, D5, D11 |
| Is a second y-axis allowed? | ONS says avoid it. Evergreen allows a secondary axis as a rendering hack. FT uses line plus column for amount and rate. | No reader-facing second axis. A rendering helper with no second scale needs a recorded exception. | D6 |
| How many categories fit? | GOV.UK says four for grouped and stacked bars. ONS says five. Datawrapper says seven colours. | Four for grouped and stacked bars. Five colour series. Six or seven need an exception. | E4, E12 |
| How many pie slices fit? | GOV.UK says five. ONS prefers three or four and avoids more than six. Data-to-Viz avoids pies. | Five or fewer, and only for part-to-whole data. | E10 |
| Which contrast ratio wins? | A Datawrapper article says 2.5 for large text and 4 for small text. WCAG says 4.5 for normal text and 3 for large text. | WCAG wins. | C2, C3 |
| Is a table enough for a complex chart? | Chartability treats no table as critical. USWDS says a table is not always a sufficient alternative. | Table plus a narrative summary. A table alone is not enough for a complex chart. | A2, A3, M1 |
| When is a log scale allowed? | ONS says avoid it except for odds ratios on log base 2. Other sets are silent. | Only with a stated reason and a labelled base. | E6 |
| How long can a title be? | ONS says 15 words or fewer. Evergreen says 8 to 20 words. | 15 words or fewer. | N1 |
| Should uncertainty use error bars? | ONS says bars and columns should not use error bars. Other sets do not cover the mark choice. | Use a dot with a range or a line with a band. Keep error bars off bars. | D9 |
| Is 3D a valid value encoding? | No reviewed set recommends 3D for precise comparison. Some allow it for spatial structure. | 3D is for spatial structure, not for precise value comparison. | E2, I1 |

## How to read a conflict

A conflict is not a bug in the checklist. It is a place where the sources leave a choice. The rule records the choice, and the evidence column in each rule points to the sources. If a project needs a different choice, record an exception with a reason and a link.
