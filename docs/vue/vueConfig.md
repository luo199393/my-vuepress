### vue.config.js

``` js
module.exports = {
  // 项目部署的基础路径
  publicPath: "./",
  // 构建好的文件输出到哪里
  outputDir: "dist",
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',
  // where to put static assets (js/css/img/font/...)
  // 是否在保存时使用‘eslint-loader’进行检查
  // 有效值: true | false | 'error'
  // 当设置为‘error’时，检查出的错误会触发编译失败
  lintOnSave: true,
   // 是否为生产环境构建生成sourceMap?
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false, // https:{type:Boolean}
    open: true,
    proxy: {  // 设置代理
      '/api': {
        target: 'http://api.xxxxx.com',
        ws: true,
        changOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // promise低版本兼容
    config.entry.app = ["babel-polyfill", resolve('src/main.js')],
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  css: {
    extract: true,  // 是否使用css分离插件,不采用<style>方式内联至html文件中
  },
  // webpack配置，值位对象时会合并配置，为方法时会改写配置
  configureWebpack: config => {}
};
```

>打包去除console.log
``` js
yarn add uglifyjs-webpack-plugin

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  ...,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true, // 注释console
              drop_console: true,
              pure_funcs: ["console.log"] // 移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
    }
  }
};
```

参考: [Vue CLI 3](https://cli.vuejs.org/zh/guide/)
参考: [语雀](https://www.yuque.com/szr190/yzzm82/ux40w7)