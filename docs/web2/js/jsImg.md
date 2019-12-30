### 图片格式转换

>图片地址转base64
``` js
function getBase64(url，callBack){
  //通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片，相比 createElement() 创建 <img> 省去了 append()，也就避免了文档冗余和污染
  let Img = new Image();
  let dataURL='';
  Img.src=url;
  Img.setAttribute('crossOrigin','Anonymous')//解决图片在canvans跨域的问题
  Img.onload=() => { //要先确保图片完整获取到，这是个异步事件
    let canvas = document.createElement("canvas"); //创建canvas元素
    let width=Img.width; //确保canvas的尺寸和图片一样
    let height=Img.height;
    canvas.width=width;
    canvas.height=height;
    canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
    dataURL=canvas.toDataURL('image/jpeg'); //转换图片为dataURL
    callBack?callBack(dataURL):null//调用回调函数
  };
}
```

>base64转blob
``` js
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}
```

>blob转base64
``` js
function blobToDataURL(blob, callback) {
  var a = new FileReader();
  a.onload = (e) => { 
    callback(e.target.result); 
  }
  a.readAsDataURL(blob);
}
```

>file转base64（file由files[0]获取）
``` js
function fileToBase64(file, callback) {
  //保证file不为undefined，避免报错
  if (file) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      console.log(e.target.result);
      callback ? callback(e.target.result) : null
    }
  }
}
```

>blob转图片文件
``` js
// file: blob文件流  face.png: 图片名称(带上格式.png)
new window.File([file], "face.png", {
  // 图片格式设置
  type: "image/png"
});
```