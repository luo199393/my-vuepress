### 封装Vue组件发布npm


* 简单封装依赖  
[vue-cli-plugin-p11n](https://github.com/kazupon/vue-cli-plugin-p11n)
  
>1、脚手架构建vue项目
``` js {7}
yarn global add @vue/cli

vue create <project-name>
...

// 记得删除不必要依赖，例如router、vuex
// .gitignore文件中去掉/dist,因为npm包引用需要dist，不能排除
```

>2、组件.vue文件开发
``` js
// .vue组件敲写和正常开发使用没有区别
// input示例,自定义组件双向绑定v-model
// 在components中新建文件夹input，路径为'./src/components/YInput.vue'
<template>
  <input
    class="y-input"
    type="text"
    @change="$emit('input', $event.target.value)"
    :disabled="disabled"
    :value="value"
    :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'YInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
```

>3、index.js导出
``` js
// 在src目录下新建index.js文件。路径为'./src/index.js'
import YInput from './components/YInput'
YInput.install = Vue => Vue.component(YInput.name, YInput)

const components = [
  YInput
  // ...如果还有的话继续添加
]
const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  YInput
  // ...如果还有的话继续添加
}
```

>5、修改package.json文件
``` js
// 1、添加库构建命令
// vue-cli-service build --target lib --name [package-name] [entry]
// package-name: 打包的名称；entry默认是App.vue，但可以将其更改为你导入这些组件的任何文件的相对路径
{
  "scripts": {
    "build-npm": "vue-cli-service build --target lib --name yang-ui ./src/index.js"
  },
}
```

>6、npm指向配置
``` js
// 在package.json文件中
{
  // 组件库命名，必须确保它尚未被使用
  "name": "yang-ui",
  // import输出路径
  "main': "./dist/yang-ui.common.js",
  "private": false   // npm打包时需改为false，正常build为true
}
```

>7、打包使用
``` js
// 打包发布
yarn build-npm
...
npm publish

// 安装使用
yarn add yang-ui
// main.js
import YangUI from "yang-ui";
import "yang-ui/dist/yang-ui.css";
Vue.use(YangUI);

// 注意：
1、css样式文件需单独引入；
2、css中scoped属性设置后样式失效。

// 组件中直接使用
<y-input 
  v-model="text">
</y-input>
```

参考: [如何发布自己模块到NPM](https://www.jianshu.com/p/f5d4c891830f)  
参考: [手把手教你封装 Vue 组件，并使用 npm 发布](https://juejin.im/post/5b45df255188251b1d474860)  
参考: [如何使用@vue/cli 3.0在npm上创建，发布和使用你自己的Vue.js组件库](https://blog.fundebug.com/2018/06/08/vuejs-component-on-npm/)