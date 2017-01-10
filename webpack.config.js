'use strict';

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = function (env) {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      main: "./main.tsx",
      vendor: [
        "react",
        "react-dom"
      ]
    },
    output: {
      path: './dist',
      filename: '[chunkhash].[name].js',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        template: "../index.html",
        appMountId: 'content'
      }),
      new DashboardPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: '/node_modules/',
          loader: 'awesome-typescript-loader'
        }
      ], 
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.html']
    }
  }
}