import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 最好不要在这里写，放到App.vue里面会更好
// require('./assets/css/base.css')
