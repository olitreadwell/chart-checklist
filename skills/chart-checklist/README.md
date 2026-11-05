# Chart Checklist skill

This folder is the installable skill. It ships two files:

- `SKILL.md` is the review workflow.
- `rules.json` is the rule corpus, generated from `rules/data/` in the repo.

Install it globally:

```sh
npx skills add olitreadwell/chart-checklist --skill chart-checklist -g -y
```

Install it in one project only:

```sh
npx skills add olitreadwell/chart-checklist --skill chart-checklist -y
```

If your AI builder does not support skills, use the repo quickstart instead:

https://github.com/olitreadwell/chart-checklist/blob/main/AI-BUILDER-QUICKSTART.md

The checklist is not a WCAG certification. It finds failures and records evidence.
