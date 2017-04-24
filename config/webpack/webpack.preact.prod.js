const webpack = require('webpack')

module.exports = env => {
  const conf = require('./webpack.prod')(env)

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
