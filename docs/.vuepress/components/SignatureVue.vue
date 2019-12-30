<template>
  <div class="signature-vue">
    <div style="display: flex;justify-content: space-between;margin-bottom:10px;">
    <vue-signature
      ref="signature"
      :sigOption="option"
      w="100%"
      :h="'300px'"
      style="flex: 1"
    ></vue-signature>
    <img style="flex: 1;margin-left: 20px" :src="queryImg" />
    </div>
    <el-button class="mt20" @click="save">保存</el-button>
    <el-button class="mt20" @click="clear">清除</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(0,0,0,0.1)"
      },
      queryImg: ""
    };
  },
  methods: {
    save() {
      var png = this.$refs.signature.save();
      var jpeg = this.$refs.signature.save("image/jpeg");
      var svg = this.$refs.signature.save("image/svg+xml");
      this.queryImg = png;
      console.log(png);
      console.log(jpeg);
      console.log(svg);
    },
    clear() {
      this.$refs.signature.clear();
    },
    undo() {
      this.$refs.signature.undo();
    },
    addWaterMark() {
      this.$refs.signature.addWaterMark({
        text: "mark text", // watermark text, > default ''
        font: "20px Arial", // mark font, > default '20px sans-serif'
        style: "all", // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
        fillStyle: "red", // fillcolor, > default '#333'
        strokeStyle: "blue", // strokecolor, > default '#333'
        x: 100, // fill positionX, > default 20
        y: 200, // fill positionY, > default 20
        sx: 100, // stroke positionX, > default 40
        sy: 200 // stroke positionY, > default 40
      });
    },
    fromDataURL(url) {
      console.log(url);
      // this.$refs.signature.fromDataURL('data:image/png;base64,iVBORw0K...')
    }
  }
};
</script>
