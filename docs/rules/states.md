# S. States and failure

Empty, partial, stale, flat, and broken data each get a state a reader can understand.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="s1"></a>
## S1. Explain an empty dataset

**Tier:** required

**Check:** An empty dataset renders an explanation, not an empty box.

**Fix:** Show a short message with the reason and the next step. Keep the chart title and source visible.

**Check with:** unit

**Evidence:** Chart Checklist house rule · [Chartability](https://chartability.fizz.studio/)

**Related:** S2, S8

<a id="s2"></a>
## S2. Name the source and retry path on failure

**Tier:** required

**Check:** A fetch failure names the source and the retry path.

**Fix:** Show the source name, a plain error, and a retry control. Announce the change in a live region.

**Check with:** unit

**Evidence:** Chart Checklist house rule · [Chartability](https://chartability.fizz.studio/)

**Related:** A7, S1

<a id="s3"></a>
## S3. Render a single data point clearly

**Tier:** required

**Check:** A single data point renders and says there is one point.

**Fix:** Draw the point and add a note that the chart has one observation. Do not imply a trend.

**Check with:** unit

**Evidence:** Chart Checklist house rule · [Data-to-Viz](https://www.data-to-viz.com/)

**Related:** S4

<a id="s4"></a>
## S4. Give a flat series an explicit domain

**Tier:** required

**Check:** An all-zero or flat series gets an explicit domain instead of a collapsed axis.

**Fix:** Set a sensible domain and label it. Add a note when every value is the same.

**Check with:** unit

**Evidence:** Chart Checklist house rule · [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines)

**Related:** S3, D4

<a id="s5"></a>
## S5. State when outliers are excluded

**Tier:** recommended

**Check:** Outlier handling is stated when points are excluded.

**Fix:** Add the exclusion rule to the note and link to the full data when possible.

**Check with:** manual

**Evidence:** Chart Checklist house rule · [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation)

**Related:** N4

<a id="s6"></a>
## S6. Mark stale and partial data

**Tier:** required

**Check:** Stale or partial data carries its as-of date and states what is missing.

**Fix:** Add the date and the missing period or region. Keep the label beside the chart, not only in a tooltip.

**Check with:** unit, manual

**Evidence:** [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation) · Chart Checklist house rule

**Related:** D3, D12

<a id="s7"></a>
## S7. Handle extreme values without clipping

**Tier:** required

**Check:** Maximum, minimum, negative, and very large values do not clip or overlap.

**Fix:** Test the extremes, pad the domain, and move labels away from the plot edge.

**Check with:** unit, visual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · Chart Checklist house rule

**Related:** R2

<a id="s8"></a>
## S8. Separate no data, zero, and missing

**Tier:** required

**Check:** No data, a true zero, and a missing value are visually and textually distinct.

**Fix:** Use a distinct empty state, a zero mark, and a gap or dash for missing. Explain each in the key.

**Check with:** unit, manual

**Evidence:** [Datawrapper: Missing data in line charts](https://www.datawrapper.de/academy/missing-data-in-line-charts) · Chart Checklist house rule

**Related:** S1, D12, M6
