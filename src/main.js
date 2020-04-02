import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/vuex/index'
import ENV from '@/config/env'
import '@/plugins/index.js'
import '@/assets/style/reset.scss'
import './utils/EventBus'
import '@/config/axios'

/**
 * 注册全局配置
 */
Vue.mixin({
  data() {
    return {
      ENV
    }
  },
})


router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

