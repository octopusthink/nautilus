const path = require('path');

module.exports = {
  assetsDir: 'styleguide/assets',
  ignore: ['src/components/index.js', '**/*.test.{js,jsx,ts,tsx}'],
  moduleAliases: {
    '@octopusthink/nautilus': path.resolve(__dirname, 'src/index'),
  },
  title: 'Nautilus Design System',
  skipComponentsWithoutExample: true,
  // For a full list of available components we can override, see:
  // https://github.com/styleguidist/react-styleguidist/tree/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components
  styleguideComponents: {
    CodeRenderer: path.join(__dirname, 'styleguide/components/Code'),
    ComponentsListRenderer: path.join(
      __dirname,
      'styleguide/components/ComponentsList',
    ),
    ExamplesRenderer: path.join(__dirname, 'styleguide/components/Content'),
    Heading: path.join(__dirname, 'styleguide/components/Heading'),
    ListRenderer: path.join(__dirname, 'styleguide/components/List'),
    Markdown: path.join(__dirname, 'styleguide/components/Markdown'),
    Para: path.join(__dirname, 'src/components/ui/Paragraph'),
    PathlineRenderer: path.join(__dirname, 'styleguide/components/Pathline'),
    PlaygroundRenderer: path.join(
      __dirname,
      'styleguide/components/Playground',
    ),
    PropsRenderer: path.join(__dirname, 'styleguide/components/Props'),
    'slots/CodeTabButton': path.join(
      __dirname,
      'styleguide/components/slots/CodeTabButton',
    ),
    'slots/UsageTabButton': path.join(
      __dirname,
      'styleguide/components/slots/UsageTabButton',
    ),
    // This wraps all actual page content in a `<Nautilus>` provider so
    // the content we output from Markdown has a theme available.
    StyleGuideRenderer: path.join(
      __dirname,
      'styleguide/components/StyleGuide',
    ),
    SectionHeadingRenderer: path.join(
      __dirname,
      'styleguide/components/SectionHeading',
    ),
    TabButtonRenderer: path.join(__dirname, 'styleguide/components/TabButton'),
    TableRenderer: path.join(__dirname, 'styleguide/components/Table'),
    TableOfContentsRenderer: path.join(
      __dirname,
      'styleguide/components/TableOfContents',
    ),
    TypeRenderer: path.join(__dirname, 'styleguide/components/PropType'),
    // Wraps the example components in a `<Nautilus>` provider to ensure they
    // have a theme loaded, and allows them to be custom-styled.
    Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
  },
  styleguideDir: 'dist/styleguide',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'styleguide/docs/introduction.md',
    },
    {
      name: 'Foundation',
      content: 'styleguide/docs/foundation.md',
      sections: [
        {
          name: 'Principles',
          content: 'styleguide/docs/principles.md',
        },
        {
          name: 'Typography',
          content: 'styleguide/docs/typography.md',
        },
        {
          name: 'Spacing',
          content: 'styleguide/docs/spacing.md',
        },
        {
          name: 'Colour',
          content: 'styleguide/docs/colour.md',
        },
      ],
      sectionDepth: 2,
    },
    {
      name: 'Function',
      content: 'styleguide/docs/function.md',
      sectionDepth: 3,
      sections: [
        {
          name: 'Higher-order components',
          components: 'src/components/hoc/**/index.{js,jsx,ts,tsx}',
          content: 'styleguide/docs/components/hoc.md',
        },
        {
          name: 'Inline text components',
          components: 'src/components/inline/**/index.{js,jsx,ts,tsx}',
          content: 'styleguide/docs/components/inline.md',
        },
        {
          name: 'UI Components',
          components: 'src/components/ui/**/index.{js,jsx,ts,tsx}',
          content: 'styleguide/docs/components/ui.md',
        },
      ],
    },
    {
      name: 'Form',
      content: 'styleguide/docs/form.md',
      sections: [],
      sectionDepth: 1,
    },
  ],
};
