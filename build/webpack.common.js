
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssAndScssLoader = require('./cssAndScssLoader')
const webpack = require('webpack')
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
      {
        test: /\.(sa|sc|c)ss$/,
        use: cssAndScssLoader
      },
      {
        test: /\.(png|jpe?g|svg|gif)?(\?\S*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:8].[ext]'
        }
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
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      chunks: ['main','vendors'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    // 清除文件插件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new webpack.ProvidePlugin({
        _: 'lodash'
    }),
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