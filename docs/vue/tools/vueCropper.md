### 图片裁剪

<ClientOnly>
  <CropperVue/>  
</ClientOnly> 

>安装使用
``` js
// main.js
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
```

``` js
// yarn add wangeditor

<template>
  <vueCropper
    ref="cropper"
    :img="option.img"
    :outputSize="option.size"
    :outputType="option.outputType"
    :info="true"
    :full="option.full"
    :canMove="option.canMove"
    :canMoveBox="option.canMoveBox"
    :original="option.original"
    :autoCrop="option.autoCrop"
    :fixed="option.fixed"
    :fixedNumber="option.fixedNumber"
    :centerBox="option.centerBox"
    :infoTrue="option.infoTrue"
    :fixedBox="option.fixedBox"
    :autoCropWidth="option.autoCropWidth"
    :autoCropHeight="option.autoCropHeight"
  ></vueCropper>
</template>

<script>
export default {
  name: "CropperVue",
  data() {
    return {
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 178, // 默认生成截图框宽度
        autoCropHeight: 178, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: false, // 是否开启截图框宽高固定比例
        // fixedNumber: [3, 2], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      imageUrl: ""
    };
  },
  methods: {
    // 获取裁剪图片base64
    finish() {
      this.$refs.cropper.getCropBlob((data) => {
        var a = new FileReader();
        a.onload = (e) => { 
          this.imageUrl = e.target.result;
          this.dialogVisible = false;
        }
        a.readAsDataURL(data);
      })
    }
  }
};
</script>
```
参考: [vue-cropper](https://www.jianshu.com/p/85a52da879bb)