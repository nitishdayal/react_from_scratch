const webpack = require('webpack')
const WPMerge = require('webpack-merge')

const baseConf = require('./webpack.dev')

module.exports = env => WPMerge(
  baseConf(env),
  {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          preact: true,
          NODE_ENV: `'develop'`
        }
      })
    ],
    resolve: {
      alias: {
        'preact-compat': 'preact-compat/dist/preact-compat.js',
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }
    }
  }
)
