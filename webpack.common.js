const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
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
