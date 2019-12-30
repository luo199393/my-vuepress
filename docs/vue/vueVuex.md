### Vuex

>数据操作
``` js
const state = {
  //定义数据 --- 类似data
  num: 12 //生成了一个静态的常量
}
// 取值
this.$store.state.num

// mutations赋值(同步)
const mutations = {
//定义方法 --- 类似methods
  add(state,val){//state 是把上面的数据引入进来的
    state.num++;
  }
}
this.$store.commit("add",val)

// actions赋值(异步)
const actions = {
  //context代表了整个的store
  addPlus(context){
    context.commit('add',{a:2}); //每次加2
  }
}
// 使用
this.$store.dispatch('addPlus');
```

>vuex持久化
``` js
// 安装
yarn add vuex-persistedstate

// 在store.js中引入
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()]
})
```

>组件实时赋值
``` js
computed: {
  isdata () {
    return this.$store.state.isdata
  }
}
```