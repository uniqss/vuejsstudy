<template>
  <div>
    {{ xlsxName }}|{{ sheetName }}:{{ data }}
  </div>
</template>

<script>
export default {
  name: "Go",
  props: {
    path: String,
    xlsxName: {
      type: String,
    },
    sheetName: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  computed: {
    dataLen() {
      if (this.data.length > 3)
      return this.data[2].length
    },
  },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  beforeMount() {
    console.log('beforeMount');
  },
  // beforeCreate() {
  //   console.log('beforeCreate');
  // }
}
</script>

<style scoped>

</style>
