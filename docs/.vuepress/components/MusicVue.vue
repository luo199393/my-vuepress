<template>
  <div class="music-vue">
    <aplayer
      autoplay
      :music="list[0]"
      :list="list"
    >
    </aplayer>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";

export default {
  name: "MusicVue",
  components: {
    Aplayer
  },
  data() {
    return {
      list: [
        {
          title: "Preparation",
          author: "Hans Zimmer/Richard Harvey",
          url: "http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3",
          pic: "https://antv.alipay.com/assets/image/logo-with-text.svg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          title: "Preparation",
          author: "Hans Zimmer/Richard Harvey",
          url: "http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3",
          pic: "https://antv.alipay.com/assets/image/logo-with-text.svg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          title: "Preparation",
          author: "Hans Zimmer/Richard Harvey",
          url: "http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3",
          pic: "https://antv.alipay.com/assets/image/logo-with-text.svg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        }
      ]
    };
  }
};
</script>
