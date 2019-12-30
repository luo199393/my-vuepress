### 正则表达式

``` js
// pattern 为RegExp的实例, str 为String的实例

pattern.test(str)	 // 判断str是否包含匹配结果	包含返回true，不包含返回false  

pattern.exec(str)	 // 根据pattern对str进行正则匹配	返回匹配结果数组,如匹配不到返回null  

str.match(pattern)	// 根据pattern对str进行正则匹配	返回匹配结果数组,如匹配不到返回null  

str.replace(pattern, replacement)	  // 根据pattern进行正则匹配,把匹配结果替换为replacement	一个新的字符串
```

``` js
{
  // 存在中文
  existChinese: /([\u4e00-\u9fa5]+)/,
  // 只有中文
  onlyChinese: /^[\u4e00-\u9fa5]*$/,
  // 存在数字
  existNum: /\d+/,
  // 只有数字
  onlyNum: /^\d*$/,
  // 存在字母
  existLetter: /([\u4e00-\u9fa5]+)/,
  // 只有字母
  onlyLetter: /^[a-zA-Z]*$/,
  // 匹配数字+字母
  num_letter: /^[0-9a-zA-Z]*$/,
  // 匹配数字 + 字母 + 特殊字符
  num_letter_special: /^[0-9a-zA-Z~/`!@#$%^&*()_+|{}?;:><\-\]\\[\/]*$/,
  // 匹配数字 + 字母,且必须包含
  num_letter_require: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/,
  // 手机号
  phone: /^[1][0-9]{10}$/,
  // Email
  email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  // 网址URL
  url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
  // qq号
  qq: /[1-9]([0-9]{5,11})/,
  // 邮政编码
  postalCode: /\d{6}/,
  // ip
  ip:/(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
  // 身份证号
  idCard: /\d{17}[\d|x]|\d{15}/,
  // 格式日期
  date: /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/,
  // 金钱
  money: /^\d*(?:\.\d{0,2})?$/
}
```