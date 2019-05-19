const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(fs.realpathSync(process.cwd()), 'src');

module.exports = {
  module: {
    rules: [
      // Transform ES6 with Babel
      {
        test: /\.(js|jsx|mjs)$/,
        include: [srcPath],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: true,
              cacheDirectory: true,
              presets: [],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // Add src/ folder for easier includes within the project.
    modules: [srcPath, 'node_modules'],
    extensions: ['.mjs', '.jsx', '.js', '.json'],
    alias: {
      // This is required so symlinks work during development.
      // 'webpack/hot/poll': require.resolve('webpack/hot/poll'),
      // Support React Native Web
      // 'react-native': 'react-native-web',
      // Alias react-testing-library to our own, patched version with
      // a custom render function that includes our needed providers.
      // 'react-testing-library': require.resolve('./utils/tests.js'),
    },
  },
};
