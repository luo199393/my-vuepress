### SQL数据库关联

>安装依赖
``` js
// 安装依赖
yarn add egg-mysql
```

>开启依赖
``` js
// config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

>配置数据库连接信息  

[MySQL创建用户与授权](https://www.jianshu.com/p/d7b9c468f20d)
``` js
// config/config.default.js
module.exports = appInfo => {
  const config = exports = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'user',
      // 密码
      password: 'password',
      // 数据库名
      database: 'sqlname',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
```

>sql使用
``` js {8}
// app/controller/user.js
const Controller = require('egg').Controller;

class UserController extends Controller {
  // 查询
  async getInfo() {
    const { ctx, app } = this;
    const data = await app.mysql.query('select * from user_info;');
    ctx.body = data;
    ctx.status = 200;
  }
}

module.exports = UserController;
```