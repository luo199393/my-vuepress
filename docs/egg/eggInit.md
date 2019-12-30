### egg初始化

>初始化项目
``` js
// 安装依赖
npm i egg-init -g
// 创建项目
egg-init egg-example --type=simple
// 在项目根目录下
npm i
// 启动
npm run dev
open localhost:7001
```

>app/router.js 中定义 URL 路由规则
``` js
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  // get请求
  router.get('/user/:id', controller.user.getInfo);
  // post请求
  router.post('/user', controller.user.addInfo);
  // put请求
  router.put('/user', controller.user.updateInfo);
  // delete请求
  router.delete('/user/:id', controller.user.deleteInfo);
};
```

>app/controller 目录下面实现 Controller
``` js
// app/controller/user.js
const Controller = require('egg').Controller;

class UserController extends Controller {
  getInfo() {
    const { ctx } = this;
    // 获取接口传参数据
    let id = ctx.params.id;
    ctx.body = {
      name: `hello ${id}`,
    };
    ctx.status = 200;
  },
  addInfo() {
    const { ctx } = this;
    // 获取接口传参数据
    const data = ctx.request.body;
    ctx.body = {
      name: `hello post`,
    };
    ctx.status = 200;
  },
  updateInfo() {
    const { ctx } = this;
    const data = ctx.request.body;
    if (!data.id) {
      ctx.body = {
        message: 'id不能为空',
      };
      ctx.throw(404, 'id不能为空');
    }
    ctx.body = {
      name: `hello put`,
    };
    ctx.status = 200;
  },
  deleteInfo() {
    const { ctx } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
    ctx.status = 200;
  }
}
module.exports = UserController;
```

>跨域配置访问
``` js
// config/config.default.js
module.exports = appInfo => {
  const config = exports = {};

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};

// config/plugin.js
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
```