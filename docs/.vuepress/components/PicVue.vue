<template>
  <div class="pic-vue">
    <el-card class="card-1" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>毛玻璃</span>
        <time class="img-desc">filter:blur(5px);</time>
      </div>
    </el-card>
    <el-card class="card-2" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>黑白照</span>
        <time class="img-desc">filter:grayscale(100%);</time>
      </div>
    </el-card>
    <el-card class="card-3" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>焦黄</span>
        <time class="img-desc">filter:sepia(100%);</time>
      </div>
    </el-card>
    <el-card class="card-4" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>饱和度</span>
        <time class="img-desc">filter:saturate(500%);</time>
      </div>
    </el-card>
    <el-card class="card-5" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>色相旋转</span>
        <time class="img-desc">filter:hue-rotate(180deg);</time>
      </div>
    </el-card>
    <el-card class="card-6" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>胶卷相片</span>
        <time class="img-desc">filter:invert(100%);</time>
      </div>
    </el-card>
    <el-card class="card-7" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>透明度</span>
        <time class="img-desc">filter:opacity(30%);</time>
      </div>
    </el-card>
    <el-card class="card-8" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>亮度</span>
        <time class="img-desc">filter:brightness(50%);</time>
      </div>
    </el-card>
    <el-card class="card-9" style="display: inline-block;width:240px;" :body-style="{ padding: '0px'}">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 100%;">
      <div style="padding: 10px;">
        <span>对比度</span>
        <time class="img-desc">filter:contrast(500%);</time>
      </div>
    </el-card>
  </div>
</template>

<style>
  .img-desc {
    font-size: 13px;
    color: #999;
  }

  .card-1:hover img {
    filter:blur(5px);
  }
  .card-2:hover img {
    filter:grayscale(100%);
  }
  .card-3:hover img {
    filter:sepia(100%);
  }
  .card-4:hover img {
    filter:saturate(500%);
  }
  .card-5:hover img {
    filter:hue-rotate(180deg);
  }
  .card-6:hover img {
    filter:invert(100%);
  }
  .card-7:hover img {
    filter:opacity(30%);
  }
  .card-8:hover img {
    filter:brightness(50%);
  }
  .card-9:hover img {
    filter:contrast(500%);
  }
</style>