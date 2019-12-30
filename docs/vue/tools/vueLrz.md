### 图片压缩

<ClientOnly>
  <LrzVue/>  
</ClientOnly> 

>安装使用
``` js
yarn add lrz
```

``` js
<script>
export default {
  name: "CanvasVue",
  data: function() {
    return {
      img: "",
      options: {
        // {Number}图片最大不超过的宽度，默认为原图宽度，高度不设时会适应宽度
        width: "",
        // {Number}同上
        height: "",
        // {Number}图片压缩质量，取值 0 - 1，默认为0.7
        quality: "",
        // {String}后端接收的字段名，默认：file
        fieldName: "" 
      }
    };
  },
  methods: {
    onImg(img) {
      let lrz = require("lrz");
      lrz(img,this.options)
        .then(rst => {
            // 处理成功会执行
            // res: {
            //   formData 后端可处理的数据,
            //   file 压缩后的file对象（默认已经丢在rst.formData有一份了）
            //   fileLen 生成后的图片的大小
            //   base64 生成后的图片base64
            //   base64Len 生成后的base64的大小
            //   origin 原始的file对象
            // }
        })
        .catch(err =>{
            // 处理失败会执行
        })
        .always(() => {
            // 不管是成功失败，都会执行
        });
    }
  }
};
</script>
```
参考: [localResizeIMG](https://github.com/think2011/localResizeIMG)