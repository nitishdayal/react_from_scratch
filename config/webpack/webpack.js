'use strict';
const path = require('path')

const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.resolve('src')

module.exports = env => ({
  context: path.resolve('.'),
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'source-map-loader', options: { enforce: 'pre' } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js']
  }
})
