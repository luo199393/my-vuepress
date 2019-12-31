module.exports = {
  title: '山有木兮水',
  description: '云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。',
  dest: './dist', // 设置输出目录
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // 页面icon
    ['link', {
      rel: 'icon',
      href: '/icon.png'
    }],// 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 导航栏配置
    nav:[
      // 下拉列表
      {
        text: 'css+js',
        items: [
          { text: 'css', link: '/web/css' },
          { text: 'js', link: '/web/js/jsBasic' },
          { text: 'iframe', link: '/web/iframe' },
          { text: 'http状态码', link: '/web/status' },
          { text: '加密算法', link: '/web/token' }
        ]
      },   
	  
      // 内部链接 以docs为根目录
      { text: 'Vue', link: '/vue/vueVersion' },
      {
        text: 'React',
        items: [
          { text: 'React', link: '/react/reactBasic' },
          { text: 'React-Native', link: '/rn/navigation/navigationBasic' }
        ]
      },
      { text: 'Webpack4', link: '/webpack/webpackInit' },
      {
        text: 'node',
        items: [
          { text: 'npm和yarn', link: '/node/npmYarn' },
          { text: 'egg.js', link: '/egg/eggInit' }
        ]
      },
      { text: 'Git', link: '/git/git' },
      { text: 'Nginx', link: '/nginx/nginxInit' },
      // 外部链接
      {
        text: 'Git仓库',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/luo199393' },
        ]
      }        
    ],
    // 侧边栏配置
    sidebar:{
      // docs文件夹下面的vue文件夹 文档中md文件 书写的位置(命名随意)
      '/vue/': [
        '/vue/vueVersion',
        '/vue/vueBasic', // vue文件夹的vueBasic.md 不是下拉框形式
        '/vue/vueRouter',
        '/vue/vueDirectives',
        '/vue/vueVuex',
        '/vue/vueAxios',
        '/vue/vueProxy',
        '/vue/vueEsLint',
        '/vue/vueConfig',
        '/vue/vueBus',
        '/vue/vueVw',
        '/vue/cubicBezier',
        '/vue/vueAntV',
        '/vue/vueTs',
        '/vue/vueImg',
        '/vue/vueCdn',
        {
          title: '组件库',
          children: [
            '/vue/tools/vueEditor',
            '/vue/tools/vueCropper',
            '/vue/tools/vueArea',
            '/vue/tools/vueMusic',
            '/vue/tools/vueVerify',
            '/vue/tools/vueCountup',
            '/vue/tools/vueSignature',
            '/vue/tools/vueCanvas',
            '/vue/tools/vueLrz',
            '/vue/tools/vueDrag',
            '/vue/tools/vueDrr',
            '/vue/tools/vueDraggable',
            '/vue/tools/vueChimee',
            '/vue/tools/vueVideo',
            '/vue/tools/vueExcel',
            '/vue/tools/vueVr'
          ],
        },
        '/vue/vueNpm',
      ],
      // docs文件夹下面的web文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/web/': [
        '/web/css',
        '/web/selector',
        '/web/color',
        '/web/pic',
        {
          title: 'js',
          children: [
            '/web/js/jsBasic',
            '/web/js/jsArray',
            '/web/js/jsReg',
            '/web/js/jsFun',
            '/web/js/jsImg',
          ],
        },
        '/web/iframe',
        '/web/status',
        '/web/token'
      ],
	  '/web2/': [
        '/web2/css',
        '/web2/selector',
        '/web2/color',
        '/web2/pic',
        {
          title: 'js',
          children: [
            '/web2/js/jsBasic',
            '/web2/js/jsArray',
            '/web2/js/jsReg',
            '/web2/js/jsFun',
            '/web2/js/jsImg',
          ],
        },
        '/web2/iframe',
        '/web2/status',
        '/web2/token'
      ],
      '/webpack/': [
        '/webpack/webpackInit',
        '/webpack/webpackSet'
      ],
      '/egg/': [
        '/egg/eggInit',
        '/egg/eggSql',
        '/egg/codeSql',
        '/egg/eggFile'
      ],
      '/rn/': [
        '/rn/nativeCss',
        '/rn/nativeList',
        {
          title: 'Navigation导航',
          children: [
            '/rn/navigation/navigationBasic',
            '/rn/navigation/navigationTab',
            '/rn/navigation/navigationDrawer'
          ]
        },
        '/rn/nativeStorage',
        '/rn/nativeMobx',
        {
          title: 'native插件',
          children: [
            '/rn/plugin/jpushNative',
            '/rn/plugin/imagePicker',
          ]
        },
        '/rn/nativeDev',
      ],
      '/react/': [
        '/react/reactBasic',
        '/react/reactRender',
        '/react/reactBus'
      ],
    }
  }
};