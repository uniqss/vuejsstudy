<template>
  <div>
    <h2>I'm Cpn's title</h2>
    <p>I'm Cpn's info, hahaha </p>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: 'Cpn components Name'
    }
  }
}
</script>

<style scoped>

</style>