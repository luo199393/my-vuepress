### 音乐播放器

<ClientOnly>
  <MusicVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add vue-aplayer hls.js
```

``` js
<template>
  <aplayer
    autoplay
    :music="list[0]"
    :list="list"
  >
  </aplayer>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: "VueMusic",
  components: {
    Aplayer
  },
  data() {
    return {
      list: [
        {
          title: "Preparation",
          author: "Hans Zimmer/Richard Harvey",
          url: "https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          title: "Preparation",
          author: "Hans Zimmer/Richard Harvey",
          url: "https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          title: "Preparation",
          author: "Hans Zimmer/Richard Harvey",
          url: "https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        }
      ]
    };
  }
};
</script>
```
参考: [vue-aplayer](https://github.com/SevenOutman/vue-aplayer)