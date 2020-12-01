let name = 'xiaoming';

// var 也不会有冲突
var age = 18;
// export let flag = true;
let flag = true;

// export function sum(num1, num2) {
function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log('adfasdf');
}

// 1.导出方式一：
export {flag, sum}

// 2.导出方式二：
export var num1 = 1234;
export var height = 1.88;

// 3.导出函数和类
export function mul(num1, num2) {
  return num1 * num2;
}

// 5.export default
// const address = '北京市';
// export {
//   address
// }
// export const address = '北京市';

// const address = '北京市';
// export default同一个js文件(模块)里面，只能有一个!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export default导入时名字随便起
// export default address;

export default function(arg){
  console.log(arg);
}
