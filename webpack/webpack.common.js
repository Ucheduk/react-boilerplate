const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { appDirectory, buildDirectory } = require('./filePaths');

module.exports = {
  entry: {
    bundle: `${appDirectory}/index.js`,
  },
  output: {
    path: buildDirectory,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-arrow-functions',
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      '<src>': path.resolve(__dirname, '../src'),
      '<validations>': path.resolve(__dirname, '../src/validations'),
      '<pages>': path.resolve(__dirname, '../src/pages'),
      '<layout>': path.resolve(__dirname, '../src/components/layout'),
      '<components>': path.resolve(__dirname, '../src/components'),
      '<scss>': path.resolve(__dirname, '../src/assets/scss'),
      '<image>': path.resolve(__dirname, '../src/assets/images'),
      '<store>': path.resolve(__dirname, '../src/store'),
      '<helpers>': path.resolve(__dirname, '../src/helpers'),
      '<api>': path.resolve(__dirname, '../src/api'),
      '<hooks>': path.resolve(__dirname, '../src/hooks'),
    },
    extensions: [' ', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: `${appDirectory}/index.html`,
      filename: `${buildDirectory}/index.html`,
    }),
    new FaviconsWebpackPlugin(`${appDirectory}/assets/images/favicon.png`),
  ],
};
