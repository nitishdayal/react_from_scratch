const webpack = require('webpack')
const WPMerge = require('webpack-merge')

const baseConf = require('./webpack.prod')
module.exports = env => WPMerge(
  baseConf(env),
  {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          preact: true
        }
      })
    ],
    resolve: {
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }
    }
  }
)
