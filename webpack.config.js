const fs = require('fs');
const path = require('path');

const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: ['./src/index.ts'],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      // Transform ES6 with Babel
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/,
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
  ],
  resolve: {
    extensions: ['tsx', 'ts', '.mjs', '.jsx', '.js', '.json'],
  },
};

if (process.env.NODE_ENV === 'production' && !process.env.DISABLE_PEER_DEPS_PLUGIN) {
  config.plugins.push(new PeerDepsExternalsPlugin());
}

module.exports = config;
