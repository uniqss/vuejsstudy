<!--9.抽到Vue的component里面-->
<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn/>
  </div>
</template>

<script>
//<!-- 如果在webpack.config.js 里面配置了 extensions: ['.js', '.css', '.vue'], 就可以-->
import Cpn from './Cpn.vue'

export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'hello webpack',
      name: 'uniqs',
    }
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>