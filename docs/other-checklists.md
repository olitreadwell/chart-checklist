# Other checklists

This repo owns the chart. Other checklists own the page around it. Use this page to decide which one should carry a finding.

The boundary is simple. If the fix changes the mark, the data, the table, the chart label, or the chart narrative, it belongs here. If the fix changes the page shell, the HTML, the CSS, the JavaScript, or a general web concern, it belongs to the Front-End Checklist.

## Checklist map

| Checklist | Use it for | What stays in Chart Checklist |
| --- | --- | --- |
| [Front-End Checklist](https://github.com/thedaviddias/front-end-checklist) | HTML, CSS, JavaScript, forms, SEO, security, images, privacy, i18n, general accessibility, and testing | Chart names, chart tables, chart keyboard paths, chart colour, chart labels, and chart data honesty |
| [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist) | Bundles, caching, fonts, render blocking, and page-level Core Web Vitals | Chart container height, chart lazy loading, chart asset weight, and frame budget |
| [Front-End Design Checklist](https://github.com/thedaviddias/Front-End-Design-Checklist) | Layout, typography, spacing, and visual hierarchy outside the chart | Axis labels, legends, titles, reading order inside the figure, and chart density |
| [Chartability](https://chartability.fizz.studio/) | Chart accessibility heuristics and failure finding | The rules in this repo that adapt Chartability. The mapping is in `chartability-map.md` |
| [ONS data visualisation](https://service-manual.ons.gov.uk/data-visualisation) | Official UK chart guidance | Chart text, axes, uncertainty, annotations, chart type, and colour rules |
| [GOV.UK Analysis Function charts](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) | Chart and colour checklists for public statistics | Data rules, chart choice, category limits, and disclosure checks |
| [Datawrapper Academy](https://www.datawrapper.de/academy) | Practical chart, map, and table advice | Missing data, dark mode, colour, alt text, and map guidance |
| [FT Visual Vocabulary](https://ft-interactive.github.io/visual-vocabulary/) | Relationship to chart type mapping | `E1` and the relationship list |
| [Data-to-Viz](https://www.data-to-viz.com/) | Chart type selection and common failure modes | Chart choice, cropped axes, log scales, and density |
| [USWDS data visualizations](https://designsystem.digital.gov/components/data-visualizations/) | Manual checks for data tables and complex figures | Text equivalents, table fallbacks, and narrative context |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Normative accessibility requirements | Chart-specific applications of WCAG in categories A, C, and R |
| [W3C complex images](https://www.w3.org/WAI/tutorials/images/complex/) | Long descriptions and data tables for complex images | `A2` and `A3` |
| [BodyVista](https://freedomintelligence.github.io/BodyVista/) | A working reference for an interactive 3D explorer | Category I only. It is a reference, not a standard |

## How to hand off

1. Name the finding with a rule ID from the owning checklist.
2. Keep the evidence with the finding, such as a path, a selector, a screenshot, or a measured value.
3. Do not copy the other checklist's rule into this repo. Link to it and state which repo owns the fix.
4. When a finding has two causes, split it. For example, a slow hero chart gets `R4` and `R5` here, and a performance budget finding in the Front-End Performance Checklist.

`frontend-handoff.md` has worked examples.

## Source licensing

This repo links to its sources and adapts their concepts. It does not republish restricted checklists or articles.

- ONS and GOV.UK Analysis Function content is OGL v3. Reuse with attribution.
- Chartability is published under CC BY-SA 3.0 on its site. Check the repository before copying text.
- Evergreen Data's checklist has no open licence. This repo uses the concepts and does not republish the checklist.
- Datawrapper Academy text is governed by its terms. This repo links to it and does not copy long passages.
- WCAG content is under the W3C Document License. This repo quotes short requirements and links to the source.
- BodyVista's own code is MIT. Its models, images, and educational content have separate licences. Do not copy assets from the demo.
