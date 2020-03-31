
const NODE_ENV = {
  production: 'production',
  development: 'development'
}[process.env.NODE_ENV] || 'development'



export default {
  // 这里可以根据不用的域名配置不同环境的API
  H5: {
    production: 'http://**',
    development: 'http://****'
  }[NODE_ENV]
}


