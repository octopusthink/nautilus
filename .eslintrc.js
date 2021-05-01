module.exports = {
  extends: ['@octopusthink/eslint-config'],
  globals: {
    USE_ANALYTICS: false,
  },
  rules: {
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: ['styleguide/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': ['off'],
        'import/no-unresolved': ['off'],
        'jsx-a11y/anchor-is-valid': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/no-static-element-interactions': ['warn'],
        'react/forbid-prop-types': ['off'],
        'react/prop-types': ['off'],
        'react/require-default-props': ['off'],
      },
    },
  ],
  settings: {
    'import/ignore': ['utils/testing'],
  },
};
