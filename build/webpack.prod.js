
const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')
module.exports = merge(common, {
  devtool: 'source-map',
  // wepback 4.0以上用这个指定生产环境
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MinifyPlugin({}, {
      sourceMap: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        comments: {
          name: 'comments',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
})