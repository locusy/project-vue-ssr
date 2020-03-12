const Vue = require('vue');
const createRouter = require('./router');

// 实例 每次请求都会创建新的实例

module.exports = (context) => {

  const router = createRouter()
  
  const app = new Vue({
    router,
    data: {
      message: 'hello,vue-ssr',
      url: context.url
    },
    template: `
    <div>
      <h1>欢迎学习vue-ssr</h1>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about">关于我</router-link>
        </li>
      </ul>
      <p>{{message}}</p>
      <p>你访问的路径是:{{url}}</p>
      <router-view></router-view>
    </div>
  `
  })
  return {router,app}
  
}