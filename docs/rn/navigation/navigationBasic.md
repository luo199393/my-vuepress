### 基础导航

>依赖安装
``` js
yarn add react-navigation react-native-gesture-handler
// Link 所有的原生依赖
react-native link react-native-gesture-handler
```

>路由配置
``` js
// 页面文件 ./views/HomeScreen.js
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

// 路由文件 ./router/router.js
import { createStackNavigator } from "react-navigation";

import HomeScreen from './views/HomeScreen';
... // 其他页面

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    ...
  },
  {
    // 设置默认导航页
    initialRouteName: "Home"
  }
);

export default RootStack;
```

>App.js入口配置
``` js
import {createAppContainer } from 'react-navigation';
import RootStack from './router/router';

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
```