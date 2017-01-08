'use strict';

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
      })
    ],
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        exclude: '/node_modules/',
        loader: 'awesome-typescript-loader'
      },{
        test: /\.html$/,
        exclude: '/node_modules/',
        loader: 'html-loader'
      }]
    },
    devtool: "cheap-module-eval-source-map",
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.html']
    }
  }
}