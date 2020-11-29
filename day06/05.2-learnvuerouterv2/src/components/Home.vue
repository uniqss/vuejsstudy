<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈哈</p>

    <!--    要显示子路由，必须在首页里面加入 router-view 还有 router-link -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

    <h2>{{message}}</h2>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好啊',
      path: '/home/news',
    }
  },
  created() {
    console.log('home created');

    // 这样不行，首次打开页面OK，但是切其他标签再回来就没有了
    // this.$router.push({path:'/home/news'})
    document.title = '首页'
  },
  destroyed() {
    console.log('home destroyed');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },

  // activated和deactivated只有该组件被标识keep-alive时，才有效
  activated() {
    console.log('activated');
    this.$router.push(this.path)
  },
  // 这个函数执行的太晚了。思路是对的，但是拿到的path已经过时了
  // deactivated() {
  //   console.log(this.$route.path);
  //   this.path = this.$route.path;
  //   console.log('deactivated');
  // },
  // 这里才是对的
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>
