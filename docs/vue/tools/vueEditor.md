### 富文本编辑器

<ClientOnly>
  <EditorVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add wangeditor
```

``` js
<template>
  <div ref="editor"></div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "editore-vue",
  data() {
    return {
      editorContent: ""
    };
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
  methods: {
    // 查看内容
    getContent() {
      alert(this.editorContent);
    }
  }
};
</script>
```
参考: [wangeditor3](https://www.kancloud.cn/wangfupeng/wangeditor3/332599)