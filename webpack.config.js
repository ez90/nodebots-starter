const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = "dist";

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  mode: 'development',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    watchContentBase: true,
  },
  optimization: {
    namedChunks: true,
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),
  ],
};
