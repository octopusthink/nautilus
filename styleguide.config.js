const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.{js,jsx,ts,tsx}', // skips index.js
  ignore: ['**/**/*.styles.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700',
        },
      ],
    },
  },
  styles: {
    StyleGuide: {
      '@global html': {
        fontSize: '10px',
      },
      '@global body': {
        fontSize: '1.4rem',
      },
    },
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, './styleguide-ui/StyleGuideHeader'),
  },
  styleguideDir: 'demo',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Colors',
      content: 'docs/colors.md',
      description: 'The Ether Color System',
    },
    {
      name: 'Color Variables',
      content: 'docs/colorVariables.md',
      description: 'Available Color Variables from the Ether Color System',
    },
    {
      name: 'Typography',
      content: 'docs/typography.md',
      description: 'Typography samples and variations',
    },
    {
      name: 'Spacing',
      content: 'docs/spacing.md',
      description: 'The Ether Spacing System',
    },
    {
      name: 'Input Components',
      components: 'src/components/input/**/[A-Z]*.{js,jsx}',
    },
    {
      name: 'Layout Components',
      components: 'src/components/layout/**/[A-Z]*.{js,jsx}',
    },
    {
      name: 'Typography Components',
      components: 'src/components/typography/**/[A-Z]*.{js,jsx}',
    },
  ],
};
