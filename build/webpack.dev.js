
const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')


module.exports = merge(common, {
  // wepback 4.0以上用这个指定开发环境
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    host: 'localhost',
    port: 9898,
    // hot: true,
    contentBase: path.resolve(__dirname, '../dist')
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
})