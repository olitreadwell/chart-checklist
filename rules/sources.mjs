/**
 * Evidence and reference set for the checklist.
 *
 * Rules reference a source by key. The generated rules.json resolves each key
 * to the full record, so the corpus has one place to update a URL or title.
 */
export const SOURCES = {
  ONS: {
    title: 'ONS Service Manual: Data visualisation',
    url: 'https://service-manual.ons.gov.uk/data-visualisation',
  },
  ONS_AXES: {
    title: 'ONS: Axes and gridlines',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines',
  },
  ONS_TEXT: {
    title: 'ONS: Chart text',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/guidance/chart-text',
  },
  ONS_UNCERTAINTY: {
    title: 'ONS: Showing uncertainty in charts',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/guidance/showing-uncertainty-in-charts',
  },
  ONS_ANNOTATIONS: {
    title: 'ONS: Annotations',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/guidance/annotations',
  },
  ONS_INTERACTIVE: {
    title: 'ONS: Interactive charts and animations',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/guidance/interactive-charts-and-animations',
  },
  ONS_TYPES: {
    title: 'ONS: Choosing a chart type',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/chart-types/choosing-a-chart-type',
  },
  ONS_PIE: {
    title: 'ONS: Pie and doughnut charts',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/chart-types/pie-and-doughnut-charts',
  },
  ONS_STACKED: {
    title: 'ONS: Stacked bar charts',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/chart-types/stacked-bar-charts',
  },
  ONS_CLUSTERED: {
    title: 'ONS: Clustered bar charts',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/chart-types/clustered-bar-chart',
  },
  ONS_COLOURS: {
    title: 'ONS: Using colours in charts',
    url: 'https://service-manual.ons.gov.uk/data-visualisation/colours/using-colours-in-charts',
  },
  AF_CHARTS: {
    title: 'GOV.UK Analysis Function: Charts, a checklist',
    url: 'https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/',
  },
  AF_COLOURS: {
    title: 'GOV.UK Analysis Function: Data visualisation colours in charts',
    url: 'https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/',
  },
  AF_DISCLOSURE: {
    title: 'GOV.UK Analysis Function: Statistical disclosure control for tables',
    url: 'https://analysisfunction.civilservice.gov.uk/policy-store/statistical-disclosure-control-for-tables-produced-from-surveys/',
  },
  EVER: {
    title: 'Evergreen Data: Data Visualization Checklist',
    url: 'https://stephanieevergreen.com/wp-content/uploads/2024/08/Data-Viz-Checklist-2024.pdf',
  },
  FT: {
    title: 'FT Visual Vocabulary',
    url: 'https://ft-interactive.github.io/visual-vocabulary/',
  },
  D2V: {
    title: 'Data-to-Viz',
    url: 'https://www.data-to-viz.com/',
  },
  CHART: {
    title: 'Chartability',
    url: 'https://chartability.fizz.studio/',
  },
  CHART_WORKBOOK: {
    title: 'The Chartability Workbook',
    url: 'https://chartability.github.io/POUR-CAF/',
  },
  WCAG22: {
    title: 'Web Content Accessibility Guidelines 2.2',
    url: 'https://www.w3.org/TR/WCAG22/',
  },
  W3C_COMPLEX: {
    title: 'W3C: Complex images',
    url: 'https://www.w3.org/WAI/tutorials/images/complex/',
  },
  USWDS: {
    title: 'USWDS: Data visualizations',
    url: 'https://designsystem.digital.gov/components/data-visualizations/',
  },
  CM: {
    title: 'Cleveland and McGill: Graphical perception',
    url: 'https://doi.org/10.1080/01621459.1984.10478080',
  },
  WEISS: {
    title: 'Weissgerber et al.: Small-sample data visualisation',
    url: 'https://doi.org/10.1371/journal.pbio.1002128',
  },
  DW_ACCESSIBLE: {
    title: 'Datawrapper: Accessible charts, maps and tables',
    url: 'https://www.datawrapper.de/academy/how-we-make-sure-our-charts-maps-and-tables-are-accessible',
  },
  DW_ALT: {
    title: 'Datawrapper: Alternative descriptions for visualisations',
    url: 'https://www.datawrapper.de/academy/how-to-write-good-alternative-descriptions-for-your-data-visualization',
  },
  DW_COLOUR: {
    title: 'Datawrapper: Colours in data visualisation',
    url: 'https://www.datawrapper.de/blog/colors',
  },
  DW_MISSING: {
    title: 'Datawrapper: Missing data in line charts',
    url: 'https://www.datawrapper.de/academy/missing-data-in-line-charts',
  },
  DW_DARK: {
    title: 'Datawrapper: Dark mode in embedded visualisations',
    url: 'https://www.datawrapper.de/academy/dark-mode-in-embedded-datawrapper-visualizations',
  },
  AXE: {
    title: 'axe-core rule descriptions',
    url: 'https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md',
  },
  WEB_VITALS: {
    title: 'web.dev: Core Web Vitals',
    url: 'https://web.dev/articles/vitals',
  },
  LHCI: {
    title: 'Lighthouse CI configuration',
    url: 'https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md',
  },
  HIGHCHARTS: {
    title: 'Highcharts accessibility module',
    url: 'https://www.highcharts.com/docs/accessibility/accessibility-module',
  },
  BODYVISTA: {
    title: 'BodyVista: interactive 3D anatomy reference',
    url: 'https://freedomintelligence.github.io/BodyVista/',
  },
  BODYVISTA_REPO: {
    title: 'BodyVista repository',
    url: 'https://github.com/FreedomIntelligence/BodyVista',
  },
  FRONTEND: {
    title: 'Front-End Checklist',
    url: 'https://github.com/thedaviddias/front-end-checklist',
  },
  FRONTEND_PERF: {
    title: 'Front-End Performance Checklist',
    url: 'https://github.com/thedaviddias/Front-End-Performance-Checklist',
  },
  FRONTEND_DESIGN: {
    title: 'Front-End Design Checklist',
    url: 'https://github.com/thedaviddias/Front-End-Design-Checklist',
  },
  HOUSE: {
    title: 'Chart Checklist house rule',
    url: null,
    note: 'No external source. This checklist sets a project default.',
  },
};
