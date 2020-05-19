const config = {
  comments: true,
  presets: [
    '@babel/preset-env',
    ['@babel/typescript', { allExtensions: true, isTSX: true }],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    'emotion',
  ],
};

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push('@babel/plugin-transform-react-jsx-source');
}

module.exports = config;
