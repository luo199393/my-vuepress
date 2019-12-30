### esLint

>vsCode首选项配置
``` js
// 安装插件eslint
{
  "editor.formatOnSave": false,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",{
      "language": "vue",
      "autoFix": true
    },
  "html",
  "vue"
  ]
}
```

>关闭检验
``` js
// 关闭某块代码的检验
/* eslint-disable */
alert('foo');
/* eslint-enable */

// 关闭代码块某些规则的检验
/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert, no-console */

// 关闭对某行代码的检验
alert('foo'); // eslint-disable-line
// 或者
// eslint-disable-next-line
alert('foo');

// 彻底关闭对某个文件的检验
/* eslint-disable */
alert('foo');
...
```