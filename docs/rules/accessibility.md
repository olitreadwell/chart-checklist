# A. Accessibility

A screen reader, keyboard, or low-vision reader can reach the same finding.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="a1"></a>
## A1. Give the chart an image role and a short name

**Tier:** critical

**Check:** The chart has an image role and a short accessible name.

**Fix:** Add role="img" and a name through aria-label or aria-labelledby. Keep the name short and specific.

**Check with:** unit

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

**Related:** A2, A3

<a id="a2"></a>
## A2. State the finding in the accessible name and visible text

**Tier:** critical

**Check:** The accessible name states the finding, and a visible sentence states the same takeaway without requiring the chart.

**Fix:** Write one sentence with the finding. Use it for the visible summary and the accessible description.

**Check with:** unit, manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Datawrapper: Alternative descriptions for visualisations](https://www.datawrapper.de/academy/how-to-write-good-alternative-descriptions-for-your-data-visualization)

**Related:** A1, N1

<a id="a3"></a>
## A3. Provide a data table with the same values

**Tier:** critical

**Check:** A data table carries the same values, units, and series order as the chart, with a caption and header cells.

**Fix:** Add a caption, column headers, and every series in chart order. Keep the table in the DOM or behind a clear link.

**Check with:** unit

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [W3C: Complex images](https://www.w3.org/WAI/tutorials/images/complex/) · [USWDS: Data visualizations](https://designsystem.digital.gov/components/data-visualizations/)

**Related:** A1, S8

<a id="a4"></a>
## A4. Make every interactive feature keyboard operable

**Tier:** critical

**Check:** Every interactive feature is reachable and operable with the keyboard, with no keyboard trap.

**Fix:** Use native controls where possible. Add key handlers for custom marks and a way out of every interaction.

**Check with:** e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** A13, I2

<a id="a5"></a>
## A5. Keep focus visible and unobscured

**Tier:** critical

**Check:** Focus is not obscured, and the indicator is at least 2px with 3:1 contrast against its background.

**Fix:** Add a visible focus ring to every chart control. Remove overlays that cover the focused element.

**Check with:** e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** C9

<a id="a6"></a>
## A6. Keep non-interactive marks out of the tab order

**Tier:** required

**Check:** Non-interactive marks are not in the tab order.

**Fix:** Remove tabindex from decorative and static marks. Put one tab stop on the chart, not on every mark.

**Check with:** unit, e2e

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Highcharts accessibility module](https://www.highcharts.com/docs/accessibility/accessibility-module)

**Related:** A13

<a id="a7"></a>
## A7. Announce tooltips and status changes

**Tier:** required

**Check:** Tooltip and status changes are announced in a live region.

**Fix:** Add a polite live region for the active value and for loading, error, and update messages.

**Check with:** unit, e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** S2, I6

<a id="a8"></a>
## A8. Let the reader reduce motion

**Tier:** critical

**Check:** Interaction-triggered motion can be reduced, and autoplaying animation over five seconds can be paused, stopped, or hidden.

**Fix:** Respect prefers-reduced-motion. Add pause and stop controls for any animation over five seconds.

**Check with:** unit, e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** C11, I5

<a id="a9"></a>
## A9. Explain the purpose and the controls

**Tier:** critical

**Check:** Interaction instructions are visible, name the keyboard controls, and state what the chart is for.

**Fix:** Add a short instruction line beside the chart. Name the keys and the action they perform.

**Check with:** manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Highcharts accessibility module](https://www.highcharts.com/docs/accessibility/accessibility-module)

**Related:** N2, I8

<a id="a10"></a>
## A10. Keep no value or comparison on hover alone

**Tier:** required

**Check:** No value or comparison exists only on hover.

**Fix:** Show key values in labels, the table, or a pinned detail panel. Treat hover as an extra.

**Check with:** manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Datawrapper: Accessible charts, maps and tables](https://www.datawrapper.de/academy/how-we-make-sure-our-charts-maps-and-tables-are-accessible)

**Related:** A3, A7

<a id="a11"></a>
## A11. Make changed state reproducible

**Tier:** recommended

**Check:** A changed state from filters or hidden series can be reproduced from the URL or a visible description.

**Fix:** Write filter state to the URL or show a short state summary the reader can copy.

**Check with:** manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [ONS: Interactive charts and animations](https://service-manual.ons.gov.uk/data-visualisation/guidance/interactive-charts-and-animations)

**Related:** I4

<a id="a12"></a>
## A12. Do not override assistive technology settings

**Tier:** critical

**Check:** Custom keyboard and touch controls do not override screen-reader or browser settings, and apply only while the chart has focus.

**Fix:** Scope key handlers to the focused chart. Do not capture global keys or block browser zoom and scroll.

**Check with:** e2e, manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

**Related:** A4

<a id="a13"></a>
## A13. Use one tab stop for dense charts

**Tier:** critical

**Check:** A chart with more than 50 marks exposes one tab stop and reveals detail with arrow keys. Every mark is not a tab stop.

**Fix:** Make the chart one focusable group. Move detail with arrow keys and announce the active mark.

**Check with:** e2e

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Highcharts accessibility module](https://www.highcharts.com/docs/accessibility/accessibility-module)

**Related:** A4, A6, E11

<a id="a14"></a>
## A14. Survive text spacing and font overrides

**Tier:** required

**Check:** Text spacing overrides and user font settings do not clip labels or hide data.

**Fix:** Let labels wrap or move. Avoid fixed-height text boxes and fixed-width axis gutters.

**Check with:** e2e, visual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** R2, R7
