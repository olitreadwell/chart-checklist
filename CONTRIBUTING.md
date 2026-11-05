# Contributing

This repo is a rule corpus. A useful change adds a check a reviewer can run, or fixes one that is unclear.

## Add or change a rule

1. Open the category file in `rules/data/`.
2. Add the rule with a stable ID, a tier, a check, a fix, at least one source, and the mechanisms that can prove it.
3. Add a source key to `rules/sources.mjs` when the source is new.
4. Add a related rule ID when the rule depends on another rule.
5. Run `npm run generate`.
6. Run `npm run check`.

## Rule quality

A good rule has one condition. A reviewer can mark it pass or fail without arguing about the wording. The fix names an action. The evidence can be produced by a test, a tool, a DOM check, or a recorded manual review.

Use a tier this way:

- `critical` means the reader cannot get the finding, or the chart makes a false claim.
- `required` means the chart is honest but still fails a reader.
- `recommended` means the fix helps and does not block release.

Do not add a rule for a general web concern. Link to the Front-End Checklist instead. Do not add a rule that repeats another rule in different words.

## Add a checklist

Edit `checklists/index.mjs`. Each step needs a title, a detail, and one or more rule IDs. Run `npm run generate` to write the Markdown. The validator rejects a missing or repeated rule ID.

## Writing

- Plain English, active voice, short sentences.
- No em dashes.
- No banned words from `~/.agents/standards/WRITING_STANDARDS.md`.
- Name the source, the action, and the evidence.
- Use `colour` in prose and `color` only in code or a platform API.

## Pull requests

Include the rule IDs you changed, the command you ran, and the result. If you changed a source, say which URL or page you checked. If you added a rule, say which failure it catches that the current rules miss.

## License

By contributing, you agree that your original text and code are MIT licensed. Do not paste text from a source that does not allow reuse. Link to it and adapt the concept instead.
