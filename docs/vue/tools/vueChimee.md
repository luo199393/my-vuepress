### H5播放器

<!-- <ClientOnly>
  <ChimeeVue/>  
</ClientOnly>  -->

>安装使用
``` js
yarn add chimee
// 需要播放 flv 或者 hls 格式
yarn add chimee-kernel-flv
yarn add chimee-kernel-hls
```

``` js
<template>
  <div class="chimee-vue">
    <div id="wrapper"></div>
  </div>
</template>

<script>
import Chimee from 'chimee';
import flv from 'chimee-kernel-flv';
import hls from 'chimee-kernel-hls';

export default {
  name: "ChimeeVue",
  mounted() {
    creatVideo();
  },
  methods: {
    // 播放
    creatVideo() {
      const chimee = new Chimee({
        wrapper: '#wrapper',
        src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',  // 播放地址
        controls: true,  // 是否展示控制条
        autoplay: true,  // 是否自动播放
        kernels: {
          flv,
          hls
        }
      });
      chimee.play();
    }
  }
}
</script>

<style>
  #wrapper {
    width: 400px;
  }
</style>
```
参考: [chimee](http://chimee.org)