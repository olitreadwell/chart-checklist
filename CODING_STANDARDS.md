# Coding standards: chart-checklist

Project rules for this repo. The global baseline is `~/.agents/standards/CODING_STANDARDS.md` and applies unless this file adds a stricter rule. Read `AGENTS.md` for layout and scope.

## Stack

- Language: JavaScript ES modules on Node 22.12 or later.
- Package manager: npm.
- Test runner: Node's built-in test runner.
- Runtime app: none. The output is Markdown, JSON, and a small set of scripts.

## Commands

- Full gate: `npm run check`
- Tests: `npm test`
- Regenerate derived files: `npm run generate`
- Query the corpus: `npm run query -- --tier critical`

## Test-first

- Start with a failing test in `scripts/**/*.test.mjs` or a failing `npm run check`.
- Watch it fail for the right reason before changing the script or the rule data.
- Keep the validator tests strong. A rule contract without a rejection test is not protected.
- No test needed for a pure prose change. Say `no test: prose only` in the change.

## Generated files

Do not edit these by hand:

- `rules/rules.json`
- `docs/rules/*.md`
- `docs/sources.md`
- `checklists/*.md`
- The block between `<!-- rules-catalog:start -->` and `<!-- rules-catalog:end -->` in `README.md`

Edit the source data, then run `npm run generate`.

## Conventions

- Rule IDs use a category letter and a number, such as `D3`.
- Category letters are stable. Adding a category adds a new letter.
- Source keys are uppercase and stable.
- Export names use 2 to 3 domain words.
- One spelling per concept: use `colour` in prose and `color` only in code or a platform API.
- Test files sit beside their source and are named after it.

## Done when

`npm run check` passes, the corpus has no duplicate IDs or unknown sources, the generated files are current, and every changed rule has a failing test or a documented reason it has none.
