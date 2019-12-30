### 常用sql语句

>插入一条数据
``` sql
insert into 表名 (列名1,列名2,列名3) values(内容1,内容2,内容3);
```

>删除一条数据
``` sql
delect from 表名 where 删除条件;
```

>修改一条数据
``` sql
update 表名 set 列名=新值 where 更新条件;
```

>修改一条数据
``` sql
update 表名 set 列名=新值 where 更新条件;
```

>查询语句数据
``` sql
-- 普通查询
select 列名 from 表名 [查询条件];
-- 按特定条件查询（ 例如 =、>、<、>=、<、!= 以及一些扩展运算符 is [not] null、in、like ）
select 列名 from 表名 where 条件; 
-- 典型的模糊查询
select 列名 from 表名 where 列名 like concat('%','a','%'); 
-- 查询时把 limit 放在查询的最后面,分页查询
select 列名 from 表名 limit 要查的数据序号((当前页数-1)*页面大小),页面大小; 
-- 按照指定列名 ORDER BY 升序排列
select 列名 from 表名 order by 列名; 
-- 按指定列名 倒序排列
select 列名 from 表名 order by 列名 desc;  

/*模糊查询 + 倒序排列 + 分页查询*/
select * from tb_user where userName like concat('%','a','%') order by userId desc limit 0,2;
```
``` sql
/*联表查询：*/

/*内联： inner join */
/*一般我们写成：*/ select * from table1,table2 where 1.userId = 2.userId; 
/*高效率写法：*/ select * from table1 inner join table2 on 1.userId = 2.userId;
	
/*左联： left outer join */
/*显示左表 T1 中的所有行，并把右表 T2 中符合条件加到左表 T1 中；右表 T2 中不符合条件，就不用加入结果表中，并且 NULL 表示*/
select * from table1 left outer join table2 on 1.userId = 2.userId; 

/*右联： right outer join */
/*显示右表 T2 中的所有行，并把左表 T1 中符合条件加到右表 T2 中；左表 T1 中不符合条件，就不用加入结果表中，并且 NULL 表示*/
select * from table1 right outer join table2 on 1.userId = 2.userId;
		
/*全联： full outer join */
/*显示左表 T1 、右表 T2 两边中的所有行，即把左联结果表 + 右联结果表组合在一起，然后过滤掉重复的*/
select * from table1 full outer join table2 on 1.userId = 2.userId;
```

>创建表
``` sql
create table 表名 (
id INT(10) NOT NULL AUTO_INCREMENT,
name varcher(50) NOT NULL,
day DATE,
...
);
```

>删除表
``` sql
drop table 表名;
```

>修改表
``` sql
-- 添加一个列
alter table 表名 add 列名 列数据类型 [after 插入位置];
-- 修改一个列
alter table 表名 change 列名 新列名 新数据类型;
-- 删除一个列
alter table 表名 drop 列名;
-- 重命名
alter table 表名 rename 新表名;
```

>删除数据库
``` sql
drop database 数据库名称;
```  

参考: [常用 SQL 语句（ MySQL ）](https://github.com/FatliTalk/blog/issues/37)