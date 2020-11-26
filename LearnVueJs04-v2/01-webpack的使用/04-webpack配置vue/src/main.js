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

// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'askdlfjaslkdjf'
//   }
// })

// 6.实际开发中可以不用保存app。前面只是演示用，要在浏览器上修改 app.adsf = ...
// new Vue({
//   el: '#app',
//   template: `
//       <div>
//         <h2>{{message}}</h2>
//         <button @click="btnClick">按钮</button>
//         <h2>{{name}}</h2>
//       </div>
//   `,
//   data: {
//     message: 'askdlfjaslkdjf',
//     name:'qqqqq',
//   },
//   methods: {
//     btnClick() {
//       console.log('btnClick');
//     }
//   }
// })

// // 7.再抽一层
// const App = {
//   template: `
//       <div>
//         <h2>{{message}}</h2>
//         <button @click="btnClick">按钮</button>
//         <h2>{{name}}</h2>
//       </div>
//   `,
//   data() {
//     return {
//       message: 'askdlfjaslkdjf',
//       name:'qqqqq',
//     }
//   },
//   methods: {
//     btnClick() {
//       console.log('btnClick');
//     }
//   }
// }
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: {
//     App
//   }
// })

// // 8.再抽一层，添加 vue/app.js，并把 App= 后面一坨都放到 app.js 里面去 export default 一下，这边再import进来取名 App
// import App from './vue/app'
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: {
//     App
//   }
// })

// 9. 抽到Vue的component里面  这个需要配置vue的 loader
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})