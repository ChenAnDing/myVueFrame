import loadingCom from './loading.vue'

const loading = {}

loading.install = vue => {

  const Loading = vue.extend(loadingCom)
  const ins = new Loading()

  ins.vm = ins.$mount()

  document.body.appendChild(ins.vm.$el)

  vue.prototype.$loading = ins
}




export default loading