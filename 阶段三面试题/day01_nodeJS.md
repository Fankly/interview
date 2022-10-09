### 写出你对node的理解

> node是一个基于 Chrome V8 引擎开发的 JS 环境

### 写出通过node解析a.js的命令

> node 路径及文件名.js
>
> node a.js

### 写出node模块的概念

> 1.一个js文件就是一个模块
>
> 2.必须通过exports或者module.exports导出成员/数据

### 写出node模块的种类

> 自定义模块、官方模块、第三方模块

### 写出node模块遵循的规范

> commonJS模块化
>
> 1.一个文件就是一个模块
>
> 2.并且文件通过module.exports/exports导出成员/数据
>
> 3.后续使用const 变量名 =require("路径及模块名")

### 随便写一个自定义模块，然后写出解析的命令

```js
exports.random = function(min,max){
    return Math.floor(Math.random() * (max - min + 1) - min)
}

const utilsObj = require("./utils")
tuilsObj.random(2,5)
```

### 随便选一个官方模块，然后写出解析的命令

```js
const http = require("http")

const app = http.createServer((req,res)=>{
    if(req.url === "/login"){
        res.end("this is login")
    }
    res.end("404")
})

app.listen(3000,()=>{
    console.log("启动成功,请访问","http://localhost:3000")
})
```

### 写出下述需求命令

#### 下载指定模块在项目require语法

> npm install 模块名@版本号 -S/-D
>
> const 变量名 = require("路径及模块名")

#### 下载指定模块语法

> npm install 模块名

#### 根据package.json下载全部模块语法

> npm install

#### 下载指定模块在命令行敲命令的语法

> npm install 模块名@版本号 -g

#### 查看npm配置信息语法

> npm config list
>
> npm config list -l

#### 下载cnpm语法

> npm install cnpm -g

#### cnpm配置淘宝服务器语法

> cnpm config set registry https://registry.npm.taobao.org

### 写出前端公共CDN服务三个网址

> jsdelivr.com
>
> unpkg.com
>
> unpkg.zhimg.com

### 写出自定义脚本命令使用步骤、和好处

> 修改package.json中的script中的键,键如果是start,在命令行输入时可以省略run
>
> 好处:后期项目启动需要敲很多命令,可以使用自定义脚本命令简化