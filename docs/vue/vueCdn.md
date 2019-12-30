### cdn白屏优化

>vue-cli 3.x配置
``` js
// index.html引入cdn,注释vue、vuex、axios等所有import引入方式
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>  
<script src="https://cdn.bootcss.com/vue-router/3.0.6/vue-router.min.js"></script>
<script src="https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js"></script>
<script src="https://cdn.bootcss.com/axios/0.19.0/axios.min.js"></script> 

// vue.config.js配置
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
    }
  }
}; 
```

>eslint监测排除
``` js
// .eslintrc.js添加全局字段
module.exports = {
  globals: {
    "Vue": false,
    "VueRouter": false,
    "Vuex": false,
    "axios": false
  }
};
```

>修改js打包引入位置
``` js
// 使用html-webpack-plugin插件

// 在vue.config.js配置
yarn add html-webpack-plugin

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        inject: "body"
      })
    ]
  }
};

// true: 默认值，script标签位于html文件的 body 底部
// body: script标签位于html文件的 body 底部
// head: script标签位于html文件的 head中
// false: 不插入生成的js文件，这个几乎不会用到的
inject: true | body | head | false

```