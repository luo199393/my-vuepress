### 指定dom截图

<ClientOnly>
  <CanvasVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add html2canvas
```

``` js
<template>
  <div class="canvas-vue">
    <el-card id="text-canvas" class="car-demo" :body-style="{ padding: '0px' }">
      <!-- <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image"> -->
      <i class="el-icon-picture" style="font-size: 32px;"></i>
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">2019-01-01</time>
          <el-button type="text" class="button" @click="print">截图</el-button>
        </div>
      </div>
    </el-card>
    <img class="text-img block mt20" :src="output" />
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "CanvasVue",
  data: function() {
    return {
      output: null
    };
  },
  methods: {
    print() {
      html2canvas(document.getElementById("text-canvas")).then(canvas => {
        this.output = this.convertCanvasToImage(canvas);
      });
    },
    // 将canvas转为image
    convertCanvasToImage(canvas) {
      // 新Image对象，可以理解为DOM
      var image = new Image();
      // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
      // 指定格式 PNG
      image.src = canvas.toDataURL("image/png");
      return image.src;
    }
  }
};
</script>

<style scoped>
.car-demo {
  display: inline-block;
  text-align: center;
  width: 300px;
  margin-right: 20px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
} 
</style>
```
参考: [html2canvas](http://html2canvas.hertzen.com)