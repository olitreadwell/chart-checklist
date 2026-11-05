# P. Process and delivery

Every chart has an owner, an evidence trail, and a check that runs before release.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="p1"></a>
## P1. List every chart instance with an owner

**Tier:** critical

**Check:** Every rendered chart has an inventory entry with its page, component, owner, and chart family.

**Fix:** Add the chart to the project inventory. Fail the build when a chart component has no entry.

**Check with:** gate

**Evidence:** Chart Checklist house rule

**Related:** P6

<a id="p2"></a>
## P2. Capture visual snapshots at three widths

**Tier:** required

**Check:** A visual snapshot exists at 320px, 768px, and 1280px in light and dark mode for every chart that changes appearance.

**Fix:** Add the visual test and store baselines from a fixed CI image, not a developer laptop.

**Check with:** visual

**Evidence:** Chart Checklist house rule · [Lighthouse CI configuration](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)

**Related:** R2, C8

<a id="p3"></a>
## P3. Run axe on every chart page

**Tier:** required

**Check:** axe runs on every page with a chart and returns zero serious or critical violations.

**Fix:** Add axe to the page test. Fix serious and critical violations before release.

**Check with:** e2e

**Evidence:** [axe-core rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) · [Chartability](https://chartability.fizz.studio/)

**Related:** A1, A3

<a id="p4"></a>
## P4. Keep a current manual audit

**Tier:** required

**Check:** The manual audit for the chart family is newer than the rendering code and no more than 12 months old.

**Fix:** Re-audit the family when the rendering code changes or the audit expires. Record the date and auditor.

**Check with:** gate

**Evidence:** Chart Checklist house rule · [Chartability](https://chartability.fizz.studio/)

**Related:** P5, P6

<a id="p5"></a>
## P5. Regenerate the audit report

**Tier:** required

**Check:** The audit report is regenerated when the gate runs, so its rows match the current inventory.

**Fix:** Generate the report in the gate. Fail when the committed report differs from the generated one.

**Check with:** gate

**Evidence:** Chart Checklist house rule

**Related:** P4, P6

<a id="p6"></a>
## P6. Record a verdict for every rule and chart

**Tier:** critical

**Check:** The report has one row per chart per rule. A blank row counts as a failure.

**Fix:** Record pass, fail, or not applicable with evidence. Do not leave a row blank.

**Check with:** gate

**Evidence:** Chart Checklist house rule · [Chartability](https://chartability.fizz.studio/)

**Related:** P1, P4
