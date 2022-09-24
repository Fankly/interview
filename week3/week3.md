## week3

#### 谈谈你对事件流机制的理解  

- 术语
  - 事件发生时会在元素节点之间按特点顺序传播,这个传播过程就是事件流

- 学习
  - 多个标签嵌套,事件触发-会检查当前标签,然后继续向上查询祖先标签有没有事件,有就触发事件,触发的现象就是事件流
- DOM事件流分为三个阶段
  - 捕获阶段
    - 事件从document节点自上而下向目标节点传播的阶段
  - 目标阶段
    - 真正的目标节点正在处理事件的阶段
  - 冒泡阶段
    - 事件从目标阶段自下而上向document节点传播的阶段

#### 谈谈你对事件委托的理解

- 概念
  - 利用事件冒泡机制处理指定一个事件处理程序,来管理某一类型的所有事件
- 事件委托的好处
  - 利用冒泡的原理,将事件加到父级身上,这样只在内存中开辟一块空间,节省资源又减少DOM操作,提高性能
  - 可以为动态的添加元素绑定事件

#### 正则

- 匹配手机号
  - /^[1]\d{10}$/
- 匹配邮箱
  - /^\w{2,20}@\w{2,20}.(com | org | cn | edu)$/
- 匹配中文
  - /[\u4e00-\u9fa5]+$/
- 去所有空格
  - str.replaceAll(' ','')
  - str.replace(/\s/g,'')
- 购物车
  - str.replace(/\D/g,'')

#### es6新增语法

- 修饰符

  - let、const

- 解构赋值 一次性创建多个变量

  - 数组解构
    - let [变量名=默认值, 变量名=默认值, 变量名=默认值]= [变量,...变量]
  - 对象解构
    - let{键:变量名=默认值,...,键:变量名=默认值} = {键:值,...,键:值}

- 字符串新增语法

  - 模板字符串
  - indexOf
  - includes

- 函数新增语法

  - 箭头函数
  - 默认值
    - 形参=默认值
    - rest参数(剩余参数)

- 对象新增语法

  - 简写

    - 函数名(){}

  - 链判断操作符 ?

    ```js
    (a?.b).c
    // 等价于
    (a == null ? undefined : a.b).c
    ```

    

  - 空判断操作符 ??

    ```js
    //读取对象属性的时候，如果某个属性的值是null或undefined，有时候需要为它们指定默认值
    const animationDuration = response.settings.animationDuration ?? 300;
    ```

    

- 新增数据类型

  - bigInt
  - symbol

- 其他

  - 展开运算符 
    - 主要用来合并数据
  - 数据结构
    - Set
    - Map
  - 循环
    - for...of 主要遍历新的数据结构 字符串 数组
  - 模块化
    - export
      - 批量导出
        - export 修饰符 变量名 = 数据
      - 一次性导出
        - 修饰符 变量名 = 数据
        - export {变量名,...变量名}
    - import (1.导出什么名字,导入必须一样   2.必须走http   3.scrpt标签必须加type="module")
      - import {变量名,...变量名 as 别名}  from "导出的路径文件名"
  - class

#### es6常见问题汇总

- 新增了哪些数据
  - bigInt
  - symbol
- 新增的数据属于哪些哪一类
  - 原始类型
- 数组去重
  - Set
  - filter+indexOf
  - forEach+indexOf
  - forEach+includes
  - 对象
- 新增数据类型有哪些分别有什么用
  - Set去重
  - Map对象的键不限于字符串

#### let、const

- 面试题1 let和const区别
  - let和const都是块作用域/不能重复定义
  - 不同点
    - let修改
    - const不能修改
- 面试题2 const不能修改吗
  - 原始类型 不可以
  - 对象类型 可以
  - const类型指向的是对象类型的地址值,所以可以修改对象类型的值
- 面试题3 暂时性死区
  - let前面的区域就是暂时性死区,必须先定义再使用
- 面试题4 let和const选择
  - 一般使用let、明确后期不改用const 例如Date,promise对象等
- 面试题5 var和let区别
  - var 函数作用域 可以重复定义 可以修改
  - let 块级作用域 不能重复定义 可以修改

#### bind 和 call/apply 的区别

- fun.call(thisArg,param1,param2,...)
- fun.apply(thisArg,[param1,param2,...])
- fun.bind(thisArg,param1,param2,...)
- 是否立刻执行
  - call和apply改变了函数的this上下文之后马上执行该函数
  - bind则是返回改变了上下文后的函数,不执行该函数
- 返回值区别
  - call/apply 返回 fun的执行结果
  - bind返回fun的拷贝,并指定了fun的this指向,保存了fun的参数 

#### 手写bind/call/apply 原理

apply和call

```js
 Function.prototype._execFn = function (thisArg, otherArgs) {
            thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)
            thisArg.fn = this
            thisArg.fn(...otherArgs)
            delete thisArg.fn
        }
Function.prototype.call = function(thisArg,...otherArgs) {
    execFn(thisArg,otheArgs,this)
}

Function.prototype.apply = function(thisArg,otherArgs){
    execFn(thisArg,otherArgs)
}
```

bind

```js
 Function.prototype._bind = function (thisArg, ...otherArgs) {
            thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)
            thisArg.fn = this
            return (...newArgs) => {
                var allArgs = [...otherArgs,newArgs]
                thisArg.fn(...allArgs)
                delete thisArg.fn
            }
        }
```

