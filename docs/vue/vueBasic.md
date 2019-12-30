### 常用语法

>避免 v-if 和 v-for 用在一起
* 当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级

>:class
``` js
export default {
  data() {
    isActive: true,
    hasError: false,
    errorClass: 'text-danger'
  }
}
```
``` html
<div class="static" :class="{ 'active': isActive, 'text-danger': hasError }"></div>
<!-- 结果渲染为 -->
<div class="static active"></div>  

<div :class="[isActive ? 'activeClass' : '', errorClass, { 'active': isActive }]"></div>
<!-- 结果渲染为 -->
<div class="activeClass text-danger active"></div>  
```

>render函数
``` js
// 安装依赖
yarn add @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props

// 添加预设 .babelrc (vue-cli 3.x下无.babelrc文件，需在项目根目录下添加)
{
  "presets": ["@vue/babel-preset-jsx"]
}

// 使用
import MyComponent from './my-component'

export default {
  render() {
    return <MyComponent>{ this.message }</MyComponent>
  }
}
```

>全局组件
``` js
// 自定义组件loading.vue
<template>
  <div>
    ...
  </div>
</template>
 
<script>
  export default {
    ...
  }
</script>
 
<style scoped>
  ...
</style>

// 新建index.js，规定install方法
import loadingComponent from './loading.vue'
 
const loading={
    install:function(Vue){
        Vue.component('Loading',loadingComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};
export default loading;

// 全局注入
import loading from './index'
Vue.use(loading)
```

>样式穿透
``` js
// 使用 scoped 后，父组件的样式将不会渗透到子组件中
<style scoped>
.a >>> .b { /* ... */ }
// 有些像 Sass 之类的预处理器无法正确解析 >>>。这种情况下你可以使用 /deep/ 操作符取而代之
.a /deep/ .b { /* ... */ }
</style>
```

>深copy
``` js
JSON.parse(JSON.stringify(this.data))
```

>this.$set
``` js
// 修改json的值，触发视图层更新 
this.$set(json,key,value);
```

>this.$delete
``` js
// 删除值，触发视图层更新 
this.$delete(json,key);  
this.$delete(array,index);
```

>this.$nextTick
``` js
// 在下次 DOM 更新循环结束之后执行延迟回调 
this.$nextTick(() => {
  ...
});
```

>watch监听
``` js
watch: {
  data: {
    handler(nv) {
    },
    //初始化执行
    immediate: true,
    //深度监听
    deep: true
  },
  // 路由监听
  $route(to, from) {
    console.log("to", to);
    console.log("from", from);
  }
}
```

>组件数据双向绑定
``` js
// v-model
// 组件引用
<template v-model="data"></template>
// 组件代码
props: [value]
// 触发双向绑定
this.$emit("input",value)

// .sync
// 组件引用
<template :data.sync="data"></template>
// 组件代码
props: [data]
// 触发双向绑定
this.$emit("update:data",value)
```