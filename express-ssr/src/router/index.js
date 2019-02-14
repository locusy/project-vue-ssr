var vueRouter = require('vue-router')
var Vue = require('vue')

Vue.use(vueRouter)

// 每次请求都是新的router
module.exports = () => {
  return new vueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: {
          template: `
          <div>这是首页</div>
        `
        }
      },
      {
        path: '/about',
        name: 'about',
        component: {
          template: `
          <div>这是关于我</div>
        `
        }
      }
    ]
  })
}