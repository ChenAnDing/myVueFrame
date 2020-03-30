
const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 9999,
    contentBase: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify('development')
    })
  ]
})