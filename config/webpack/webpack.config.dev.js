'use strict';
const WPMerge = require('webpack-merge')
const path = require('path')

const base = require('./webpack.config')
const src = path.resolve('src')

module.exports = env => WPMerge(
  base(env),
  {
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
