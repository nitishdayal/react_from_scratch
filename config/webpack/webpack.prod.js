'use strict';
const path = require('path')
const webpack = require('webpack')

const ChunkManifestWebpackPlugin = require('chunk-manifest-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const WPMerge = require('webpack-merge')

const base = require('./webpack.config')

const src = path.resolve('src')

module.exports = env => WPMerge(
  base(env),
  {
    devtool: 'source-map',
    entry: {
      main: path.join(src, 'main'),
      vendor: [
        'react',
        'react-dom',
        'react-router-dom'
      ]
    },
    output: {
      path: path.resolve('dist'),
      pathinfo: true,
      publicPath: '/',
      filename: 'static/js/[name].[chunkhash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        template: './index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new WebpackChunkHash(),
      new ChunkManifestWebpackPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest'
      }),
      new UglifyJSPlugin({
        beautify: false,
        compress: { screw_ie8: true, warnings: false },
        mangle: { screw_ie8: true },
        output: { comments: false, screw_ie8: true },
        comments: false
      })
    ]
  }
)
