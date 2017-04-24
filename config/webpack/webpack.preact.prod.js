module.exports = env => {
  const conf = require('./webpack.prod')(env)

  conf.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }

  return conf
}