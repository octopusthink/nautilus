const path = require('path');

module.exports = {
  components: 'src/components/**/index.{js,jsx,ts,tsx}',
  ignore: ['src/components/index.js', '**/*.test.{js,jsx,ts,tsx}'],
  title: '🦑 Nautilus Design System',
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
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
  },
  styleguideDir: 'dist/styleguide',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'src/styleguide/docs/introduction.md',
    },
    {
      name: 'Foundation',
      content: 'src/styleguide/docs/foundation.md',
      sections: [
        {
          name: 'Principles',
          description: 'Overall principles to shape design decisions.',
        },
      ],
      sectionDepth: 2,
    },
    {
      name: 'Function',
      content: 'src/styleguide/docs/function.md',
      sectionDepth: 3,
      sections: [
        {
          name: 'Components',
          components: 'src/components/**/index.{js,jsx,ts,tsx}',
          content: 'src/styleguide/docs/components.md',
        },
      ],
    },
    {
      name: 'Form',
      content: 'src/styleguide/docs/form.md',
      sections: [],
      sectionDepth: 3,
    },
  ],
};
