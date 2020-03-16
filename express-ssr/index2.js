const express = require('express');
const app = express();
const Vue = require('vue');
const vueServerRender = require('vue-server-renderer').createRenderer()

// 实例
const vueApp = new Vue({
  data:{
    message: 'hello,vue-ssr'
  },
  template: `
    <div>
      <h1>欢迎学习vue-ssr</h1>
      <p>{{message}}</p>
    </div>
  `
})

app.get('*',(req,res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;')

  vueServerRender.renderToString(vueApp).then((html) => {
    console.log(html)
    res.end(
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>vue-ssr</title>
      </head>
      <body>
        ${html}
      </body>
      </html>
      `
    );
  }).catch(err => console.log(err))

  
})

app.listen(4000,()=>{
  console.log('启动成功')
})