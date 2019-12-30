### dom拉伸旋转

<ClientOnly>
  <DrrVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add vue-drr
```

``` js
<template>
  <div class="drr-vue">
    <vue-drr
      :x="x"
      :y="y"
      :angle="angle"
      :w="width"
      :h="height"
      :parent="true"
      @dragging="handleDragging"
      @resizing="handleResizing"
      @rotating="handleRotating"
    >
      <p>
        x: {{ x }}, y: {{ y }}, angle: {{ angle }}, width: {{ width }},
        height: {{ height }}
      </p>
    </vue-drr>
  </div>
</template>

<script>
import vueDrr from "vue-drr";
export default {
  name: "VueDrr",
  components: {
    vueDrr
  },
  data: function() {
    return {
      width: 100,
      height: 100,
      x: 50,
      y: 50,
      angle: 30
    };
  },
  methods: {
    handleResizing: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    handleDragging: function(x, y) {
      this.x = x;
      this.y = y;
    },
    handleRotating: function(angle) {
      this.angle = angle;
    }
  }
};
</script>

<style scoped>
.drr-vue {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  border: 1px solid red;
} 
</style>
``` 

参考: [vue-drr](https://github.com/Alvin-Liu/vue-drr)