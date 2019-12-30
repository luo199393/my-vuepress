### antV常用配置

>安装依赖
``` js
yarn add @antv/g2 @antv/data-set
```

>使用
``` js
// 初始化
var chart = new G2.Chart({
    container: "AttendancePei",
    forceFit: true,
    height: document.querySelector("#AttendancePei").clientHeight - 20,
    padding: [10, 90, 10, 45]
});
      

// 为属性定义别名
chart.scale({
    type: {
        alias: "考勤人数" // 为属性定义别名
    }
});

// 设置标题
chart.legend({
    title: { fill: "#8d8d8d" },
    position: "right-center",
    offsetY:
        -document.querySelector("#AttendancePei").clientHeight / 2 + 180,
    offsetX: 15,
    textStyle: {
        fill: "#8d8d8d", // 文本的颜色
        fontSize: "12", // 文本大小
        fontWeight: "400", // 文本粗细
    }
});


// 配置坐标轴
chart.axis("key", {
    line: null,
    tickLine: null,
    grid: null,  // 网格
    label: {
        offset: 10, // 设置坐标轴文本 label 距离坐标轴线的距离
        textStyle: {
          textAlign: "center", // 文本对齐方向，可取值为： start middle end
          fill: "#8d8d8d", // 文本的颜色
          fontSize: "12", // 文本大小
          fontWeight: "400", // 文本粗细
          rotate: 0,
          textBaseline: "top" // 文本基准线，可取 top middle bottom，默认为middle
        }, // 文本样式，支持回调
        autoRotate: true // 是否需要自动旋转，默认为 true
    },
    formatter: val => {    // 自定义坐标轴轴文本显示
        return val + '元';
    }
});


// 设置坐标轴刻度线个数
chart.source(data, {
  xField: {
    type: 'timeCat', // 声明该数据的类型
    tickCount: 9
  }
});

// 设置坐标轴刻度线间距
chart.source(data, {
  xField: {
    type: 'linear',
    tickCount: 9,
    alias: 'Daily fat intake', // 定义别名
    tickInterval: 5, // 自定义刻度间距
    nice: false, // 不对最大最小值优化
    max: 96, // 自定义最大值
    min: 62 // 自定义最小值
  }
});


// 设置坐标轴显示范围
// 方式 1
chart.source(data, {
  xField: {
    type: 'linear',
    min: 0,
    max: 1000
  }
}); 
// 方式 2
chart.scale('xField', {
  type: 'linear',
  min: 0, 
  max: 1000
});


// 配置图例内容颜色
chart.color("type", ["#0078BC", "#00BAE2", "#40DBFF", "#D2EAF9"])

// 重绘
 chart.changeData(newData);
// 或者
chart.clear();
...
chart.render();
// 或者
chart.source(newData);

chart.guide().clear();// 清理guide
chart.repaint();
```