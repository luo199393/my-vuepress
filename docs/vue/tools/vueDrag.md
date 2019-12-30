### dom拖拽
>安装使用
``` js
yarn add vue-dragdrag

// main.js
import vueDragDrag from 'vue-dragdrag'
Vue.use(vueDragDrag)
```

``` js
<template>
  <div class="container">
    <div
      class="inline-block drag-div"
      v-drag="{ ondrag: drag, cursor: 'move' }"
    ></div>
  </div>
  <div class="container" style="margin-top: 10px">
    <div class="test4" id="test4-move">
      <div class="test4-drag" v-drag="{ moveElId: 'test4-move' }"></div>
      <div class="test4-content">test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragVue",
  methods: {
    drag(event, coordinate) {
      console.log(event, coordinate.left, coordinate.top);
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100px;
  border: 1px solid #c9c9c9;
}  
.drag-div {
  width: 30px;
  height: 30px;
  background: #ccc;
}
.test4 {
  width: 50px;
  height: 50px;
  border: 1px solid #4a4a4a;
}
.test4-drag {
  height: 20px;
  background: #ccc;
}
</style>
``` 

参考: [vue-dragdrag](https://github.com/lfyfly/vue-dragdrag)