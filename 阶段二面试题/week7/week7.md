### 说出几个常用的git命令

#### 说出git工作流,说一下你们日常的开发工作流

- git flow
  - 功能分支 -> 合并到dev分支
  - dev分支 -> 合并到release分支
  - release分支 -> 合并到master分支

#### 说下git如何解决代码冲突

- pull
- status、手动解决
- 重新add/commit/push

#### 说一下你在开发登陆时,线上出现bug了如何维护

- 基于master创建hotfix分支,解决了再push并merge到master、dev上

#### 克隆获取的是默认分支代码，如何获取其他分支代码

- git checkout -b 分支名 分支名

#### 用过哪些git图形化可是软件 

- 编辑器、sourcetruee等等

#### 说下git和svn区别 

- git是分布式、svn是集中式
- svn相对容易冲突等