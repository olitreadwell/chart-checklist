# D. Data honesty

The number is what it says it is, and the reader can tell where it came from.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="d1"></a>
## D1. Name the measure, geography, and period

**Tier:** required

**Check:** The subtitle or deck names the measure, the geography, and the period.

**Fix:** Add the missing element. Put the measure first, then the place, then the dates.

**Check with:** unit, manual

**Evidence:** [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation) · [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf)

**Related:** N1

<a id="d2"></a>
## D2. Put units on every quantitative value

**Tier:** required

**Check:** Every quantitative axis, tooltip, and value label carries its unit. Categorical axes are exempt.

**Fix:** Add the unit once to the axis title and to each tooltip or label that stands alone.

**Check with:** unit

**Evidence:** [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines)

**Related:** C10

<a id="d3"></a>
## D3. Show the source and as-of date

**Tier:** critical

**Check:** The chart shows its source and as-of date, or links to a source block in the same section with both fields.

**Fix:** Add a source line with the publisher, dataset, and date. Link to the fuller source block when one exists.

**Check with:** data, manual

**Evidence:** [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation) · [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/)

**Related:** S6, M4

<a id="d4"></a>
## D4. Start bars and areas at zero

**Tier:** critical

**Check:** Bars and areas have a zero baseline.

**Fix:** Set the value axis minimum to zero for bar and area marks, or change to a mark that can crop.

**Check with:** unit

**Evidence:** [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines)

**Related:** D11

<a id="d5"></a>
## D5. Label a cropped axis and leave room before the first point

**Tier:** required

**Check:** A cropped line or scatter axis states its actual domain and leaves a gap of 25% to 33% of plot height or width before the first point.

**Fix:** Show the axis start value and add the gap. If the crop changes the reading, use zero instead.

**Check with:** unit, manual

**Evidence:** [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines) · [Data-to-Viz](https://www.data-to-viz.com/)

**Related:** D4, D11

<a id="d6"></a>
## D6. Remove the reader-facing second y-axis

**Tier:** critical

**Check:** No chart asks the reader to interpret two y-axes. A rendering helper with no second scale needs a recorded exception.

**Fix:** Split into two charts, index both series to a common base, or label the secondary series directly without a second axis.

**Check with:** unit, manual

**Evidence:** [ONS: Choosing a chart type](https://service-manual.ons.gov.uk/data-visualisation/chart-types/choosing-a-chart-type) · [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf)

**Related:** E1

<a id="d7"></a>
## D7. State the denominator or population base

**Tier:** required

**Check:** A rate states its denominator. A place comparison states the population base.

**Fix:** Add the denominator to the subtitle, note, or tooltip. Name the population and the year.

**Check with:** manual

**Evidence:** [GOV.UK Analysis Function: Statistical disclosure control for tables](https://analysisfunction.civilservice.gov.uk/policy-store/statistical-disclosure-control-for-tables-produced-from-surveys/) · Chart Checklist house rule

**Related:** D1

<a id="d8"></a>
## D8. Suppress cells below the publisher threshold

**Tier:** required

**Check:** A cell below the publisher disclosure threshold is suppressed. The threshold belongs to the source. Where none is given, the default is 5.

**Fix:** Apply the source threshold. If the publisher gives none, suppress cells under 5 and state the rule.

**Check with:** data, manual

**Evidence:** [GOV.UK Analysis Function: Statistical disclosure control for tables](https://analysisfunction.civilservice.gov.uk/policy-store/statistical-disclosure-control-for-tables-produced-from-surveys/) · Chart Checklist house rule

**Related:** D10

<a id="d9"></a>
## D9. Show published uncertainty where it changes the reading

**Tier:** required

**Check:** Uncertainty appears when the source publishes it. Bars do not use error bars. A dot plot with ranges or a line with a band is used instead.

**Fix:** Add a range, band, or interval and explain it in plain words. Keep error bars off bar and column marks.

**Check with:** manual

**Evidence:** [ONS: Showing uncertainty in charts](https://service-manual.ons.gov.uk/data-visualisation/guidance/showing-uncertainty-in-charts) · [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [Weissgerber et al.: Small-sample data visualisation](https://doi.org/10.1371/journal.pbio.1002128)

**Related:** N2

<a id="d10"></a>
## D10. Keep rounding within source precision

**Tier:** required

**Check:** Displayed values do not exceed source precision, and displayed totals agree within half of the last displayed digit.

**Fix:** Round to the source precision. Recompute totals from the rounded values or add a rounding note.

**Check with:** data

**Evidence:** [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation) · [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf)

**Related:** D8

<a id="d11"></a>
## D11. Explain a non-zero baseline

**Tier:** required

**Check:** A line or scatter chart with a non-zero baseline states why zero was not used.

**Fix:** Add one sentence to the note or subtitle that names the reason for the crop.

**Check with:** manual

**Evidence:** [Data-to-Viz](https://www.data-to-viz.com/) · [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines)

**Related:** D4, D5

<a id="d12"></a>
## D12. Distinguish missing periods from assumptions

**Tier:** required

**Check:** Missing periods render as a gap or a dashed assumed segment. Observations are visually distinct from assumptions.

**Fix:** Use a gap for missing data and a dashed segment for an assumption. Add a legend or note for the dash.

**Check with:** unit, manual

**Evidence:** [Datawrapper: Missing data in line charts](https://www.datawrapper.de/academy/missing-data-in-line-charts) · [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation)

**Related:** S8
