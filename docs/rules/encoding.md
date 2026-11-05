# E. Encoding and chart choice

The mark matches the relationship, and the chart does not hide a simpler reading.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="e1"></a>
## E1. Declare the relationship and match the chart type

**Tier:** required

**Check:** The chart declares one relationship from the controlled list, and the rendered chart type appears in that relationship row.

**Fix:** Add the relationship from docs/relationship-map.md to the chart metadata. Change the chart type or record an exception with a reason and a link.

**Check with:** unit, manual

**Evidence:** [FT Visual Vocabulary](https://ft-interactive.github.io/visual-vocabulary/) · [ONS: Choosing a chart type](https://service-manual.ons.gov.uk/data-visualisation/chart-types/choosing-a-chart-type)

**Related:** E2, E9

<a id="e2"></a>
## E2. Use position or length for precise comparison

**Tier:** required

**Check:** Position or length carries the value when a precise comparison matters. No 3D and no area for precise ranking.

**Fix:** Replace angle, area, or 3D encoding with a bar, dot, or line. Keep decoration out of the data mark.

**Check with:** manual

**Evidence:** [Cleveland and McGill: Graphical perception](https://doi.org/10.1080/01621459.1984.10478080) · [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf)

**Related:** E1

<a id="e3"></a>
## E3. Declare the order and render it

**Tier:** required

**Check:** The chart declares its order as value, natural, or alphabetical, and the rendered order matches the declaration.

**Fix:** Set the declared sort in the chart config. If the order is editorial, name the rule in the note.

**Check with:** unit

**Evidence:** [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf) · [ONS: Choosing a chart type](https://service-manual.ons.gov.uk/data-visualisation/chart-types/choosing-a-chart-type)

**Related:** E10

<a id="e4"></a>
## E4. Keep categorical series to five or fewer

**Tier:** required

**Check:** A chart has five or fewer categorical series. Six or seven need a recorded exception. More than seven fails.

**Fix:** Group small series into Other, use small multiples, or let the reader filter. Record any exception.

**Check with:** unit, manual

**Evidence:** [ONS: Using colours in charts](https://service-manual.ons.gov.uk/data-visualisation/colours/using-colours-in-charts) · [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [Datawrapper: Colours in data visualisation](https://www.datawrapper.de/blog/colors)

**Related:** C6, E13

<a id="e5"></a>
## E5. Label four or fewer series directly

**Tier:** recommended

**Check:** Four or fewer series are labelled beside the marks instead of through a legend.

**Fix:** Place the series name at the end of each line or beside each group. Remove the legend when no longer needed.

**Check with:** manual

**Evidence:** [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf) · [ONS: Chart text](https://service-manual.ons.gov.uk/data-visualisation/guidance/chart-text)

**Related:** E4

<a id="e6"></a>
## E6. Label a log scale and state its base

**Tier:** required

**Check:** A log scale is labelled as logarithmic and states its base.

**Fix:** Add the scale name and base to the axis title or note. Use a linear scale when the log does not help.

**Check with:** manual

**Evidence:** [Data-to-Viz](https://www.data-to-viz.com/) · [ONS: Axes and gridlines](https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines)

**Related:** D2

<a id="e7"></a>
## E7. Compare like with like

**Tier:** required

**Check:** Comparisons use the same period, definition, and denominator on both sides.

**Fix:** Align the periods and definitions. If they differ, state the difference and why the comparison still holds.

**Check with:** manual

**Evidence:** [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation) · [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/)

**Related:** D7

<a id="e8"></a>
## E8. Cite the source for event annotations

**Tier:** recommended

**Check:** Annotations for known events cite the event source.

**Fix:** Add the source and date to the annotation or its footnote.

**Check with:** unit, manual

**Evidence:** [ONS: Annotations](https://service-manual.ons.gov.uk/data-visualisation/guidance/annotations) · Chart Checklist house rule

**Related:** N4

<a id="e9"></a>
## E9. Offer a simpler alternative for a hard chart type

**Tier:** recommended

**Check:** A chart type that is hard to read has a simpler alternative, such as a table or bar view.

**Fix:** Add a table view, a bar toggle, or a short summary that carries the same comparison.

**Check with:** manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [USWDS: Data visualizations](https://designsystem.digital.gov/components/data-visualizations/)

**Related:** A3, E1

<a id="e10"></a>
## E10. Keep pie and doughnut slices honest

**Tier:** required

**Check:** A pie or doughnut sums to 100% within rounding, has no negative values, and has five or fewer slices.

**Fix:** Use a bar chart, group small slices into Other, or remove the pie when the parts do not sum to a whole.

**Check with:** unit

**Evidence:** [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [ONS: Pie and doughnut charts](https://service-manual.ons.gov.uk/data-visualisation/chart-types/pie-and-doughnut-charts)

**Related:** E3

<a id="e11"></a>
## E11. Match data density to the question

**Tier:** critical

**Check:** Data density suits the question. Individual labels are limited to 20 marks, and a dense chart offers aggregation, a filter, or a table.

**Fix:** Reduce marks, aggregate, add a filter, or provide a table. Keep the chart focused on one comparison.

**Check with:** manual

**Evidence:** [Chartability](https://chartability.fizz.studio/) · [USWDS: Data visualizations](https://designsystem.digital.gov/components/data-visualizations/)

**Related:** E9, A13

<a id="e12"></a>
## E12. Keep grouped bars to four categories

**Tier:** required

**Check:** A clustered or stacked bar has four or fewer categories per group.

**Fix:** Split the chart, group small categories, or switch to small multiples.

**Check with:** unit

**Evidence:** [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [ONS: Clustered bar charts](https://service-manual.ons.gov.uk/data-visualisation/chart-types/clustered-bar-chart) · [ONS: Stacked bar charts](https://service-manual.ons.gov.uk/data-visualisation/chart-types/stacked-bar-charts)

**Related:** E4

<a id="e13"></a>
## E13. Share scales across small multiples

**Tier:** required

**Check:** Small multiples share scale, order, and colour meaning, and the shared scale is labelled once.

**Fix:** Set one domain per measure, keep the same series order, and label the shared axis or legend.

**Check with:** unit, visual

**Evidence:** [ONS: Choosing a chart type](https://service-manual.ons.gov.uk/data-visualisation/chart-types/choosing-a-chart-type) · [Evergreen Data: Data Visualization Checklist](https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf)

**Related:** E4, E12
