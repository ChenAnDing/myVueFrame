import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index'
import '@/assets/css/reset.css'

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

