### VR

<ClientOnly>
  <VrVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add vuejs-vr
```

``` js
<template>
  <div class="vr-vue">
    <Pano :source="$withBase('/equirectangular.jpg')"></Pano>
  </div>
</template>  

<script>
import { Pano } from 'vuejs-vr';
export default {
  name: "VrVue",
  components: { 
    Pano 
  }
}
</script>

<style>
.vr-vue {
  width: 100%;
  height: 400px;
  position: relative;
}
</style>
```
参考: [vue-vr](https://github.com/mudin/vue-vr)