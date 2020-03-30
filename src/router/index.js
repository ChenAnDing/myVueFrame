import VueRouter from 'vue-router'
import Vue from 'vue'

import demo from './modules/demo'

Vue.use(VueRouter)

const routes = [
  ...demo
]

const router = new VueRouter({
  routes
})

export default router