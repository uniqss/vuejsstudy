<template>
  <!--  <div id="app">-->
  <!--    <img src="./assets/logo.png">-->
  <!--    <router-view/>-->
  <!--    <div>this is App.vue</div>-->
  <!--  </div>-->

  <div id="app">
    <!--    router-link是一个默认的注册过的组件-->
    <!--    <router-link to="/home" tag="li" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button">关于</router-link>-->

    <!--    <router-link to="/home" tag="button" replace exact-active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace exact-active-class="active">关于</router-link>-->

    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--    <router-link :to="'/user/' + userId">用户</router-link>-->
    <!--&lt;!&ndash;    <router-link to="/profile">Profile</router-link>&ndash;&gt;-->
    <!--    <router-link :to="{path: '/profile', query: {name:'why', age:18, height: 1.88}}">-->
    <!--      档案</router-link>-->

    <button @click="btnClickUser">用户</button>
    <button @click="btnClickProfile">档案</button>

    <!--    注意这里一定不要加空格！！！！！！-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // this.$router.push('/home');
      this.$router.replace('/home');
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about');
      this.$router.replace('/about');
      console.log('aboutClick');
    },
    btnClickUser() {
      this.$router.push('/user/' + this.userId)
    },
    btnClickProfile() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.89
        }
      })
    }
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
.router-link-exact-active {
  color: #f00;
}

.active {
  color: #0f0;
}
</style>
