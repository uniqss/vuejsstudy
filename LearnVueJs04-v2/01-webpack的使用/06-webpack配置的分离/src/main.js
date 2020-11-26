// 1.使用CommonJs的模块化的规范
const {add, mul} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// webpack命令：
// webpack ./src/main.js ./dist/bundle.js

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.引入less文件
require('./css/special.less')

document.writeln('<h2>你好啊，李银河！</h2>');

// 5.使用vue进行开发
import Vue from 'vue'

// 9. 抽到Vue的component里面  这个需要配置vue的 loader
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<span>哈哈哈哈哈哈</span>');
