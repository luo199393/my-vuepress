### color  
![dsa](/logo.jpg "dsa")

>#fff
``` css
/* 
十六进制数值
可以为#RRGGBBAA,后两位为透明度，但 IE /Edge /Opera目前不支持
Alpha %	Hex	Num
100%	FF	  255
90%	E6	230
80%	CC	204
70%	B3	179
60%	99	153
50%	80	128
40%	66	102
30%	4D	77
20%	33	51
10%	1A	26
0%	00	0
*/
{
  color: #ffffff80;
}
```

>rgb
``` css
/* 
rgb模式是红绿蓝颜色值组合。每个值设置的最低值可以是 0（十六进制 00）。最高值是 255（十六进制 FF）。
第一个数字代表红色。
第二个数数字代表绿色。
第三个数字是蓝色。 
rgba(255,255,255,0.8) 第四个数字是透明度
*/
{
  color: rgba(255,255,255,0.8);
}
```

>hsl
``` css
/* 
HSL模式基于一个360色相环。
第一个数字代表色相（色相环角度），60度时为黄色。120度绿色。180度青色。240度蓝色。300度洋红色。360度红色。
第二个数数字代表饱和度。值为百分比。
第三个数字是亮度，值为百分比。 
hsla(255,90%,50%,0.8) 第四个数字是透明度
*/
{
  color: hsl(255,90%,50%);
}
```