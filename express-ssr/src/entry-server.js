// 服务端这边，需要把访问的路径给到vue-router

const createApp = require('./app.js');


// 外面的express服务使用  {url: / /about}
module.exports = (context) => {
  return new Promise((resolve,reject) => {

    let { app, router } = createApp(context);
    console.log(context)
    router.push(context.url);

    router.onReady(() => {
      // 访问路径，可定匹配到组件
      let matchedCompoents = router.getMatchedComponents();
      console.log(matchedCompoents)
      if (!matchedCompoents.length){
        return reject({code:404})
      }
      resolve(app)
    }, reject)

  })
}
