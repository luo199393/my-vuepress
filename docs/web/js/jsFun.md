### 常用function

>深copy
``` js
newData(data) {
  return JSON.parse(JSON.stringify(data));
}
```

>数组去重
``` js
arrayDedup(array) {
  let arr = array.map(data => {
    return JSON.stringify(data);
  });
  let newArr = arr.reduce(function(ret, cur) {
    if(ret.indexOf(cur) === -1) ret.push(cur);
    return ret;
  }, []);
  return newArr.map(data => {
    return JSON.parse(data);
  })
}
```

>判断是否json字符串
``` js
isJSON(str) {
  if (typeof str == "string") {
    try {
      // var obj = JSON.parse(str);
      if (str.indexOf("{") > -1) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  return false;
}
```

>数组元素移动
``` js
// fromIndex: 当前元素所在位置索引, toIndex: 移动到交换的位置索引
swapItem(arr, fromIndex, toIndex) {
  arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0];
  return JSON.parse(JSON.stringify(arr));
}
```