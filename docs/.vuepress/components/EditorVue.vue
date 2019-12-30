<template>
  <div class="wang-editor" style="position: relative;z-index: 1;">
    <div ref="editor"></div>
    <button style="margin-top: 20px" @click="getContent">查看内容</button>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "EditorVue",
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
