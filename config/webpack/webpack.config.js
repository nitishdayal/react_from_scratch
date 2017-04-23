'use strict';
const path = require('path')

const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.resolve('src')

module.exports = env => ({
  context: path.resolve('.'),
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(src, 'main'),
  output: {
    path: path.resolve('dist'),
    pathinfo: true,
    publicPath: '/',
    filename: 'static/js/bundle.js'
  },
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
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js']
  }
})
