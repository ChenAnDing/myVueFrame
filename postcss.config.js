module.exports = {
  plugins: [
    // 兼容浏览器，添加前缀
    require('autoprefixer')({
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        'last 10 Chrome versions',
        'last 5 Firefox versions',
        'Safari >= 6', 
        //'last 10 versions', // 所有主流浏览器最近10版本用
    ],grid: true}),
    require('postcss-px2rem')({
      // UI稿的十分之一
      remUnit: 75,
      // px转为rem的时候小数点后面的位数
      remPrecision: 8
    })

  ]
}