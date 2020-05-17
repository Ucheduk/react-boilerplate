/* eslint-disable */
const dotenv = require('dotenv');
const webpackMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack/webpack.common');

dotenv.config();

module.exports = (env) => {
  let envConfiguration;
  !env.mode
    ? (envConfiguration = require('./webpack/webpack.development'))
    : (envConfiguration = require(`./webpack/webpack.${env.mode}`));

  return webpackMerge(
    { mode: env.mode },
    commonWebpackConfig,
    envConfiguration,
  );
};