// let presentEnv = '@babel/preset-env';
// if (process.env.NODE_ENV === 'test') {
//   presentEnv = ['@babel/preset-env', { modules: false }];
// }

const config = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
  ],
};

// if (
//   process.env.NODE_ENV === 'development' ||
//   process.env.NODE_ENV === 'test'
// ) {
//   config.plugins.push('@babel/plugin-transform-react-jsx-source');
// }

// if (process.env.NODE_ENV === 'test') {
//   config.plugins.push('@babel/plugin-transform-modules-commonjs');
// }

// if (process.env.NODE_ENV === 'production') {
//   config.plugins.push('babel-plugin-transform-react-remove-prop-types');
// }

module.exports = config;
