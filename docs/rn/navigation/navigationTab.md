### Tab导航

>路由配置
``` js
// tab路由文件 ./router/tab.js
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './views/HomeScreen';
... // 其他页面

const ScreenTab = createBottomTabNavigator(
  {
    // 默认第一个为默认页面
    HomeScreen: HomeScreen,
    ...
  },
  // 图标样式配置
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = `${focused ? 'ios-keypad' : 'md-cube'}`;
        
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00a4db',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: '#f8f8f8',
      },
    }
  }
);

export default ScreenTab;
```

>嵌入路由配置
``` js
// 修改文件 ./router/router.js
import TabNavigation from './tab';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    ...
    TabNavigation: TabNavigation
  },
  {
    // 设置默认导航页
    initialRouteName: "Home"
  }
);

```

>配置tab导航title
``` js {1}
// 在文件 ./router/tab.js中添加
import MeunIcon from "./components/MeunIcon";

ScreenTab.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
  
    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = "";
    switch (routeName) {
      default:
      case "HomeScreen":
        headerTitle = "首页";
        break;
      case "DetailScreen":
        headerTitle = "详情页";
        break;
      ...
    }
  
    return {
      headerTitle,
      headerRight: (
        // 可引入页面组件
        <MeunIcon></MeunIcon>
      )
    };
  };
```