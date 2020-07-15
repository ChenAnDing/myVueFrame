
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rpxNumReg = /([+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?)rpx/g

const cssAndScssLoader = [
    // 这里要注意顺序,执行是从后到前,执行顺序要符合转化过程
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    {
        loader  : 'sass-loader',
        options : {
            // 在每个scss文件头部加入这个字符串,这里是导入common.scss问题
            // data : '@import "~@/assets/style/rem.scss";'
        }
    },
    //   {
    //     // 用户替换字符串,把数字+rpx的替换成rem(数字)
    //     loader: 'regexp-replace-loader',
    //     options: {
    //       match: {
    //         pattern: rpxNumReg.source,
    //         flags: rpxNumReg.flags
    //       },
    //       replaceWith: 'rem($1)'
    //     }
    //   },
    // 项目里单独增加一个.scss文件时是不能转为rem的，因为替换rpx的时候@import的文件未导入进去，
    // 这个时候可以加个sass-loader import文件进来再进行转换，但是会重复使用sass-loader,不是很建议使用
    // 可以约定只在vue文件的style中写scss语法，如果真的需要单独的scss，可以开启下面sass-loader
    // 'sass-loader'
]


module.exports = cssAndScssLoader

