module.exports = env => {
  const baseConfig = require('./webpack.config')(env)

  baseConfig.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }

  return baseConfig
}