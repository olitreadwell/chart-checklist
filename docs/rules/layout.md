# R. Layout and responsiveness

The chart survives narrow screens, zoom, loading, and print without losing labels.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="r1"></a>
## R1. Avoid horizontal scroll at 320px

**Tier:** critical

**Check:** The chart container causes no horizontal scroll at 320 CSS pixels, equivalent to 400% zoom at 1280px.

**Fix:** Let the chart shrink, stack controls, or move the table below. Remove fixed pixel widths from the figure.

**Check with:** e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · Chart Checklist house rule

**Related:** R2, R8

<a id="r2"></a>
## R2. Keep labels unclipped at three widths

**Tier:** required

**Check:** Labels are not clipped or overlapped at 320px, 768px, and 1280px.

**Fix:** Shorten labels, wrap them, move them to a direct label, or increase the axis gutter.

**Check with:** visual, manual

**Evidence:** Chart Checklist house rule · [ONS: Chart text](https://service-manual.ons.gov.uk/data-visualisation/guidance/chart-text)

**Related:** R1, A14

<a id="r3"></a>
## R3. Keep pointer targets at 24px or larger

**Tier:** required

**Check:** Interactive targets are at least 24px, with 44px preferred.

**Fix:** Increase the hit area without enlarging the visible mark. Keep spacing between adjacent targets.

**Check with:** e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** A4

<a id="r4"></a>
## R4. Reserve chart height before hydration

**Tier:** required

**Check:** The chart container reserves its height before hydration, and the measured height does not shift after hydration.

**Fix:** Set an aspect ratio or min-height on the figure. Render a skeleton with the same height.

**Check with:** e2e

**Evidence:** [web.dev: Core Web Vitals](https://web.dev/articles/vitals) · Chart Checklist house rule

**Related:** I6

<a id="r5"></a>
## R5. Lazy-load charts below the first viewport

**Tier:** recommended

**Check:** A chart below the first viewport is lazy loaded, and its request starts after the first viewport renders.

**Fix:** Load the chart component and data near the viewport. Keep the hero chart eager.

**Check with:** e2e, lighthouse

**Evidence:** [web.dev: Core Web Vitals](https://web.dev/articles/vitals) · [Lighthouse CI configuration](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)

**Related:** R4, I6

<a id="r6"></a>
## R6. Keep the chart in print

**Tier:** recommended

**Check:** The printed page keeps the chart, its title, and its source.

**Fix:** Add print styles for the figure. Avoid hiding the chart behind an interaction that print cannot reach.

**Check with:** manual

**Evidence:** Chart Checklist house rule

**Related:** A3

<a id="r7"></a>
## R7. Survive 200% text zoom

**Tier:** recommended

**Check:** The chart survives 200% text zoom without losing labels.

**Fix:** Use relative text sizes and flexible gutters. Let labels wrap or move to a second line.

**Check with:** manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · Chart Checklist house rule

**Related:** A14, R2

<a id="r8"></a>
## R8. Keep reading order with the visual order

**Tier:** required

**Check:** When the chart stacks at narrow widths, the visual order still matches the DOM order.

**Fix:** Change the DOM order before using CSS order. Put the title, chart, note, and table in the order a reader needs.

**Check with:** e2e, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · Chart Checklist house rule

**Related:** R1, A3
