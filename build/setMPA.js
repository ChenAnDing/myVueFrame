/**
 * 多页面打包规则，有需求直接引入到common中，使用entry并把htmlWebpackPlugin加入到plugins
 */

const Glob  = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const setMPA = () => {
    const entry = {}
    const htmlWebpackPlugin = []
    
    const entryFiles = Glob.sync(path.resolve(__dirname, '../src/views/*/index.vue'))
  
    entryFiles.map((entryFile) => {
      console.log(entryFile)
      const match = entryFile.match(/src\/views\/(.*)\/index\.vue/)
  
      const pageName = match && match[1]
  
      entry[pageName] = entryFile
  
      htmlWebpackPlugin.push(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `../src/views/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ['index'],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      }))
  
      // console.log(pageName, 123123123)
    })
  
    // console.log(entryFiles, 'entryFiles')
  
    return {
      entry,
      htmlWebpackPlugin
    }
  }

  module.exports = setMPA