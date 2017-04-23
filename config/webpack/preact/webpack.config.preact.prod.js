const webpack = require('webpack')

module.exports = env => {
  const conf = require('../webpack.config.prod')(env)

  conf.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }

  conf.plugins = conf.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        preact: true
      }
    })
  )

  return conf
}