### webpack4初始化

>1、创建项目目录并进入
``` js
mkdir webpack-4-quickstart && cd $_
// 初始化
npm init -y
// 安装
yarn add webpack webpack-cli
```

>2、构建项目
``` js {3}
// webpack 4 需要在./src目录下找一个入口文件，会默认选择./src/index.js
// 创建一个文件,路径为：
./src/index.js:
  console.log(`I'm a silly entry point`);
// 打开package.json添加构建脚本
"scripts": {
  "build": "webpack"
}
// 构建执行
npm run build
```

>3、配置开发环境和生产环境
``` js
// 打开package.json文件添加如下脚本
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
// 构建执行
npm run dev
npm run build
// dev环境不会被压缩，build环境代码会被压缩
```

>4、覆盖默认的入口/出口文件
``` js
// 打开package.json文件修改脚本
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
```

参考: [Webpack 4 教程：从0配置到生产模式](https://juejin.im/post/5af934806fb9a07ab458bced)