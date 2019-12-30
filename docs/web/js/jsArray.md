### 数组相关

>pop
``` js
// 删除数组最后一个元素，并返回删除的元素。如果数组已经为空，则pop()不改变数组，并返回undefined值。
const datas = ['a','b','c']
let last = datas.pop();
```

>forEach
``` js
// 操作原数组
const datas = ['a','b','c']
datas.forEach(data => {
  console.log(data);
})
```

>map
``` js
// 返回一个新数组
const datas = ['a','b','c']
const newA = datas.map(data => {
  return data; // 若无返回，则默认undefined
})
```

>filter
``` js
// 返回一个过滤后得新数组
const datas = ['a','b','c']
const newA = datas.filter(data => {
  return data !== 'a';
})
```

>find
``` js
// 查找数据，当找到第一个符合条件时，不再执行
const datas = ['a','b','c']
const newA = datas.find(data => {
  return data === 'a';
})
```

>some
``` js
// 一真即真,true or false
const datas = [1,2,3]
const some = datas.find(data => {
  return data > 1;
})
```

>every
``` js
// 一假即假,true or false
const datas = [1,2,3]
const every = datas.every(data => {
  return data > 1;
  })
```

>reduce
``` js
// 数组累加器，第一个参数必须要初始化
let datas = [1,2,3]
datas.reduce((totle,data) => {
  return totle + data;
},0)
```

>includes
``` js
// 检测数组是否包含xx
let datas = [1,2,3]
datas.includes(1); 
// true 
datas.includes(4); 
// false 
```

>解构赋值
``` js
// 交换数组中任意两个数据的位置
[array[index1],array[index2]] = [array[index2],array[index1]];
```