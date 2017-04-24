'use strict';
const WPMerge = require('webpack-merge')
const WebpackDashboard = require('webpack-dashboard/plugin')
const path = require('path')

const base = require('./webpack.config')
const src = path.resolve('src')

module.exports = env => WPMerge(
  base(env),
  {
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(src, 'main'),
    output: {
      path: path.resolve('dist'),
      pathinfo: true,
      publicPath: '/',
      filename: 'static/js/bundle.js'
    },
    plugins: [
      new WebpackDashboard()
    ],
    devServer: {
      contentBase: path.resolve('src'),
      compress: true,
      historyApiFallback: true,
      overlay: true,
      port: 8080,
      publicPath: '/',
      watchContentBase: true
    }
  }
)
