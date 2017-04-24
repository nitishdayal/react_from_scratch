const webpack = require('webpack')

module.exports = env => {
  const conf = require('./webpack.config.dev')(env)

  conf.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }

  conf.plugins = [
    ...conf.plugins,
    new webpack.DefinePlugin({
      'preact': true
    })
  ]

  return conf
}