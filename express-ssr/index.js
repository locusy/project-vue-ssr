const express = require('express');
const app = express();
const Vue = require('vue');
const path = require('path');
const vueServerRender = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(path.join(__dirname,"./index.html"),'utf-8')
})

const App = require('./src/entry-server.js')
app.get('*',async (req,res) => {

  
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;')


  let app = await App({url: req.url})
  console.log(123)
  vueServerRender.renderToString(app).then((html) => {
    console.log(html)
    res.end(html);
  }).catch(err => console.log(err))

  
})

app.listen(4000,()=>{
  console.log('启动成功')
})