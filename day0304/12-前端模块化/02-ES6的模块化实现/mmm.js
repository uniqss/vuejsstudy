import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才，哈哈哈哈');
}

import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

import {mul, Person} from './aaa.js';

console.log(mul(30, 50));

const p = new Person();
p.run();

import addr from "./aaa.js";

// console.log(addr);

console.log(addr('你好啊'));

// 统一全部导入
import * as info from "./aaa.js";

console.log(info.num1);
