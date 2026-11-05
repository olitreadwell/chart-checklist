export const CATEGORIES = [
  {
    id: 'data-honesty',
    letter: 'D',
    title: 'Data honesty',
    order: 1,
    blurb: 'The number is what it says it is, and the reader can tell where it came from.',
  },
  {
    id: 'encoding',
    letter: 'E',
    title: 'Encoding and chart choice',
    order: 2,
    blurb: 'The mark matches the relationship, and the chart does not hide a simpler reading.',
  },
  {
    id: 'colour',
    letter: 'C',
    title: 'Colour and legibility',
    order: 3,
    blurb: 'Colour carries meaning without becoming the only carrier, in light and dark mode.',
  },
  {
    id: 'accessibility',
    letter: 'A',
    title: 'Accessibility',
    order: 4,
    blurb: 'A screen reader, keyboard, or low-vision reader can reach the same finding.',
  },
  {
    id: 'layout',
    letter: 'R',
    title: 'Layout and responsiveness',
    order: 5,
    blurb: 'The chart survives narrow screens, zoom, loading, and print without losing labels.',
  },
  {
    id: 'states',
    letter: 'S',
    title: 'States and failure',
    order: 6,
    blurb: 'Empty, partial, stale, flat, and broken data each get a state a reader can understand.',
  },
  {
    id: 'narrative',
    letter: 'N',
    title: 'Narrative and context',
    order: 7,
    blurb: 'The title, note, and surrounding text state the finding and the limits of the data.',
  },
  {
    id: 'interaction',
    letter: 'I',
    title: 'Interaction, animation and 3D',
    order: 8,
    blurb: 'Exploratory views stay operable, understandable, and still when the reader asks.',
  },
  {
    id: 'maps',
    letter: 'M',
    title: 'Maps and spatial views',
    order: 9,
    blurb: 'Geography carries values without hiding scale, vintage, coverage, or missing areas.',
  },
  {
    id: 'process',
    letter: 'P',
    title: 'Process and delivery',
    order: 10,
    blurb: 'Every chart has an owner, an evidence trail, and a check that runs before release.',
  },
];

export const CATEGORY_BY_ID = new Map(CATEGORIES.map((category) => [category.id, category]));
