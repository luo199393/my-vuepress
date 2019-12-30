### nginx的安装和配置（MAC）

>安装
``` js
// 1、安装homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

// 2、安装nginx
brew install nginx

//3、解决安装过程中的Warning问题
sudo xcode-select --install

// 4、启动nginx服务
brew services start nginx

// 成功后，使用浏览器打开 http://localhost:8080 测试结果
```

>nginx文件目录
``` js
// 1、nginx安装文件目录
/usr/local/Cellar/nginx

// 2、nginx配置文件目录
/usr/local/etc/nginx

// 3、config文件目录
/usr/local/etc/nginx/nginx.conf

// 4、系统hosts位置
/private/etc/hosts
```

>nginx常用命令
``` js
nginx  #启动nginx
nginx -s quit  #快速停止nginx
nginx -V #查看版本，以及配置文件地址
nginx -v #查看版本
nginx -s reload|reopen|stop|quit   #重新加载配置|重启|快速停止|安全关闭nginx
nginx -h #帮助

// linux命令相关
// 编辑文件
vim xxxx(文件名)
// 进入编辑状态
a
// 退出编辑状态
esc
// 保存修改
:wq
// 强制保存修改
:wq!
// 退出
:q
// 强制性退出并不保存修改
:q!
```

>nginx代理
``` js
// 进入配置文件并修改状态
cd /usr/local/etc/nginx
vim nginx.conf
a

// 添加配置内容
// 将http://127.0.0.1:18000设置代理为localhost/test1
server {
  listen        80;
  server_name   localhost;

  location ^~ /test1/ {
      proxy_pass http://127.0.0.1:18000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection ‘upgrade’;
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
  }
}

// 保存修改并退出
:wq
// 启动
nginx
```