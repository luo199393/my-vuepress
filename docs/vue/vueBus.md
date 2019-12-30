### vue-bus

>安装
``` js
yarn add vue-bus

// main.js
import Vue from 'vue';
import VueBus from 'vue-bus';

Vue.use(VueBus);
```

>使用
``` js
// 监听事件和清除监听
export default {
  created() {
    this.$bus.on('add-todo', this.addTodo);
    this.$bus.once('once', () => console.log('这个监听器只会触发一次'));
  },
  beforeDestroy() {
    this.$bus.off('add-todo', this.addTodo);
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    }
  }
}

// 触发事件
export default {
  methods: {
    addTodo() {
      this.$bus.emit('add-todo', { text: this.newTodoText });
      this.$bus.emit('once');
      this.newTodoText = '';
    }
  }
}
```

>其他地方使用
``` js
// xxx.js
import Vue from 'vue';

Vue.bus.emit('someEvent');
```

参考: [vue-bus](https://github.com/yangmingshan/vue-bus)