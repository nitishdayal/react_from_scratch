'use strict';
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const CommonChunksPlugin = require('chunk-manifest-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = env => ({
  context: __dirname,
  devtool: env === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/main.tsx'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: 'source-map-loader',
            options: { enforce: 'pre' }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      appMountId: 'content'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new CommonChunksPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new UglifyJSPlugin(),
  ],
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js']
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 8080,
    watchContentBase: true
  }
})