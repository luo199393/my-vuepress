### videojs播放rtmp视频流

<ClientOnly>
  <VideoVue/>  
</ClientOnly> 

>安装使用
``` js
// 安装依赖
yarn add video.js videojs-flash
```

``` js
<template>
  <div style="width: 500px">
    <video
      id="video"
      class="video-js vjs-default-skin   
      vjs-big-play-centered flex-grid"
      style="width:100%;height:100%;object-fit: fill"
      muted
      controls
      autoplay
      :poster="$withBase('/test.jpg')"
      loop
    >
      <source src="rtmp://ns8.indexforce.com/home/mystream" type="rtmp/mp4" />
    </video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-flash";

export default {
  name: "videos",
  data() {
    return {
      options: {
        autoplay: true,
        preload: true,
        techOrder: ["flash", "html5"],
        notSupportMessage: "此视频暂无法播放",
        fluid: true
      }
    };
  },
  mounted() {
    this.player = videojs("#video", this.options, () => {});
  }
};
</script>
``` 

参考: [在vue.js中使用videojs播放rtmp视频流](https://homary.github.io/在Vue.js中使用Videojs播放rtmp视频流)