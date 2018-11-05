const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),
  ],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'app.js',
  },
};
