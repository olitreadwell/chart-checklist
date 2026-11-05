# Data honesty review

The checks that stop a chart from making a claim the data cannot support.

**Time:** 20 to 40 minutes

**Audience:** Analyst, editor, or reviewing agent.

## 1. Trace the number

Find the source row or query for the maximum, the minimum, and one middle value. Compare them with the chart.

Rules: [D3](../docs/rules/data-honesty.md#d3), [D10](../docs/rules/data-honesty.md#d10), [P1](../docs/rules/process.md#p1).

## 2. Check the baseline

Bars and areas start at zero. A cropped line or scatter states why and shows the real domain.

Rules: [D4](../docs/rules/data-honesty.md#d4), [D5](../docs/rules/data-honesty.md#d5), [D11](../docs/rules/data-honesty.md#d11).

## 3. Check the denominator

A rate names its denominator. A place comparison names the population base.

Rules: [D7](../docs/rules/data-honesty.md#d7), [E7](../docs/rules/encoding.md#e7).

## 4. Check uncertainty and suppression

Published uncertainty is visible. Small cells are suppressed at the source threshold.

Rules: [D8](../docs/rules/data-honesty.md#d8), [D9](../docs/rules/data-honesty.md#d9).

## 5. Check missing data

A missing period is a gap or a dashed assumption, not a zero. Observations are marked apart from assumptions.

Rules: [D12](../docs/rules/data-honesty.md#d12), [S8](../docs/rules/states.md#s8).

## 6. Check the words

The title states the finding. The note explains how to read it. No causal claim appears without support.

Rules: [N1](../docs/rules/narrative.md#n1), [N2](../docs/rules/narrative.md#n2), [N4](../docs/rules/narrative.md#n4).
