### Proxy代理

``` js
// vue.config.js配置
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxxx/xxxx/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

// 使用
axios.get('/api/xxxxxx').then(res => {
  console.log(res)
})
```