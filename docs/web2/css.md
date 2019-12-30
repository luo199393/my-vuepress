### css基础  

[flex布局](/web/js/jsBasic)  
[grid布局](https://zhuanlan.zhihu.com/p/26757425)    

>flex布局子元素内容超出容器
``` css {18}
<style>
.flex {
   display: flex;
}
.flex-1 {
   flex: 1;
}
</style>
<div class="main flex">
    <div class="content flex-1">
        <p class="notice">......文本.........</p>
    </div>
</div>

/* 当.class="notice"内容超出content容器时，可尝试设置style: */
<style>
.content{
  width: 0;
}
</style>
```

>css盒模型
``` css
{
  /* width = boder+padding+content; */
  box-sizing:border-box;
}
```

>单行文本超出后...
``` css
{
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
}
```

>子元素居中
``` css
{
  position: absolute;
  left: 50%!important;
  top: 50%!important;
  transform: translate(-50%,-50%)
}
```

>背景图片铺满自适应
``` css
{
  background: url("static/bj.png") center no-repeat;
  background-size: cover!important;
}
/* 容器与背景图
长度比:150/100=1.5
宽度比:60/50=1.2
cover 取大,所以就按照 长度比 1.5 (等比缩放背景图片)
contain 取小,所以就按宽度比 1.2 (等比缩放背景图片) */
```  

>雪碧图
``` css
{
  width: 50px;
  height: 50px;
  background: url("../../assets/icon/status.png") no-repeat;
  background-size: 200px 50px;  
  background-position: 0 0;
}
/* background-size: 雪碧图尺寸 */
```

>img object-fit属性
``` css
/* <img src="img/21.jpg" class="cover"> */
.cover{
  object-fit:cover;
}
/* fill：默认值。填充，可替换元素填满整个内容区域，可能会改变长宽比，导致拉伸。
contain：包含，保持原始的尺寸比例，保证可替换元素完整显示，宽度或高度至少有一个和内容区域的宽度或高度一致，部分内容会空白。
cover：覆盖，保持原始的尺寸比例，保证内容区域被填满。因此，可替换元素可能会被切掉一部分，从而不能完整展示。
none：保持可替换元素原尺寸和比例。
scale-down：等比缩小。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。 */
```

---
<ClientOnly>
  <PicVue/>  
</ClientOnly>  