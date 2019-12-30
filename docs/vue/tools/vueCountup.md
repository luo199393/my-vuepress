### 跳动数字

<ClientOnly>
  <CountupVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add countup.js vue-countup-v2  

// 最新版本报错, 安装指定版本即可 countup is not a constructor
{
  "countup.js": "1.9.3",
  "vue-countup-v2": "1.0.3",
}
```

``` js
<template>
  <ICountUp
    :startVal="startVal"
    :endVal="endVal"
    :decimals="decimals"
    :duration="duration"
    :options="options"
    @ready="onReady"
  />
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  name: 'demo',
  components: {
    ICountUp
  },
  data() {
    return {
      startVal: 0,
      endVal: 120500,
      decimals: 0,
      duration: 2.5, // 默认为2。 持续时间（秒）
      options: {
        useEasing: true, // ease animation (true)
        useGrouping: true,  // example: 1,000 vs 1000 (true)
        separator: ',', // 间隔符
        decimal: '.', // 默认为0。 数字中的小数位数
        prefix: '', // 文本前置
        suffix: '' // 文本后缀
      }
    };
  },
  methods: {
    // 结束更新动画后触发
    onReady(instance, CountUp) {
      instance.update(this.endVal + 100);
    }
  }
</script>
``` 

参考: [vue-countup-v2](https://github.com/xlsdg/vue-countup-v2)