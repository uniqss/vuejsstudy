import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  render: function (h) {
    return h(App)
  }
})


// 那么，是谁编译成的非template？
// 是由 vue-template-compiler  解析的
// 所以最终用的都是解析后的，没必要用runtime-compiler。直接用runtime-only就行了。

// runtime-only
// render => virtual dom = UI
