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
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'hotpink',
    },
    sidebarWidth: 250,
  },
  styles: {
    StyleGuide: {
      '@global html': {
        fontSize: '62.5%',
      },
      '@global body': {
        fontSize: '1.6rem',
      },
    },
  },
  styleguideDir: 'demo',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Foundation',
      content: 'docs/foundation.md',
      sections: [
        {
          name: 'Principles',
          //content: 'docs/principles.md',
          description: 'Overall principles to shape design decisions.',
        },
        {
          name: 'Colour Palette',
          content: 'docs/colors.md',
          description: 'Nautilus provides a wide range of colours to use.',
        },
        {
          name: 'Typography Styles',
          content: 'docs/typography.md',
          description: 'Nautilus provides a library of type styles to use.',
        },
        {
          name: 'Spacing',
          content: 'docs/spacing.md',
          description: 'Nautilus uses an 8pt spacing system. Get out your calculator.',
        },
      ],
      sectionDepth: 2,
    },
    {
      name: 'Function',
      content: 'docs/function.md',
      sections: [
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
      sectionDepth: 3,
    },
    {
      name: 'Form',
      content: 'docs/form.md',
      sections: [
        {
          name: 'Colour Variables',
          content: 'docs/colorVariables.md',
          description: 'Colour variables are design tokens that can be overwritten by a brand in order to  theme the experience.',
        },
        {
          name: 'Typography Variables',
          content: 'docs/typographyVariables.md',
          description: 'Typography variables are design tokens that can be overwritten by a brand in order to  theme the experience.',
        },
      ],
      sectionDepth: 3,
    },
  ],
};
