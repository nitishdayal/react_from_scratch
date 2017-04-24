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
        test: /\.ts(x?)$/,
        include: path.resolve('src'),
        use: [
          { loader: 'source-map-loader', options: { enforce: 'pre' } },
          { loader: 'ts-loader', options: { transpileOnly: true } }
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
