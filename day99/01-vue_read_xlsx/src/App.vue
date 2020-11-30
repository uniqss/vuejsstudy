/*
Let't start
1. Create a vue project with vue-cli
2. npm i xlsx
3. copy below code & paste to App.vue
4. npm run dev

Here are links that I referenced to make this code.
SheetJS: https://github.com/SheetJS/js-xlsx
Drop & Drag: https://codepen.io/Event_Horizon/pen/WodMjp
Youtube: https://www.youtube.com/watch?v=9hVO9-sSOVM&index=4&list=PLbu98QxRH81KRWDZQivl3Eb2E-oXIiy41

You can also see this code in my github
https://github.com/qkreltms/Simple_SheetJS_Example_With_VueJS

I hope it will help you!
*/

<template>
  <div id="app">
    <label>
      <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()" />
    </label>
    <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>
    <button v-on:click="addFiles()">Add Files</button>
    <hr/>
    <input type="file" id="xlsx_file" ref="xlsx_file" v-on:change="handlePrintXlsxData()" />
  </div>
</template>

<script>
import Vue from 'vue';
import XLSX from 'xlsx';

export default {
  data() {
    return {
      files: [],
      xlsx_file: []
    }
  },
  methods: {
    addFiles() {
      this.$refs.files.click();
    },

    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      var f = uploadedFiles[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = e.target.result;
        data = new Uint8Array(data);
        var workbook = XLSX.read(data, {
          type: "array"
        });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        //It will prints with header and contents ex) Name, Home...
        var json = XLSX.utils.sheet_to_json(worksheet, {
          header: 1
        });
        console.log('json is:')
        console.log(json);
      }
      console.log('reader.readAsArrayBuffer:')
      reader.readAsArrayBuffer(f);
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    handlePrintXlsxData(){
      console.log(this.$refs);
      let currentFile = this.$refs.xlsx_file.xlsx_file;

      console.log('currentFile:', currentFile)
      this.xlsx_file = currentFile;

      var f = currentFile[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = e.target.result;
        data = new Uint8Array(data);
        var workbook = XLSX.read(data, {
          type: "array"
        });

        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        var json = XLSX.utils.sheet_to_json(worksheet, {
          header: 1
        });
        console.log(json);
      }
      reader.readAsArrayBuffer(f);
    }
  }
}

</script>
