### 省市区三级联动

<ClientOnly>
  <AreaVue/>  
</ClientOnly> 

>安装使用
``` js
// 安装依赖及城市数据来源
yarn add vue-area-linkage area-data

// main.js
import "vue-area-linkage/dist/index.css";
import VueAreaLinkage from "vue-area-linkage";
Vue.use(VueAreaLinkage);
```

``` js
<template>
  <div class="area-vue">
    <area-select
      type="text"
      v-model="data"
      :level="2"
      :data="pcaa"
    ></area-select>
    <div style="margin:15px">
      {{JSON.stringify(data,null,2)}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaVue",
  data() {
    return {
      pcaa: require("area-data/pcaa"),
      data: []
    }
  }
}
</script>
``` 

>其他格式
``` js
let pacc = require("area-data/pcaa");
let aa = [];
let m = 0;
for (let i in this.pcaa["86"]) {
  ++m;
  aa.push({
    code: i,
    name: this.pcaa["86"][i],
    children: []
  });
  let n = 0;
  for (let k in this.pcaa[i]) {
    ++n;
    aa[m - 1].children.push({
      code: k,
      name: this.pcaa[i][k],
      children: []
    });
    for (let j in this.pcaa[k]) {
      aa[m - 1].children[n - 1].children.push({
        code: j,
        name: this.pcaa[k][j]
      });
    }
  }
}
console.log(aa);
// 输出格式
{
  // 省
  code: "",
  name: "",
  children: [
    {
      // 市
      code: "",
      name: "",
      children: [
        {
          // 区
          code: "",
          name: "",
        },
        ......
      ]
    },
    ......
  ]
  ......
}
``` 

参考: [vue-area-linkage](https://dwqs.github.io/vue-area-linkage/)
参考: [area-data](https://github.com/dwqs/area-data)