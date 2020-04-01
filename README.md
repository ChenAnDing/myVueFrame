# myVueFrame


启动流程:
1,跑 npm i 安装依赖
2.跑 npm run dev 启动

写CSS时,可以根据屏幕为750的UI图去写,单位直接写rpx就可以全局自适应.


ENV: 全局的API环境, 可以全局使用this.ENV调用

Store: 可以直接使用this.$store调用VUEX

EventBus: 可以使用this.$bus.$on和this.$bus.$emit调用事件巴士

axios: 使用this.$axios调用axios请求接口



