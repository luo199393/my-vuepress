### git

``` md
// 初始化git
git init
// 建立远程连接
git remote add origin [ssh]
// 断开远程连接
git remote remove origin  

// 从远程仓库下载项目
git clone [ssh]
```

``` md
// 拉取远程更新
git pull origin <branch>
// 相当于
git fetch origin master:tmp
git diff tmp
git merge tmp  

// 将文件放入暂存区，可重复添加
git add ./
// 将暂存区文件提交至本地仓库
git commit -m "注释"
// 将本地仓库文件提交至远程仓库
git push origin <branch>
// 强制性提交并覆盖远程仓库(慎用)
git push -f origin <branch>

// 将某一提交在另一版本再次提交
git cherry-pick <commitId>
```

``` md
// 查看仓库状态
git status
// 查看提交历史
git log
// 查看命令历史
git reflog
```

``` md
// 创建本地分支并切换
git checkout -b <new branch>
// 相当于
git branch <new branch>
git checkout <new branch>

// 版本合并
git merge <目标branch>
// 删除本地分支
git branch -d <branch>
// 删除远程分支
git push origin --delete <branch>
```

``` md
// 查看暂存修改文件
git stash list
// 暂存(只能同时暂存一次文件)
git stash
// 恢复暂存
git stash prop
```

``` md
// 版本回退
git reset —-hard HEAD^  // 上个版本是HEAD^,上上个版本是HEAD^^
// 版本回退到指定版本
git reset <commitId>
// 撤销修改
git checkout --
// 撤销暂存区的修改
git reset HEAD  

// 删除版本库中的文件
git rm <file>
```