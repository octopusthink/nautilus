const fs = require('fs');
const path = require('path');

const webpack = require('webpack');

const config = {
  entry: ['./src/index.js'],
  externals: ['@emotion/react', 'react', 'react-dom'],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      // Transform ES6 with Babel
      {
        test: /\.(js|jsx|mjs)$/,
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
  optimization: {
    minimize: false,
  },
  output: {
    globalObject: 'this',
    library: 'nautilus',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
      USE_ANALYTICS: JSON.stringify(process.env.NODE_ENV === 'production'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.jsx', '.js', '.json'],
  },
};

module.exports = config;
