### 验证码

<ClientOnly>
  <VerifyVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add vue2-verify
```

``` js
<template>
  <Verify
    @success="alert('success');"
    @error="alert('error');"
    :type="1"
  ></Verify>
</template>

<script>
import Verify from "vue2-verify";
export default {
  name: "VueVerify",
  components: {
    Verify
  },
  methods: {
    alert(text) {
      alert(text);
    }
  }
};
</script>
```
>验证码类型-type  

type值|描述                        
:----:|----              
1|常规验证码picture                   
2|运算验证码
3|滑动验证码
4|拼图验证码
5|选字验证码  

参考: [vue2-verify](https://github.com/trionfo1993/vue2-verify)