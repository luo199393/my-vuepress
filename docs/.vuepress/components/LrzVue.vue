<template>
  <div class="lrz-vue">
    <el-upload 
      class="upload-demo" 
      style="display: inline-block;margin-right: 20px"
      action="" 
      drag 
      :show-file-list="false" 
      :before-upload="beforeAvatarUpload"
      :http-request="fileRequest">
        <img v-if="img" :src="img" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <img v-if="img2" :src="img2" class="avatar" style="display: inline-block;">
    <el-slider v-model="options.quality" :step="0.1" :min="0.1" :max="1" @change="onImg"></el-slider>
  </div>
</template>

<script>
export default {
  name: "LrzVue",
  data() {
    return {
      img: "",
      img2: "",
      options: {
        width: "",
        height: "",
        quality: 0.7
      }
    }
  },
  methods: {
    // 上传按钮   限制图片大小
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error("只能上传jpg/png文件");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isJPG && isLt2M;
    },
    // 覆盖默认element上传,并转base64格式
    fileRequest(files) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(files.file);
      fileReader.onload = (e) => {
        this.img = e.target.result;
        this.img2 = e.target.result;
      }
    },
    // 点击压缩
    onImg() {
      if(this.img == '') {
        this.$message.error("请先上传图片");
        return;
      }
      let lrz = require("lrz");
      lrz(this.img,this.options)
        .then(rst => {
            // 处理成功会执行
            this.$message.success("压缩成功，目前图片大小为:" + rst.fileLen);
            this.img2 = rst.base64;
        })
        .catch(err =>{
            // 处理失败会执行
        })
        .always(() => {
            // 不管是成功失败，都会执行
        });
    }
  }
};
</script>

<style>
  .upload-demo .el-upload-dragger {
    height: 178px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    height: 178px;
    display: block;
  }
</style>