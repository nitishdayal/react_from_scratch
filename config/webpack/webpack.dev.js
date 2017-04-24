'use strict';
const WPMerge = require('webpack-merge')
const WebpackDashboard = require('webpack-dashboard/plugin')
const path = require('path')
const webpack = require('webpack')
const base = require('./webpack')

const src = path.resolve('src')
const main = path.join(src, 'main')

module.exports = env => WPMerge(
  base(env),
  {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      'app': [
        'react-hot-loader/patch',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',
        // Our app main entry
        main
      ]
    },
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
          include: src,
          use: [
            { loader: 'source-map-loader', options: { enforce: 'pre' } },
            { loader: 'ts-loader', options: { transpileOnly: true } },
            { loader: 'react-hot-loader/webpack' }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new WebpackDashboard(),
      new webpack.DefinePlugin({
        'process.env': {
          __REACT_HOT_LOADER__: true
        }
      }),
      new webpack.NamedModulesPlugin()
    ],
    devServer: {
      contentBase: path.resolve('src'),
      compress: true,
      historyApiFallback: true,
      overlay: true,
      port: 8080,
      hot: true,
      publicPath: '/',
      stats: {
        colors: true
      }
    }
  }
)
