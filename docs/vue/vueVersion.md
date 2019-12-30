### vue2.6.0 新增

>Vue.observable( object )
``` js
// 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
// 返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景：
const state = Vue.observable({ count: 0 })

const Demo = {
  render(h) {
    return h('button', {
      on: { click: () => { state.count++ }}
    }, `count is: ${state.count}`)
  }
}

// 跨组件使用可以新建 ./state.js
import Vue from "vue";
const state = Vue.observable({ 
  count: 0 
})

export default state;
// 在需要时引用，无需全局注入。数据可响应
... 
import state from "./state.js";

state.count++;

{{state.count}}

```  

>动态指令参数
``` html
<!-- 如果参数值为 null，则绑定和监听器会被移除 --> 

<div :[attr]="value"></div>

<button @[event]="handler"></button>

<!-- 动态的插槽名 -->
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

>v-slot具名插槽
``` html {35}
<!-- 插槽组件base-layout -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
<!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->

<!-- 使用 -->
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
<!-- v-slot 只能添加在一个 <template> 上 -->
<!-- 插槽的缩写 -->
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>  
  <!-- 默认插槽不可用#,必须是#default -->
  <template #default>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  </template>  

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

>插槽 prop
``` html
<!-- 父级内容中使用组件插槽的值 -->
<my-components>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</my-components>
```