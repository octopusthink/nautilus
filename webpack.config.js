const fs = require('fs');
const path = require('path');

const projectPath = path.resolve(fs.realpathSync(process.cwd()), '.');
const srcPath = path.resolve(fs.realpathSync(process.cwd()), 'src');
const styleguidePath = path.resolve(fs.realpathSync(process.cwd()), 'styleguide');

module.exports = {
  module: {
    rules: [
      // Transform ES6 with Babel
      {
        test: /\.(js|jsx|mjs)$/,
        include: [srcPath, styleguidePath],
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
    modules: [srcPath, projectPath, 'node_modules'],
    extensions: ['.mjs', '.jsx', '.js', '.json'],
    alias: {
      // Support React Native Web
      // 'react-native': 'react-native-web',
    },
  },
};
