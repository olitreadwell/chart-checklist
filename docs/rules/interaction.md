# I. Interaction, animation and 3D

Exploratory views stay operable, understandable, and still when the reader asks.

A rule passes, fails, or does not apply. Record `n/a` with a reason. A blank result counts as a failure.

<a id="i1"></a>
## I1. Give every 3D or interactive view a non-visual equivalent

**Tier:** critical

**Check:** Every 3D or interactive view has a table, text summary, or 2D fallback that carries the same values and relationships.

**Fix:** Add a table or a written finding beside the view. Keep the fallback reachable without the canvas.

**Check with:** unit, manual

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [Chartability](https://chartability.fizz.studio/) · [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/)

**Related:** A3, E9

<a id="i2"></a>
## I2. Give every pointer action a keyboard path

**Tier:** critical

**Check:** Every action available by pointer has a keyboard path. No action is drag-only or hover-only.

**Fix:** Add buttons or key handlers for rotate, pan, zoom, select, and reset. Keep the pointer path as an extra.

**Check with:** e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/)

**Related:** A4, A12

<a id="i3"></a>
## I3. Expose the active state of controls

**Tier:** required

**Check:** Toggles, layers, and tools expose their active state through aria-pressed, aria-selected, or a visible state that matches the DOM.

**Fix:** Set the state attribute and keep it in sync with the scene. Do not rely on a colour change alone.

**Check with:** unit, e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/)

**Related:** C5, I8

<a id="i4"></a>
## I4. Describe and reproduce the current view

**Tier:** required

**Check:** The current camera, section, layer, and selection are described in text and can be reproduced from the URL or a visible summary.

**Fix:** Write the view state to the URL or a state panel. Give a reset control a stable default.

**Check with:** manual, e2e

**Evidence:** [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/) · [ONS: Interactive charts and animations](https://service-manual.ons.gov.uk/data-visualisation/guidance/interactive-charts-and-animations)

**Related:** A11, I9

<a id="i5"></a>
## I5. Respect reduced motion in the scene

**Tier:** required

**Check:** Camera motion and auto-rotation respect prefers-reduced-motion, and no view moves without a reader action unless it can be paused.

**Fix:** Disable auto-rotation under reduced motion. Add pause and reset controls to every moving scene.

**Check with:** unit, e2e

**Evidence:** [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) · [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/)

**Related:** A8, C11

<a id="i6"></a>
## I6. Announce loading and keep the page usable

**Tier:** required

**Check:** Loading and progress messages are announced, and a heavy scene does not block the first content or the page controls.

**Fix:** Show a status message, reserve the scene area, and load models or tiles after the page shell renders.

**Check with:** unit, e2e, lighthouse

**Evidence:** [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/) · [web.dev: Core Web Vitals](https://web.dev/articles/vitals)

**Related:** R4, R5, A7

<a id="i7"></a>
## I7. Keep labels legible and controllable

**Tier:** required

**Check:** Labels and annotations remain legible at every zoom level and can be toggled off.

**Fix:** Scale or reposition labels, avoid overlap, and add a label toggle that also works from the keyboard.

**Check with:** visual, manual

**Evidence:** [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/) · [Chartability](https://chartability.fizz.studio/)

**Related:** R2, I8

<a id="i8"></a>
## I8. Name layer, region, and search controls

**Tier:** required

**Check:** Layer, region, and search controls have accessible names, grouped semantics, and a visible count where the set changes.

**Fix:** Use fieldset and legend or a labelled group. Name each control and announce the visible count.

**Check with:** unit, e2e

**Evidence:** [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/) · [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

**Related:** A9, I3

<a id="i9"></a>
## I9. Give spatial views an orientation aid

**Tier:** recommended

**Check:** A spatial view shows orientation through an axis gizmo, overview, breadcrumb, or named view presets.

**Fix:** Add a small orientation control and a reset. Name the current view in text.

**Check with:** manual

**Evidence:** [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/) · Chart Checklist house rule

**Related:** I4

<a id="i10"></a>
## I10. Set a frame-rate and asset budget

**Tier:** recommended

**Check:** The scene meets a recorded frame-rate and asset budget on a mid-range device, and the measured numbers are written down.

**Fix:** Measure on a mid-range phone. Reduce model size, draw distance, or effects until the budget holds.

**Check with:** manual, lighthouse

**Evidence:** [BodyVista: interactive 3D anatomy reference](https://freedomintelligence.github.io/BodyVista/) · [web.dev: Core Web Vitals](https://web.dev/articles/vitals)

**Related:** I6, R5
