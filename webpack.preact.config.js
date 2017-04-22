const baseWebpackConf = require('./webpack.config');

module.exports = env => {
  const base = baseWebpackConf(env);

  base.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }

  return base;
}