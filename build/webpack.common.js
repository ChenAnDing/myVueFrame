
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 入口
  entry: {
    main: './src/main.js'
  },
  // 出
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  // 配置各种loader
  module: {
    rules: [
      { // 这里要注意顺序,执行是从后到前,执行顺序要符合转化过程
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      { // 同css
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)?(\?\S*)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 生成合同文件模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    // 清除文件插件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    // 匹配文件后缀,可以不写后缀直接匹配
    extensions: ['.js', '.css', '.vue', '.scss', '.json'],
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}