const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          'resolve-url-loader',
          'sass-loader'
        ]
      }
    ]
  },

  mode: 'development',

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    compress: true
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
});

module.exports = devWebpackConfig;
