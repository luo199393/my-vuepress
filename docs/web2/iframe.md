### iframe通信 

``` html
<!-- 
frameborder: 1 | 0    规定是否显示框架周围的边框
scrolling:  yes | no | auto    规定是否在 iframe 中显示滚动条
marginheight: 0   定义 iframe 的左侧和右侧的边距
marginheight: 0   定义 iframe 的顶部和底部的边距 
-->
<iframe 
    id="Example"
    name="Example"
    width="400"
    height="300"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="xxxx">
</iframe>
```

>子页面和父页面相互获取元素
``` js
// iframe之间相互通信的前提是同域（同协议，同域名，同端口）且页面加载完成

// 1、子页面获取父页面元素
window.parent.document.querySelector ("#id");

// 2、父页面获取子页面元素
// iframe序列号: 类似于数组index
window.frames[iframe序列号].document.getElementById("元素id");
```

>子页面和父页面相互调用方法和变量
``` js
// 1、子页面调用父页面方法和变量
window.parent.func(); //调用方法
window.parent.value； //调用变量

// 2、调用子页面方法和变量
window.frames[iframe序号].func(); //调用方法
window.frames[iframe序号].value； //调用变量
```