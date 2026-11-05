# LinkedIn post: Chart Checklist

Status: draft, not published.

## Post

```text
I have shipped open data sites for Aotearoa New Zealand, the UK, and the USA. The charts were the part I kept getting wrong.

These days I lean on AI skills and checklists to keep the work honest. The Front-End Checklist from @David Dias has been the model: clear rules, stable IDs, and instructions an agent can follow. His performance and design checklists are built the same way.

I have also learned a lot from @Frank Elavsky's Chartability, @Stephanie Evergreen's Data Visualization Checklist, and @Lisa Charlotte Muth's Datawrapper Academy work. They cover what a generic front-end checklist cannot: whether the chart is honest, whether the encoding fits the question, and whether colour is doing too much.

I could not find a chart checklist built for agents from the start. So I wrote one, using those resources and the shape of David's project. Chart Checklist has 96 rules across 10 categories, with plain JSON, a query CLI, an agent skill, and a report that forces a pass, fail, or n/a for every rule.

It has already caught three things I kept getting wrong: charts without a source date (D3), tables that had drifted from the chart (A3), and series that relied on colour alone (C5).

It also hands page-level issues to the Front-End Checklist and accessibility checkers, so the chart rules stay chart-specific.

If your AI tool supports skills, the install is one line. If it does not, there is a paste-ready prompt.

I would love you to try it and tell me what is missing. Issues and pull requests are open. Link in comments.

#dataviz #a11y #opendata
```

## Tags to select

LinkedIn mentions need to be picked from the dropdown. The `@Name` text above is only a placeholder until you select the profile.

- David Dias
https://www.linkedin.com/in/thedaviddias/

- Frank Elavsky
https://www.linkedin.com/in/elavsky/

- Stephanie Evergreen
https://www.linkedin.com/in/stephanieevergreen

- Lisa Charlotte Muth
https://www.linkedin.com/in/lisacmuth/

## First comment

```text
Chart Checklist: https://github.com/olitreadwell/chart-checklist
```

## Notes

- The post is 267 words and 1,565 characters.
- The three rule examples are D3, A3, and C5. Swap them if your actual fixes were different.
- Keep the repo link in the first comment. External links in the post body reduce distribution.
