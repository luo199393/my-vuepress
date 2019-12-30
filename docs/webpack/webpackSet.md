### webpack4配置项

>用Babel转换ES6的js代码
``` js
// 安装依赖
yarn add babel-core babel-loader babel-preset-env
```
``` js
// 在项目根目录下创建.babelrc文件(注意：文件名前的.也是文件名的一部分)
{
  "presets": [
      "env"
  ]
}
// 在项目根目录下创建webpack.config.js的文件然后配置loader：
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

>HTML插件
``` js
// 安装依赖
yarn html-webpack-plugin html-loader
```
``` js
// 更新webpack的配置
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```
``` html
<!-- 在./src新建一个HTML文件/index.html(路径为./src/index.html),运行npm run build测试 -->  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>webpack 4 quickstart</title>
</head>
<body>
    <div id="app">
    </div>
</body>
</html>
```

>提取CSS到文件中
``` js
// 安装依赖
yarn add mini-css-extract-plugin css-loader
```
``` js
// 在webpack.config.js中配置plugin和loader：
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
```
``` css
/* 在./src新建一个css文件/mian.css(路径为./src/main.css),运行npm run build测试 */
body {
  background: #f8f8f8;
}
```  

>添加CSS3前缀
``` js
// 安装依赖
yarn add postcss-loader autoprefixer
```
``` js
// 在项目根目录下创建postcss.config.js文件
module.exports = {
  plugins: [require('autoprefixer')]  // 引用该插件即可了
}
// 在webpack.config.js中配置：
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'] // 从右向左解析
      }
    ]
  }
}
```

>引用图片
``` js
// 安装依赖
yarn add file-loader url-loader html-withimg-loader
```  
``` js
// 在webpack.config.js中配置：
module.exports = {
  module: {
    rules: [
      // css文件里引入的如背景图之类的图片
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      },
      // 页面img引用图片
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      // 引用字体图片和svg图片
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      }
    ]
  }
}
```  

>热加载
``` js
// 安装依赖
yarn add webpack-dev-server
// 修改package.json
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
// 测试运行
npm run start
```  

>resolve解析
``` js
// 在webpack.config.js中配置：
module.exports = {
  resolve: {
    // 别名
    alias: {
        $: './src/jquery.js'
    },
    // 省略后缀
    extensions: ['.js', '.json', '.css']
  }
}
```  

>hash配置
``` js
// 安装依赖
yarn add html-webpack-plugin clean-webpack-plugin
// 注意:html-webpack-plugin本页已经安装使用过
```
``` js
// 在webpack.config.js中配置：
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[hash:4].js',  // 添加hash可以防止文件缓存，每次都会生成4位的hash串
    path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
  },
  plugins: [
    // 打包前先清空
    new CleanWebpackPlugin('dist'),
    new HtmlWebPackPlugin({
      hash: true // 是否添加hash值
    })
  ]
}
```  

参考: [Webpack 4 教程：从0配置到生产模式](https://juejin.im/post/5af934806fb9a07ab458bced)
参考: [webpack4-用之初体验，一起敲它十一遍](https://juejin.im/post/5adea0106fb9a07a9d6ff6de)