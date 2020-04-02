import toastCom from './toast.vue'

const toastOut = {}
toastOut.install = vue=> {
  // 创建Toast实例,此时数据还没有挂载呢，$el 属性目前不可见，无法访问到数据和真实的dom
  const Toast = vue.extend(toastCom)
  const ins = new Toast()

  //手动地挂载一个未挂载的实例。$mount(param)中param不存在时，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
  ins.vm = ins.$mount()

  //用原生DOM API把它插入body中
  document.body.appendChild(ins.vm.$el)

  vue.prototype.$toast = ins.showToast

}

export default toastOut