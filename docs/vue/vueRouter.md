### 路由相关

>按需加载
``` js
{
  component: resolve => require(['@/pages/HelloWorld'], resolve)
}
```

>路由重定向(当跳转路由未配置时)
``` js
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
```

>页面缓存
``` html
<keep-alive>
  <router-view></router-view>
</keep-alive>

<!-- 使用router. meta属性 -->
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>

<!-- 使用include(包含)/exclude(排除) -->
<keep-alive include="a,b">
  <router-view></router-view>
</keep-alive>
```