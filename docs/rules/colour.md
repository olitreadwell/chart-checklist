# C. Colour and legibility

Colour carries meaning without becoming the only carrier, in light and dark mode.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="c1"></a>
## C1. Keep chart text at 12px or larger

**Tier:** critical

**Check:** All rendered chart text is at least 12 CSS pixels, about 9 points.

**Fix:** Raise the font size in the chart theme and the SVG text rule. Recheck at 320px.

**Check with:** unit, e2e

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

**Related:** R2

<a id="c2"></a>
## C2. Meet text contrast ratios

**Tier:** critical

**Check:** Text meets 4.5:1 contrast, or 3:1 at 24px and above, or 18.66px bold and above.

**Fix:** Change the text or background token until the ratio passes in light and dark mode.

**Check with:** axe

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [GOV.UK Analysis Function: Data visualisation colours in charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)

**Related:** C8

<a id="c3"></a>
## C3. Meet 3:1 for marks against adjacent colours

**Tier:** critical

**Check:** Data marks meet 3:1 contrast against adjacent colours and the background.

**Fix:** Darken or lighten the mark, add a boundary, or change the adjacent fill.

**Check with:** unit, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** C4, C8

<a id="c4"></a>
## C4. Separate touching fills

**Tier:** required

**Check:** Touching fills have a 1px separator or a 3:1 boundary.

**Fix:** Add a background-coloured stroke or increase the contrast between the fills.

**Check with:** manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [GOV.UK Analysis Function: Data visualisation colours in charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)

**Related:** C3

<a id="c5"></a>
## C5. Never use colour as the only channel

**Tier:** critical

**Check:** Colour is not the only channel. Texture, shape, dash, or a direct label carries the same meaning.

**Fix:** Add a second channel to every series or category, and check it in grayscale.

**Check with:** unit, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** C6, M5

<a id="c6"></a>
## C6. Check the palette under colour vision deficiency

**Tier:** required

**Check:** The palette survives protanopia, deuteranopia, tritanopia, and achromatopsia simulation with distinguishable lightness.

**Fix:** Change the palette to vary lightness as well as hue. Avoid red-green and yellow-blue pairs.

**Check with:** unit, manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Datawrapper: Colours in data visualisation](https://www.datawrapper.de/blog/colors)

**Related:** C5

<a id="c7"></a>
## C7. Use sequential and diverging palettes only for ordered data

**Tier:** required

**Check:** Sequential and diverging palettes are used only for ordered data. Categorical data uses a categorical palette.

**Fix:** Swap the palette to a categorical set, or reorder the data if the sequence is real.

**Check with:** manual

**Evidence:** [GOV.UK Analysis Function: Data visualisation colours in charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/) · [Datawrapper: Colours in data visualisation](https://www.datawrapper.de/blog/colors)

**Related:** C6

<a id="c8"></a>
## C8. Repeat contrast checks in dark mode

**Tier:** required

**Check:** C2 and C3 pass again in dark mode. Text passes through axe and marks pass the token contrast test.

**Fix:** Add dark tokens for text, gridlines, marks, and focus. Run the same contrast checks in both themes.

**Check with:** axe, unit, visual

**Evidence:** [Datawrapper: Dark mode in embedded visualisations](https://www.datawrapper.de/academy/dark-mode-in-embedded-datawrapper-visualizations) · [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

**Related:** C2, C3, C9

<a id="c9"></a>
## C9. Survive forced-colors and high contrast

**Tier:** critical

**Check:** Windows high contrast and forced-colors keep marks, labels, and focus visible.

**Fix:** Use system colours or forced-colors fallbacks for marks, text, and focus. Test with forced colors enabled.

**Check with:** visual, manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

**Related:** C8, A5

<a id="c10"></a>
## C10. Use round, labelled gridlines

**Tier:** required

**Check:** Gridlines are round-numbered and labelled, with no minor gridlines. Use 6 to 10 on desktop and 3 to 6 on mobile.

**Fix:** Set the tick count and round the domain. Remove minor gridlines and lighten the remaining lines.

**Check with:** unit, visual

**Evidence:** [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines) · [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/)

**Related:** D2

<a id="c11"></a>
## C11. Avoid flashing and red large-area animation

**Tier:** critical

**Check:** Nothing flashes more than three times per second, and no animation uses red as a large-area flash.

**Fix:** Remove the flash, lower the frequency, or replace the animation with a static state change.

**Check with:** visual, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** A8, I5

<a id="c12"></a>
## C12. Use shared tokens and components

**Tier:** required

**Check:** Colours, type scale, and interaction patterns come from shared tokens and components. Chart code has no hard-coded values.

**Fix:** Move the value into a token or shared chart theme, then replace the local constant.

**Check with:** unit, manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · Chart Checklist house rule

**Related:** C8
