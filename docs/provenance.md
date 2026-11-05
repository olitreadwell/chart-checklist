# Provenance

This checklist started as the chart quality work in the `open-data-stack` repository and the three open-data labs. The original material is still there, and the lab gates still use it.

## What came across

- The rubric categories D, E, C, A, R, S, N, and P, with their stable IDs.
- The Chartability mapping.
- The source inventory and the adaptation notes.
- The check mechanism vocabulary.
- The manual audit and verdict rules.

## What changed

- Lab-specific rules became project defaults. The registry, manifest, and baseline language now describes a generic chart inventory and audit trail.
- `E13` adds shared scales for small multiples.
- `R8` adds reading order when a chart stacks.
- `S8` separates no data, zero, and missing.
- Category I adds interactive and 3D checks, using BodyVista as a reference.
- Category M adds map and spatial checks.
- The Front-End Checklist and other checklists are linked from `other-checklists.md` and `frontend-handoff.md`.

## What stayed behind

The lab-specific file paths, the chart registry shape, the manifest fixture rules, the baseline JSON, and the hash sync across the three labs. Those belong to the labs, not to a general checklist.

The original rubric remains the source of the chart-specific rules. This repo is the public, general form.
