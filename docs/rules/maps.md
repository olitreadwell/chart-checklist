# M. Maps and spatial views

Geography carries values without hiding scale, vintage, coverage, or missing areas.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="m1"></a>
## M1. Give the map a text equivalent

**Tier:** critical

**Check:** A map has a text alternative or data table that carries the same values. The map is not the only route to the data.

**Fix:** Add a table, a ranked list, or a written summary beside the map. Keep the same values and geography.

**Check with:** unit, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [USWDS: Data visualizations](https://designsystem.digital.gov/components/data-visualizations/)

**Related:** A3, M8

<a id="m2"></a>
## M2. State the projection, extent, and scale

**Tier:** required

**Check:** The map states its projection, geographic extent, and scale or a scale bar.

**Fix:** Add the projection and extent to the note. Add a scale bar when distance matters.

**Check with:** manual

**Evidence:** Chart Checklist house rule · [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation)

**Related:** D1

<a id="m3"></a>
## M3. Explain the map legend and units

**Tier:** required

**Check:** The legend explains the colour or size encoding and its units.

**Fix:** Add a labelled legend with units and the class breaks or size scale.

**Check with:** unit, manual

**Evidence:** [GOV.UK Analysis Function: Charts, a checklist](https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/) · [USWDS: Data visualizations](https://designsystem.digital.gov/components/data-visualizations/)

**Related:** D2, C7

<a id="m4"></a>
## M4. Show boundary and geometry vintage

**Tier:** required

**Check:** The boundary or geometry vintage and its source are shown.

**Fix:** Add the boundary year and source to the source line. Date any geometry that changes.

**Check with:** data, manual

**Evidence:** [ONS Service Manual: Data visualisation](https://service-manual.ons.gov.uk/data-visualisation) · Chart Checklist house rule

**Related:** D3

<a id="m5"></a>
## M5. Do not rely on colour alone on a map

**Tier:** critical

**Check:** Map classes are not carried by colour alone. Patterns, labels, boundaries, or values provide a second channel.

**Fix:** Add a pattern, a boundary, a label, or a value to every class. Check the map in grayscale.

**Check with:** unit, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/)

**Related:** C5, C6

<a id="m6"></a>
## M6. Distinguish missing areas from zero

**Tier:** required

**Check:** Missing or unreliable areas have a distinct treatment from areas with a true zero.

**Fix:** Use a separate fill or hatch for missing areas and name it in the legend.

**Check with:** unit, manual

**Evidence:** [Datawrapper: Missing data in line charts](https://www.datawrapper.de/academy/missing-data-in-line-charts) · Chart Checklist house rule

**Related:** S8, D12

<a id="m7"></a>
## M7. Make zoom and pan keyboard accessible

**Tier:** required

**Check:** Zoom and pan work from the keyboard, a reset control is present, and the map has no keyboard trap.

**Fix:** Add zoom buttons, arrow-key pan, and a reset. Keep the map focusable only while it is active.

**Check with:** e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/)

**Related:** A4, I2

<a id="m8"></a>
## M8. Offer a small-screen text view

**Tier:** recommended

**Check:** On small screens, the map offers a list or table view that does not require zooming or panning.

**Fix:** Add a table or ranked list tab. Keep the map as the visual overview.

**Check with:** e2e, manual

**Evidence:** Chart Checklist house rule · [USWDS: Data visualizations](https://designsystem.digital.gov/components/data-visualizations/)

**Related:** M1, R1
