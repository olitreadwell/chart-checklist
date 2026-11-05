# Interactive and 3D review

Checks for scene viewers, layered explorers, and other spatial interfaces.

**Time:** 30 to 60 minutes

**Audience:** Interaction designer, front-end developer, or reviewing agent.

## 1. Provide a non-visual route

Every scene has a table, text summary, or 2D fallback with the same values and relationships.

Rules: [I1](../docs/rules/interaction.md#i1), [A3](../docs/rules/accessibility.md#a3).

## 2. Provide a keyboard route

Rotate, pan, zoom, select, and reset all work from the keyboard. No action is drag-only.

Rules: [I2](../docs/rules/interaction.md#i2), [A4](../docs/rules/accessibility.md#a4).

## 3. Expose state

Toggles, layers, and tools expose active state. The current view is described and can be reproduced.

Rules: [I3](../docs/rules/interaction.md#i3), [I4](../docs/rules/interaction.md#i4).

## 4. Respect motion and waiting

Reduced motion stops camera drift. Loading is announced and the page stays usable.

Rules: [I5](../docs/rules/interaction.md#i5), [I6](../docs/rules/interaction.md#i6), [A8](../docs/rules/accessibility.md#a8).

## 5. Keep labels and controls usable

Labels stay legible at every zoom and can be toggled. Layer and search controls have names and counts.

Rules: [I7](../docs/rules/interaction.md#i7), [I8](../docs/rules/interaction.md#i8).

## 6. Check orientation and budget

A spatial view shows where the reader is. Measure frame time and asset weight on a mid-range device.

Rules: [I9](../docs/rules/interaction.md#i9), [I10](../docs/rules/interaction.md#i10).
