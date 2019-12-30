### VW自动化配置

>安装依赖
``` js
npm install postcss-px-to-viewport-opt --save-dev
npm install postcss-viewport-units --save-dev
npm install cssnano --save-dev
npm install cssnano-preset-advanced --save-dev
```

>.postcssrc.js文件配置
``` js
module.exports = {
  "plugins": {
    "autoprefixer": {},
    "postcss-px-to-viewport-opt": {
      // 设计稿宽度
      viewportWidth: 750,
      // 设计稿高度，可以不指定
      viewportHeight: 1334,
      // px to vw无法整除时，保留几位小数
      unitPrecision: 3,
      // 转换成vw单位
      viewportUnit: 'vw',
      // 不转换的css类名
      selectorBlackList: ['.ignore', '.hairlines'],
      // 小于1px不转换
      minPixelValue: 1,
      // 允许媒体查询中转换
      mediaQuery: false, 
      // 排除不转化的第三方包
      exclude: /(\/|\\)(node_modules)(\/|\\)/     
    },
    "postcss-viewport-units":{},
    "cssnano": {
      preset: "advanced",
      // 设计稿宽度
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
```

>消除vw对img的影响
``` css
// 全局添加css
img { 
  content: normal !important; 
}
```