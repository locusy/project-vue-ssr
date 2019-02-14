const createApp = require('./app')

let {app,router} = createApp({})

router.onReady(() => {
  app.$mount('#app')
})

