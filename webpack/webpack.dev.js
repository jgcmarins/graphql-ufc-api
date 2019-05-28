// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const WebpackNodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-extraneous-dependencies
const AutoReloadServerPlugin = require('auto-reload-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',
  watch: true,
  stats: 'errors-only',
  entry: {
    index: ['webpack/hot/poll?1000'],
  },
  externals: [
    WebpackNodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [
    new AutoReloadServerPlugin({
      filePath: 'dist/index.js',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
