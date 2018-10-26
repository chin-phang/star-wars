const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/bundle.[name].js',
    chunkFilename: 'js/[name].bundle.js'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [

      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: "awesome-typescript-loader"
      },

      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      title: 'SW API'
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/images/favicon'),
        to: '/'
      }
    ])
  ],

  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
