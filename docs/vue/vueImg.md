### 图片优化技巧

>imagemin-webpack-plugin
``` js
// 安装
yarn add imagemin-webpack-plugin


// webpack配置
import ImageminPlugin from 'imagemin-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';

module.exports = {
  plugins: [
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 100,  // 压缩质量，推荐数值65-80
          progressive: true  // 是否将图片转换为渐进式图片
        })
      ]
    })
  ]
}
```  

>vue-view-lazy
``` js
// 安装
yarn add vue-view-lazy


// mian.js引入
import vView from 'vue-view-lazy'
Vue.use(vView,{
    error:'static/images/loading.png',
    loading:'static/images/loading.gif',
});
```  
``` js
// 懒加载图片 .vue文件
<template>
    <ul id='img'>
        <li class="in" v-for="(item,i) in imgs" :key="i">
            <img src="#" alt="图片" v-view-lazy="item.src">
        </li>
    </ul>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgs:[
          {src:'../../static/images/img1.jpg'},
          {src:'../../static/images/img2.png'},
          {src:'../../static/images/img2.jpg'},
          {src:'../../static/images/img3.jpg'},
          {src:'../../static/images/img4.jpg'},
          {src:'../../static/images/img5.jpeg'}
        ]
      }
    }
  }
</script>
```  
``` js
// 懒加载数据 .vue文件
<template>
  <div>
    <!--@model自定义事件是在该dom在第一次出现在视口内时触发的方法-->
    <!--v-view-lazy='method' 或 v-view-lazy='(e)=>method(e,...arg)'-->
    <div  class="cnt" v-for="(v,i) in msg" :key="i" v-view-lazy @model="(e)=>getAjaxContent(e,v.msg)">
      loading...
    </div>
    <div  class="cnt" v-for="(v,i) in msg" :key="i" v-view-lazy @model="getAjaxContent()">
      loading...
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:[]
      }
    },
    mounted(){
      fetch('http://localhost:3000/test').then(res=>res.json()).then(res=>{
          this.msg = res;
      })
    },
    methods:{
      getAjaxContent(event,msg){
          event.innerText = msg
      },
    }
  }
</script>
```  

参考: [一文带你解锁Web应用中的图片优化技巧！](https://mp.weixin.qq.com/s/HedCrnFQOSHLZuKqtDB3uA)  
参考: [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin)  
参考: [vue-view-lazy](https://gitee.com/cncgx/vue-view-lazy)