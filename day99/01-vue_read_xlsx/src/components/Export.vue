<template>
  <div>
    <label>
      <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
    </label>
    <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file"
                                                                                 v-on:click="removeFile( key )">Remove</span>
    </div>
  </div>
</template>

<script>

import XLSX from 'xlsx';

export default {
  name: "Export",
  data() {
    return {
      files: [],
    }
  },
  methods: {
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (let i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      for (let uploadFile of uploadedFiles) {
        const f = uploadFile;
        const reader = new FileReader();
        reader.onload = e => {
          this.readerOnLoad(e)
        }
        reader.readAsArrayBuffer(f);
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    readerOnLoad(e) {
      let data = e.target.result;
      data = new Uint8Array(data);
      this.readOneXlsx(data);
    },
    readOneXlsx(data) {
      const workbook = XLSX.read(data, {
        type: "array"
      });

      for (let sheetName of workbook.SheetNames) {
        const sheet = workbook.Sheets[sheetName];
        this.readOneSheet(sheet, sheetName)
      }
    },
    readOneSheet(sheet, sheetName) {
      const json = XLSX.utils.sheet_to_json(sheet, {
        header: 1
      });
      console.log('sheetName:', sheetName,)
      console.log('json:', json);
    },
  },
}
</script>

<style scoped>

</style>
