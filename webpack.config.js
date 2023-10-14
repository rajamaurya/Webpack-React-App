const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Story Teller App',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '/*.js'),
      extensions: ['js'],
      emitError: true,
      emitWarning: true,
      failOnWarning: false,
      failOnError: false,
      // Toggle autofix
      fix: false,
      cache: false,
    }),
  ],
}
