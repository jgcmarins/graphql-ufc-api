// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const WebpackNodeExternals = require('webpack-node-externals');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'production',
  externals: [WebpackNodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
