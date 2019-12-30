### 极光推送

>依赖安装
``` js
yarn add jpush-react-native jcore-react-native
// 执行link命令
react-native link jpush-react-native
react-native link jcore-react-native
```  

>配置应用
``` js {20}
... // 配置检查

import { Platform } from "react-native";
import JPushModule from 'jpush-react-native';

...
componentDidMount() {
  // 新版本必需写回调函数
  // JPushModule.notifyJSDidLoad();
  if(Platform.OS === 'android' ){
    JPushModule.notifyJSDidLoad((resultCode) => {
      if (resultCode === 0) {}
    });
    // // 接收自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {
      this.setState({pushMsg: message});
    });
  }else {
    // ios初始化，必须！否则拿不到极光后台的token
    JPushModule.setupPush()
  }

  // 接收自定义消息
  JPushModule.addReceiveCustomMsgListener((message) => {
    this.setState({pushMsg: message});
  });
  // 接收推送通知
  JPushModule.addReceiveNotificationListener((message) => {
    console.log("receive notification: " + message);
  });
  // 打开通知
  JPushModule.addReceiveOpenNotificationListener((map) => {
    // 清除角标
    if (Platform.OS == "android") {
      JPushModule.clearAllNotifications()
    } else {
      // 回调函数必需,否则会报错闪退
      JPushModule.setBadge(0,() => {})
    }
    console.log("Opening notification!");
    console.log("map.extra: " + map.extras);
    // 可执行跳转操作，也可跳转原生页面
    // this.props.navigation.navigate("SecondActivity");
  });
}

componentWillUnmount() {
  JPushModule.removeReceiveCustomMsgListener();
  JPushModule.removeReceiveNotificationListener();
}
```  

参考: [iOS 证书设置指南](https://docs.jiguang.cn/jpush/client/iOS/ios_cer_guide/)  
参考: [React Native集成极光推送](https://blog.csdn.net/xiangzhihong8/article/details/80734865)