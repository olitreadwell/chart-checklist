# Relationship map

`E1` checks the declared relationship against the rendered chart type. Every chart declares one value from this list.

| Relationship | Allowed chart types |
| --- | --- |
| change over time | line, area, column, slope |
| comparison | bar, grouped bar, dot, dumbbell |
| ranking | sorted bar, dot, slope |
| distribution | histogram, box, strip, density, dot |
| composition | stacked bar, 100% stacked bar, pie, treemap |
| correlation | scatter, heatmap; bubble only with a size legend |
| geography | choropleth, proportional symbol, dot map |
| deviation | diverging bar, deviation line, bullet |

`E1` also accepts a chart type outside the row when the chart records an exception with a reason and an issue link. An exception is not a pass. It is a recorded decision that a reviewer can challenge.

## Choosing a row

Start with the question, not the chart. If the reader needs to know how a value changed, use change over time. If the reader needs to know which item is larger, use comparison or ranking. If the reader needs to know how a whole splits, use composition. If the reader needs to know whether two measures move together, use correlation. If the reader needs to know where something happens, use geography.

When a chart fits two rows, choose the row that names the main question. A line chart of a ranking over time is change over time, not ranking.
