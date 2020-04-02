# myVueFrame
# 作者: 陈安顶<853083255@qq.com>

启动流程:
1,跑 npm i 安装依赖
2.跑 npm run dev 启动

写CSS时,可以根据屏幕为750的UI图去写,单位直接写rpx就可以全局自适应.


ENV: 全局的API环境, 可以全局使用this.ENV调用

Store: 可以直接使用this.$store调用VUEX

EventBus: 可以使用this.$bus.$on和this.$bus.$emit调用事件巴士

axios: 使用this.$axios调用axios请求接口


toast: 可直接this.$toast('hello world')调用, 默认显示时间为2秒
也可以:   
this.$toast({
  title: '操作成功',
  duration: 2000,
  success: function () {

  },
  close: function () {

  }
})

loading: 可调用this.$loading.open()开启  this.$loading.close()关闭
如需改变文案,调用this.$loading.ope('改变的文案') 这里不建议改变长的文案,因为样式会乱,别人为什么,问就是懒



