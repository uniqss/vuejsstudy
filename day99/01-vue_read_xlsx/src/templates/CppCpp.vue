<template>
  <div>
    {{ xlsxName }}|{{ sheetName }}:{{ data }}
  </div>
</template>

<script>
export default {
  name: "CppCpp",
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
  beforeMount() {
    console.log('beforeMount');
  },
}
</script>

<style scoped>

</style>
