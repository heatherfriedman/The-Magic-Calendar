const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
    publicPath: '/build/',
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          //create style nodes from JS strings
          'style-loader',
          //Translates CSS into CommonJS
          'css-loader',
          //Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
