### Mobx

>依赖安装
``` js
yarn add mobx mobx-react
```

>store.js
``` js
// 新建文件 ./store.js
import {action} from "mobx";
import {extendObservable} from "mobx";

class store {
  constructor() {
    extendObservable(this, {
        num: 0,

        get getNum() {
          return this.num
        },
        setNum: action((num) =>{
            this.num = Number(num);
        })
    })
  }
}
export default new store()
```

>页面使用
``` js {22}
import React from "react";
import {observer} from "mobx-react";
import {View, Text, Button} from "react-native";
import store from './store'
const App = class MobxDemo extends React.Component {
  render() {
    return (
      <View>
        // 两种方式均可
        <Text>当前的数是：{store.num}</Text>
        <Text>当前的数是：{store.getNum}</Text>
        <Button
          onPress={() =>
            store.addNum()}
          title='add'
        />
      </View>
    );
  }
}
// observable mobx装饰器
export default observer(App);
```  

参考: [react-native + mobx 入门到放弃](https://juejin.im/post/5aeab81e6fb9a07acc118d44)