const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ['./src'],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: true,
    publicPath: "http://localhost:3000/dist/",
    port: 3000,
    hotOnly: true,
    hot: true,
    proxy: [{
      context: ['/auth/**', '/api/**'],
    }]
  }
});
