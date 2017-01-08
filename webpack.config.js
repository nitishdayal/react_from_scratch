'use strict';

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx"
  },
  output: {
    path: "./dist",
    filename: '[chunkhash].[name].js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    },{
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      appMountId: 'content'
    })
  ],
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}