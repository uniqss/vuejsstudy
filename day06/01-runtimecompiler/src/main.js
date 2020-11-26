// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 2.传入组件对象
const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 1.普通用法createElement('标签', {标签的属性}, ['内容'])
    // return createElement('h2',
    //   {class: 'box'},
    //   ['hello world', createElement('button', ['按钮'])])
    // 2.传入组件对象
    // return createElement(cpn)
    // 3.传入组件对象App
    return createElement(App)
  }
})

// runtime-compiler
// template => ast => render函数 => virtual dom => UI


// runtime-only
// render => virtual dom = UI

// runtime-only性能更高，省去了两个步骤 (template=>ast/ast=>render)

// runtime-compiler 需要最初vue的源代码更多
// runtime-only 需要的最初vue的源代码更少
