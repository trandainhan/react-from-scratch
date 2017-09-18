const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const app = express();

app.use(express.static(__dirname + '/'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

const server = app.listen(3000, function () {
  console.log("Server has started at port 3000");
})
