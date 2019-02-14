const express = require('express');
const app = express();
const Vue = require('vue');
const path = require('path');
const vueServerRender = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(path.join(__dirname,"./index.html"),'utf-8')
})


app.get('*',(req,res) => {

  
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;')


  // 实例 每次请求都会创建新的实例
  const vueApp = new Vue({
    data: {
      message: 'hello,vue-ssr',
      url: req.url
    },
    template: `
    <div>
      <h1>欢迎学习vue-ssr</h1>
      <p>{{message}}</p>
      <p>你访问的路径是:{{url}}</p>
    </div>
  `
  })

  vueServerRender.renderToString(vueApp).then((html) => {
    console.log(html)
    res.end(html);
  }).catch(err => console.log(err))

  
})

app.listen(4000,()=>{
  console.log('启动成功')
})