# Chart accessibility review

The keyboard, screen-reader, contrast, and motion checks that apply to a chart.

**Time:** 30 to 60 minutes

**Audience:** Front-end developer or accessibility reviewer.

## 1. Check the name and the table

The chart has an image role, a name that states the finding, and a table with the same values and units.

Rules: [A1](../docs/rules/accessibility.md#a1), [A2](../docs/rules/accessibility.md#a2), [A3](../docs/rules/accessibility.md#a3).

## 2. Use only the keyboard

Reach every control, keep focus visible, and leave every interaction without a trap.

Rules: [A4](../docs/rules/accessibility.md#a4), [A5](../docs/rules/accessibility.md#a5), [A6](../docs/rules/accessibility.md#a6).

## 3. Check the announcements

Tooltips, loading, errors, and updates reach a live region. No value is hover-only.

Rules: [A7](../docs/rules/accessibility.md#a7), [A10](../docs/rules/accessibility.md#a10).

## 4. Check motion and focus control

Reduced motion works. Autoplay over five seconds can be paused. Custom keys apply only while focused.

Rules: [A8](../docs/rules/accessibility.md#a8), [A12](../docs/rules/accessibility.md#a12).

## 5. Check dense data

A chart over 50 marks has one tab stop and arrow-key detail. It does not put every mark in the tab order.

Rules: [A13](../docs/rules/accessibility.md#a13), [E11](../docs/rules/encoding.md#e11).

## 6. Check colour and contrast

Text and marks pass contrast, colour is not the only channel, and forced-colors keeps the chart readable.

Rules: [C2](../docs/rules/colour.md#c2), [C3](../docs/rules/colour.md#c3), [C5](../docs/rules/colour.md#c5), [C9](../docs/rules/colour.md#c9).
