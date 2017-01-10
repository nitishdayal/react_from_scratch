'use strict';

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = env => {
  return {
    context: path.resolve(__dirname, "src"),
    devtool: env === 'prod' ? 'source-map' : 'cheap-module-eval-source-map',
    entry: {
      main: './main.tsx',
      vendor: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: './dist',
      filename: '[chunkhash].[name].js',
    },
    plugins: [
      new DashboardPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        template: "../index.html",
        appMountId: 'content'
      })
    ],
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: path.resolve(__dirname, "src"),
          options: {
            preLoaders: 'source-map-loader',
          },
          loader: 'awesome-typescript-loader'
        }
      ] 
    },
    resolve: {
      extensions: ['.webpack.js','.ts', '.tsx', '.js']
    }
  }
}