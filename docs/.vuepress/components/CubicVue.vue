<template>
  <div class="cubic-vue">
    <el-button size="mini" @click="sport">开始</el-button>
    <div class="box">
      <img class="point" :src="$withBase('/logo.png')">
    </div>
    <div class="trash">垃圾桶</div>
  </div>
</template>

<script>
export default {
  name: "CubicVue",
  methods: {
    // 点击运动
    sport() {
      let box = document.querySelector(".box");
      let point = document.querySelector(".point");
      let finish = document.querySelector(".trash");
      let x = finish.getBoundingClientRect().left - box.getBoundingClientRect().left - box.getBoundingClientRect().width/2;
      let y =  finish.getBoundingClientRect().top - box.getBoundingClientRect().top - box.getBoundingClientRect().height/2;
      document.querySelector(".box").style.transform=`translateX(${x}px)`;
      document.querySelector(".point").style.transform=`translateY(${y}px)`;
      setTimeout(() => {
        document.querySelector(".cubic-vue").removeChild(box);
        finish.style.background = "#e24343";
      },800)
    }
  }
};
</script>

<style scoped>
.cubic-vue{
  width: 600px;
  height: 200px;
  background: #ccc;
  position: relative;
}
.trash{
  position: absolute;
  right: 30px;
  bottom: 30px;
  padding: 5px;
  background: #f8f8f8;
}
.box{
  width: 30px;
  height: 30px;
  padding: 10px;
  transition: all 0.8s cubic-bezier(0,0,0,0);
}
.point{
  width: 30px;
  height: 30px;
  border-radius: 30px;
  transition:0.8s all cubic-bezier(.91,.2,.85,.21);
}
</style>
