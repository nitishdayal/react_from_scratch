module.exports = env => {
  const conf = require('./webpack.config.prod')(env)

  conf.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }

  return conf
}