const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodWebpackConfig = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js'
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'resolve-url-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  mode: 'production',

  devtool: "source-map",

  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css"
    })
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});

module.exports = prodWebpackConfig;
