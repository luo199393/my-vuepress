### Excel解析

>安装使用
``` js
// 安装依赖
yarn add xlsx
```

``` js
<template>
  <el-upload
    :show-file-list="false"
    class="import-excel flex"
    action=""
    :http-request="sendFile"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将excel文件拖到此处，或<em>点击上传</em></div>
  </el-upload>
</template>

<script>
import XLSX from "xlsx";

export default {
  name: "ImportExcel",
  data() {
    return {
      excelData: null
    };
  },
  methods: {
    // 文件上传
    sendFile(files) {
      let zzexcel;
      let f = files.file;
      let reader = new FileReader();
      // .csv读取乱码处理
      // FileReader共有4种读取方法：
      //   1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
      //   2.readAsBinaryString(file)：将文件读取为二进制字符串
      //   3.readAsDataURL(file)：将文件读取为Data URL
      //   4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'或者'gbk'等
      if (f.type.indexOf("csv") > -1) {
        reader.readAsText(f, "gbk");
      } else {
        reader.readAsBinaryString(f);
      }
      reader.onload = e => {
        let data = e.target.result;
        zzexcel = XLSX.read(data, {
          type: "binary"
        });
        this.excelData = XLSX.utils.sheet_to_json(
          zzexcel.Sheets[zzexcel.SheetNames[0]]
        );
        //结果输出
        this.$emit("excel", this.excelData);
        console.log("excel-data", this.excelData);
      };
    }
  }
};
</script>
``` 

参考: [js-xlsx](https://github.com/SheetJS/js-xlsx/tree/master/demos/vue)