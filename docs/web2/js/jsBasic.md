### js常用语法

>Object.keys()
``` js
//数组
let  arr = ["a","b","c"]
Object.keys(arr)       //输出["0","1","2"]

//对象
let obj = {a:1,b:2,c:3}
Object.keys(obj)    //输出["a","b","c"]

// 注意:
// 在ES5中，如果此方法的参数不是一个对象，而是一个原始值，则会抛出TypeError，在ES2015中，非对象的参数会强制转换为一个对象
```

>补全字符串
``` js
'1'.padStart(10, '0') // "0000000001"
'123456'.padStart(10, '0') // "0000123456"
```

>提示字符串
``` js
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```

>格式化输出Json/Array
``` js
JSON.stringify(data,null,2)
```

>二进制换算
``` js
var number = 255; // 十进制
var hexString = number.toString(2); // 二进制
var hexString = number.toString(8); // 八进制
var hexString = number.toString(16); // 十六进制
parseInt(hexString, 16) // 转回十进制
```

>字符串的编解码
``` js
// 编码
encodeURIComponent(encodeURIComponent (" "));
// 解码
decodeURIComponent(" ");
```

>计算运算
``` js
// 数的绝对值: 
Math.abs(x)
// 对数进行四舍五入: 
Math.round(x)
// 对数进行上舍入: 
Math.ceil(x)
// 对数进行下舍入: 
Math.floor(x)
// 返回 x 和 y 中的最高值: 
Math.max(x,y)
// 返回 x 和 y 中的最低值: 
Math.min(x,y)
// 返回 0 和 1之间的随机数: 
Math.random()
```

>获取时间
``` js
var mydate = new Date();
mydate.getYear(); //获取当前年份(2位)
mydate.getFullYear(); //获取完整的年份(4位,1970-????)
mydate.getMonth(); //获取当前月份(0-11,0代表1月)
mydate.getDate(); //获取当前日(1-31)
mydate.getDay(); //获取当前星期X(0-6,0代表星期天)
mydate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
mydate.getHours(); //获取当前小时数(0-23)
mydate.getMinutes(); //获取当前分钟数(0-59)
mydate.getSeconds(); //获取当前秒数(0-59)
mydate.getMilliseconds(); //获取当前毫秒数(0-999)
mydate.toLocaleDateString(); //获取当前日期
var mytime=mydate.toLocaleTimeString(); //获取当前时间
mydate.toLocaleString( ); //获取日期与时间
```

>时间格式化
``` js
Date.prototype.Format = function (fmt) {
var o = {
  'M+': this.getMonth() + 1, // 月份
  'd+': this.getDate(), // 日
  'h+': this.getHours(), // 小时
  'm+': this.getMinutes(), // 分
  's+': this.getSeconds(), // 秒
  'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
  'S': this.getMilliseconds()
  // 毫秒
}
if (/(y+)/.test(fmt)) {
  fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
}
for (var k in o) {
  if (new RegExp('(' + k + ')').test(fmt)) {
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
}
return fmt
}
```