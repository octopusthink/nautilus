const path = require('path');

module.exports = {
  assetsDir: 'styleguide/assets',
  components: 'src/components/**/index.{js,jsx,ts,tsx}',
  ignore: ['src/components/index.js', '**/*.test.{js,jsx,ts,tsx}'],
  title: 'Nautilus Design System',
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'hotpink',
      base: '#fff',
      baseBackground: '#fff',
      codeBackground: '#000000',
    },
    borderRadius: 0,
    maxWidth: 960,
    sidebarWidth: 320,
  },
  styles: {
    StyleGuide: {
      '@global html': {
        fontSize: '62.5%',
      },
      '@global body': {
        fontSize: '1.6rem',
      },
      '@global img': {
        maxWidth: '100%',
      },
    },
  },
  // For a full list of available components we can override, see:
  // https://github.com/styleguidist/react-styleguidist/tree/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components
  styleguideComponents: {
    // TODO: Wrap these components somehow or have them ignore the extra props
    // sent to them by React Styleguidist to prevent the propTypes warnings
    // in the console.
    Heading: path.join(__dirname, 'src/components/Heading'),
    Para: path.join(__dirname, 'src/components/Paragraph'),
    // This wraps all actual page content in a `<Nautilus />` provider so
    // the content we output from Markdown has a theme available.
    StyleGuideRenderer: path.join(
      __dirname,
      'styleguide/components/StyleGuideRenderer',
    ),
    // Wraps the example components in a `<Nautilus />` provider to ensure they
    // have a theme loaded.
    Wrapper: path.join(__dirname, 'src/components/Nautilus'),
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
      ],
      sectionDepth: 2,
    },
    {
      name: 'Function',
      content: 'styleguide/docs/function.md',
      sectionDepth: 3,
      sections: [
        {
          name: 'Components',
          components: 'src/components/**/index.{js,jsx,ts,tsx}',
          content: 'styleguide/docs/components.md',
        },
      ],
    },
    {
      name: 'Form',
      content: 'styleguide/docs/form.md',
      sections: [],
      sectionDepth: 3,
    },
  ],
};
