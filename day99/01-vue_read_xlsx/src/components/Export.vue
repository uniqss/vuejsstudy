<template>
  <div>

    <label>
      <input type="radio" id="go" value="go" v-model="mode">go
    </label>
    <label>
      <input type="radio" id="cpp" value="cpp" v-model="mode">cpp
    </label>
    <label>
      <input type="radio" id="lua" value="lua" v-model="mode">lua
    </label>
    <label>
      <input type="radio" id="js" value="js" v-model="mode">js
    </label>

    <label>
      <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
    </label>
    <!--    <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file"-->
    <!--                                                                                 v-on:click="removeFile( key )">Remove</span>-->
    <!--    </div>-->
    <div v-for="(data, key) in datas">
      <div v-if="mode === 'go'">
        <hr/>
        <go :xlsxName=xlsxnames[key] :sheetName="sheetnames[key]" :data="data"></go>
      </div>
      <div v-else-if="mode === 'cpp'">
        <hr/>
        <cpp-header :xlsxName=xlsxnames[key] :sheetName="sheetnames[key]" :data="data"></cpp-header>
        <cpp-cpp :xlsxName=xlsxnames[key] :sheetName="sheetnames[key]" :data="data"></cpp-cpp>
      </div>
    </div>
  </div>
</template>

<script>

import XLSX from 'xlsx';
import {readOneSheet} from '../commonlogicjs/commonlogic'
import Go from '@/templates/Go'
import CppHeader from "../templates/CppHeader";
import CppCpp from "../templates/CppCpp";

export default {
  name: "Export",
  data() {
    return {
      files: [],
      datas: [],
      sheetnames: [],
      xlsxnames: [],
      mode: 'cpp', // go/cpp/lua/js
    }
  },
  components: {
    Go,
    CppHeader, CppCpp,
  },
  methods: {
    clearData() {
      this.files.splice(0)
      this.datas.splice(0)
      this.sheetnames.splice(0)
      this.xlsxnames.splice(0)
    },
    handleFilesUpload() {
      this.clearData()
      let uploadedFiles = this.$refs.files.files;

      for (let i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      let idx = 0;
      for (let uploadFile of uploadedFiles) {
        const reader = new FileReader();
        reader.onload = ev => {
          let xlsxName = uploadFile.name
          this.readerOnLoad(ev, xlsxName, idx++)
        }
        reader.readAsArrayBuffer(uploadFile);
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    readerOnLoad(ev, xlsxName, idx) {
      let data = ev.target.result;
      data = new Uint8Array(data);
      this.readOneXlsx(data, xlsxName, idx, this);
    },
    readOneXlsx(data, xlsxName, idx, exportThis) {
      const workbook = XLSX.read(data, {
        type: "array"
      });

      for (let sheetName of workbook.SheetNames) {
        const sheet = workbook.Sheets[sheetName];
        readOneSheet(sheet, sheetName, xlsxName, idx, exportThis)
      }
    },

  },
}
</script>

<style scoped>

</style>
