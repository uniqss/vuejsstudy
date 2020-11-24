const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name: '《unix编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1,
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1,
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1,
      },
    ],
  },
  computed: {
    totalPrice(){
      let total = 0;

      // for (let i=0;i < this.books.length;i++){
      //   total+=this.books[i].price * this.books[i].count;
      // }

      // for (let i in this.books){
      //   total += this.books[i].price * this.books[i].count;
      // }

      // for (let book of this.books){
      //   total += book.count * book.price;
      // }

      // reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.count * book.price;
      }, 0);

      // return total;
    },
  },
  methods: {
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      if (this.books[index].count > 1){
        this.books[index].count--;
      }
    },
    removeBook(index){
      this.books.splice(index, 1);
    },
    getFinalPrice(price){
      return '￥' + price.toFixed(2);
    },
  },
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2);
    },
  },
})


// 从写代码的方式，给计算机指令的方式分类，编程范式分为：命令式编程、声明式编程
// 编程范式：面向对象编程(第一公民：对象)、面向过程编程(函数式编程)(第一公民：函数)
// 数组的高阶操作:
const nums = [10, 20, 111, 222, 444, 40, 50];

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((prev, n) => prev + n);
console.log(total);

// let total = nums.filter(function (n){
//   return n < 100;
// }).map(function (n){
//   return n*2;
// }).reduce(function (preValue, n){
//   return preValue + n;
// }, 0);
// console.log(total);

//
// // 1.filter函数的使用
// // filter中的回调函数有一个要求：必须返回一个bool值
// let newNums = nums.filter(function (value, index){
//   return value < 100;
// });
// console.log(newNums);
//
// // 2.map函数的使用
// let new2Nums = newNums.map(function (n){
//   return n*2;
// })
// console.log(new2Nums);
//
// // 3.reduce函数的使用
// // 对数组中的所有元素进行汇总
// let new3Nums = new2Nums.reduce(function (preValue, n) {
//   return preValue + n;
// }, 0)
// console.log(new3Nums);

// let newNums = [];
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n);
//   }
// }
//
// console.log(newNums);
//
// let newNums2 = [];
// for (let n of newNums) {
//   newNums2.push(n * 2);
// }
//
// console.log(newnums2);
//
// let sum = 0;
// for (let n of newNums2){
//   sum += n;
// }
// console.log(sum);

