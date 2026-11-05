# Interactive and 3D views

Category I covers scene viewers, layered explorers, orbit controls, and other spatial interfaces. These views need the same honesty and accessibility as a chart, plus a few checks that only appear when the reader can move the view.

## BodyVista as a reference

[BodyVista](https://freedomintelligence.github.io/BodyVista/) is a browser-based 3D anatomy explorer from FreedomIntelligence. It runs locally with Three.js, serves 2,900 structures across 12 systems, and includes layer controls, region presets, search, selection, transparency, sectioning, drawing, measurement, playback, and three language options.

It is useful here because it shows the shape of a real spatial interface. The demo has a loading state, named layer controls, view presets, keyboard and touch controls, a panel for the selected structure, and a separate motion mode with playback and speed controls.

It is a reference, not a standard. It does not define the rules, and a chart can pass category I without looking like BodyVista. The rules come from WCAG, Chartability, and the needs of a reader who cannot use a pointer.

BodyVista's code is MIT licensed. Its models, images, and educational content have separate terms. Do not copy assets or content from the demo.

## What the category checks

- `I1` gives every scene a non-visual route, such as a table or a written finding.
- `I2` gives every pointer action a keyboard path.
- `I3` exposes active state for layers, tools, and toggles.
- `I4` describes the current view and makes it reproducible.
- `I5` respects reduced motion and stops camera drift.
- `I6` announces loading and keeps the page usable.
- `I7` keeps labels legible and lets the reader hide them.
- `I8` names layer, region, and search controls and exposes counts.
- `I9` gives the reader an orientation aid.
- `I10` sets a frame-rate and asset budget.

## What 3D should not do

Use 3D for spatial structure, such as anatomy, buildings, or terrain. Do not use 3D to encode a value that a reader must compare precisely. `E2` still applies: position or length carries a precise comparison, and a 3D perspective distorts both. If the third dimension only adds decoration, remove it.

## How to test

1. Use the scene with the keyboard only. Reach every control and leave every mode.
2. Turn off the screen and listen to the announcements. Name the current view, the selected item, and the loading state.
3. Enable reduced motion. Confirm the scene stops moving unless you act.
4. Zoom the page to 200% and open it at 320px. Check labels and controls.
5. Measure the first load and the frame time on a mid-range phone. Write the numbers down.
6. Use the scene with a screen reader and with forced colors.
