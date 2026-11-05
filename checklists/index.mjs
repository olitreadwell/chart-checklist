export const CHECKLISTS = [
  {
    slug: 'pre-publish',
    title: 'Before you publish',
    description: 'A short pass for a chart that is about to go on a public page.',
    time: '15 to 30 minutes',
    audience: 'Author, editor, or reviewing agent.',
    steps: [
      {
        title: 'Check the claim',
        detail: 'Read the page heading, the chart title, and the subtitle together. They must name the same measure, place, and period.',
        ruleIds: ['D1', 'N1', 'N5'],
      },
      {
        title: 'Check the source and the date',
        detail: 'Find the publisher, dataset, and as-of date without leaving the chart section.',
        ruleIds: ['D3', 'S6'],
      },
      {
        title: 'Check the encoding',
        detail: 'Name the relationship. Confirm the chart type and the zero baseline match it.',
        ruleIds: ['E1', 'D4', 'D6'],
      },
      {
        title: 'Check the reader path',
        detail: 'Read the chart with the keyboard and the data table. Every value must be reachable without a mouse.',
        ruleIds: ['A1', 'A3', 'A4'],
      },
      {
        title: 'Check the screen sizes',
        detail: 'Open the page at 320px, 768px, and 1280px. Look for clipped labels and horizontal scroll.',
        ruleIds: ['R1', 'R2'],
      },
      {
        title: 'Check the failure states',
        detail: 'Force an empty dataset, a single point, a flat series, and a fetch error. Each state must explain itself.',
        ruleIds: ['S1', 'S2', 'S3', 'S4'],
      },
    ],
  },
  {
    slug: 'data-honesty',
    title: 'Data honesty review',
    description: 'The checks that stop a chart from making a claim the data cannot support.',
    time: '20 to 40 minutes',
    audience: 'Analyst, editor, or reviewing agent.',
    steps: [
      {
        title: 'Trace the number',
        detail: 'Find the source row or query for the maximum, the minimum, and one middle value. Compare them with the chart.',
        ruleIds: ['D3', 'D10', 'P1'],
      },
      {
        title: 'Check the baseline',
        detail: 'Bars and areas start at zero. A cropped line or scatter states why and shows the real domain.',
        ruleIds: ['D4', 'D5', 'D11'],
      },
      {
        title: 'Check the denominator',
        detail: 'A rate names its denominator. A place comparison names the population base.',
        ruleIds: ['D7', 'E7'],
      },
      {
        title: 'Check uncertainty and suppression',
        detail: 'Published uncertainty is visible. Small cells are suppressed at the source threshold.',
        ruleIds: ['D8', 'D9'],
      },
      {
        title: 'Check missing data',
        detail: 'A missing period is a gap or a dashed assumption, not a zero. Observations are marked apart from assumptions.',
        ruleIds: ['D12', 'S8'],
      },
      {
        title: 'Check the words',
        detail: 'The title states the finding. The note explains how to read it. No causal claim appears without support.',
        ruleIds: ['N1', 'N2', 'N4'],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Chart accessibility review',
    description: 'The keyboard, screen-reader, contrast, and motion checks that apply to a chart.',
    time: '30 to 60 minutes',
    audience: 'Front-end developer or accessibility reviewer.',
    steps: [
      {
        title: 'Check the name and the table',
        detail: 'The chart has an image role, a name that states the finding, and a table with the same values and units.',
        ruleIds: ['A1', 'A2', 'A3'],
      },
      {
        title: 'Use only the keyboard',
        detail: 'Reach every control, keep focus visible, and leave every interaction without a trap.',
        ruleIds: ['A4', 'A5', 'A6'],
      },
      {
        title: 'Check the announcements',
        detail: 'Tooltips, loading, errors, and updates reach a live region. No value is hover-only.',
        ruleIds: ['A7', 'A10'],
      },
      {
        title: 'Check motion and focus control',
        detail: 'Reduced motion works. Autoplay over five seconds can be paused. Custom keys apply only while focused.',
        ruleIds: ['A8', 'A12'],
      },
      {
        title: 'Check dense data',
        detail: 'A chart over 50 marks has one tab stop and arrow-key detail. It does not put every mark in the tab order.',
        ruleIds: ['A13', 'E11'],
      },
      {
        title: 'Check colour and contrast',
        detail: 'Text and marks pass contrast, colour is not the only channel, and forced-colors keeps the chart readable.',
        ruleIds: ['C2', 'C3', 'C5', 'C9'],
      },
    ],
  },
  {
    slug: 'agent-review',
    title: 'Agent review workflow',
    description: 'A repeatable review for an AI agent with access to the source, the rendered page, or both.',
    time: '10 to 25 minutes',
    audience: 'AI coding or review agent.',
    steps: [
      {
        title: 'Locate the chart',
        detail: 'Find the page, component, data source, table, and test fixture. Name every path in the report.',
        ruleIds: ['P1'],
      },
      {
        title: 'Load the critical rules',
        detail: 'Run `node scripts/query-rules.mjs --tier critical --json` or read `rules/rules.json`. Review critical first.',
        ruleIds: ['P6'],
      },
      {
        title: 'Collect evidence',
        detail: 'Use the DOM, axe, a screenshot, the table, and the data. Do not mark a rule pass from source reading alone.',
        ruleIds: ['P3', 'P4'],
      },
      {
        title: 'Record every verdict',
        detail: 'Write pass, fail, or n/a with a reason and an evidence path. A blank row is a fail.',
        ruleIds: ['P5', 'P6'],
      },
      {
        title: 'Hand off general web issues',
        detail: 'Send page-shell, HTML, CSS, JS, SEO, security, and i18n issues to the Front-End Checklist. Keep shared chart tokens and chart lazy loading in this report.',
        ruleIds: ['C12', 'R5'],
      },
      {
        title: 'Report in severity order',
        detail: 'List critical, then required, then recommended. Give each finding a rule ID, evidence, and a concrete fix.',
        ruleIds: ['P4'],
      },
    ],
  },
  {
    slug: 'interactive-3d',
    title: 'Interactive and 3D review',
    description: 'Checks for scene viewers, layered explorers, and other spatial interfaces.',
    time: '30 to 60 minutes',
    audience: 'Interaction designer, front-end developer, or reviewing agent.',
    steps: [
      {
        title: 'Provide a non-visual route',
        detail: 'Every scene has a table, text summary, or 2D fallback with the same values and relationships.',
        ruleIds: ['I1', 'A3'],
      },
      {
        title: 'Provide a keyboard route',
        detail: 'Rotate, pan, zoom, select, and reset all work from the keyboard. No action is drag-only.',
        ruleIds: ['I2', 'A4'],
      },
      {
        title: 'Expose state',
        detail: 'Toggles, layers, and tools expose active state. The current view is described and can be reproduced.',
        ruleIds: ['I3', 'I4'],
      },
      {
        title: 'Respect motion and waiting',
        detail: 'Reduced motion stops camera drift. Loading is announced and the page stays usable.',
        ruleIds: ['I5', 'I6', 'A8'],
      },
      {
        title: 'Keep labels and controls usable',
        detail: 'Labels stay legible at every zoom and can be toggled. Layer and search controls have names and counts.',
        ruleIds: ['I7', 'I8'],
      },
      {
        title: 'Check orientation and budget',
        detail: 'A spatial view shows where the reader is. Measure frame time and asset weight on a mid-range device.',
        ruleIds: ['I9', 'I10'],
      },
    ],
  },
  {
    slug: 'map-review',
    title: 'Map review',
    description: 'Checks for choropleths, symbol maps, and other value-bearing maps.',
    time: '20 to 40 minutes',
    audience: 'Cartographer, analyst, or reviewing agent.',
    steps: [
      {
        title: 'Provide a text route',
        detail: 'A table or ranked list carries the same values. The map is not the only way in.',
        ruleIds: ['M1', 'M8'],
      },
      {
        title: 'State the geography',
        detail: 'Name the projection, extent, scale, boundary vintage, and source.',
        ruleIds: ['M2', 'M4'],
      },
      {
        title: 'Explain the encoding',
        detail: 'The legend names the colour or size encoding, its units, and its class breaks.',
        ruleIds: ['M3', 'C7'],
      },
      {
        title: 'Do not rely on colour',
        detail: 'Patterns, boundaries, labels, or values carry the class as well as colour.',
        ruleIds: ['M5', 'C5'],
      },
      {
        title: 'Separate missing from zero',
        detail: 'Missing or unreliable areas look different from a true zero and are named in the legend.',
        ruleIds: ['M6', 'S8'],
      },
      {
        title: 'Check keyboard navigation',
        detail: 'Zoom, pan, and reset work from the keyboard with no trap.',
        ruleIds: ['M7', 'A4'],
      },
    ],
  },
];
