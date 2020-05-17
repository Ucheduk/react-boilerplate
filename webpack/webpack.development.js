const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { appDirectory } = require('./filePaths');

module.exports = {
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: appDirectory,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
    stats: 'minimal',
  },
  plugins: [new ErrorOverlayPlugin()],
};
