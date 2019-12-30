### ts

>.vue
``` js
<template>
  <div>
    <my-input ref="eComponent" v-model="msg"></my-input>
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="addTimes(1)">Greet</button>
  </div>
</template>

<script lang="ts">
import {Component, Provide, Prop, Watch, Vue} from "vue-property-decorator"
import MyInput from "components/MyInput.vue"

// 引入组件
@Component({
  components: {
    MyInput
  }
})
export default class Hello extends Vue {
  // prop
  @Prop()
  propA: string | number

  @Prop({ default: 'default value' })
  propB: string

  @Prop()
  propC: number = 1

  // data
  @Provide() obj: Object = {}
  @Provide() msg: string = "hello world"
  @Provide() times: number = 0

  // 生命周期
  mounted() {
    console.log(this.msg)
  }

  // method
  addTimes(a : number): number {
    console.log(this.obj)
    this.times = this.times + a
    return this.times
  }

  // computed
  get computedMsg () {
    return "computed" + this.msg
  }

  // watch监听
  @Watch('child')
  onChild(nv: string, ov: string) { 
    ...
  }
  // 相当于
  // watch: {
  //   'child': {
  //     handler: 'onChild',
  //     immediate: false,
  //     deep: false
  //   }
  // }
  @Watch('person',{ immediate: true, deep: true })
  onPerson(nv: string, ov: string) { 
    ...
  }

  // $refs的使用
  // 注意这里的感叹号
  $refs!: {
    cComponent: eComponent // Typescript可以正确提示出组件中的方法和属性
  }
}
</script>

<style>
</style>
```

>使用 Mixins
``` js
// mixin.js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyMixin extends Vue {
  mixinValue = 'Hello'
}

// .vue使用
import Component, { mixins } from 'vue-class-component'
import MyMixin from './mixin.js'

// 使用"mixins"辅助函数代替"Vue"
@Component
export class MyComp extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}
```

>引部分第三方库的额外声明
``` js
// src下新建 /typings/tools.d.ts
declare module 'XXXX' // npm包的名称，不需要额外配置或引入
```

参考: [vue-class-component](https://github.com/vuejs/vue-class-component)