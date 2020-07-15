
const common = require('./webpack.common')
const merge = require('webpack-merge')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = merge(common, {
  devtool: 'source-map',
  // wepback 4.0以上用这个指定生产环境
  mode: 'production',
  plugins: [
    new MinifyPlugin({}, {
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.(sa|sc|c)ss$/g,
      cssProcessor: require('cssnano')
    })
  ],
  optimization: {
      splitChunks: {
          chunks: "async",
          minSize: 30000, // 模块的最小体积
          minChunks: 1, // 模块的最小被引用次数
          maxAsyncRequests: 5, // 按需加载的最大并行请求数
          maxInitialRequests: 3, // 一个入口最大并行请求数
          automaticNameDelimiter: '~', // 文件名的连接符
          name: true,
          cacheGroups: { // 缓存组
              vendors: {
                  test: /vue/,
                  name: 'vendors',
                  chunks: 'all'
              },
              default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true
              }
          }
      }
  }
})