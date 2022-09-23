## week0

### 谈谈你对typora的理解

- typora是一个md文档编辑器

### 写出typora的一级标题、二级标题、引号、代码、无序列表语法

- 一级标题
  - \#
- 二级标题
  - \##
- 引号
  - \>
- 代码
  - \`\`\`
- 无序列表
  - \-

### 谈谈你对vscode理解

- 用于前端开发代码的软件，术语编辑器

### 写出vscode常用插件

- live-server
- Auto close tag
- Auto Rename tag
- Code Runner
- 汉化插件
- px to rem 



## week1

### 面试题week1中的

#### 说出JS数据类型有哪些

- 原始类型
  - null 
  - undefined
  - boolean
  - number
  - string
  - symbol
  - bigInt
- 引用类型
  - 可调用/执行对象[函数]
    - function
  - 标准普通对象
    - object
  - 标准特殊对象
    - Array
    - Date
    - Math
    - RegExp
    - Error
  - 非标准特殊对象
    - Number
    - String
    - Boolean

#### JS引用类型object、array还有哪些

- 可调用/执行对象[函数]
  - function
- 标准普通对象
  - object
- 标准特殊对象
  - Array
  - Date
  - Math
  - RegExp
  - Error
- 非标准特殊对象
  - Nubmer
  - String 
  - Boolean

#### 如何把数据强制转换为数值类型

- parseInt
- parseFloat
- Number

#### 说出数据转换为布尔型的结果

- null,undefined,0,NaN,空字符串转换为false
- 其他的转换为布尔值都是true

#### 说出数据转换为字符串型的结果

- 内容+字符串
- String(内容)
- 内容.toString()

#### 说出数据转换为数值型的结果

- number(数据)

|      数据       |   结果    |
| :-------------: | :-------: |
|      null       |     0     |
|    undefined    |    NaN    |
|   true/false    |    1/0    |
|     123/NaN     |  123/NaN  |
| "" "123" "123a" | 0 123 NaN |



#### 说出下述隐式转换的结果

```js
var result = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false; // NaNTencentnull9false
[] + [] // ""
[] + {} // [object,Object]
{} + [] // 0
true + true  + true // 3
true - true // 0 
true == 1 //true
true === 1 //false
9+"1" //91
91-"1" //90
[]==0 // true Nubmer([]) 0

当对象类型进行类型转换时，会调用js内部一个方法toPrimitive， 此方法接收两个参数，一个参数为需要转换的对象，另一个方法接收一个期望类型，string或number。
当期望值为number时会调用valueOf方法，如果返回的值不是原始值，则继续调用toString方法。
当期望值为string时会调用toString方法，如果返回的值不是原始值，则继续调用valueOf方法。
```

#### null 和 undefined 有什么区别？

- undefined表示未定义,新定义的变量没有赋值就是undefined
- null表示清空,当一个变量不用的时候,除了等待网页的关闭,也可以把它赋值为null,此时浏览器会进行一个回收也就是清空内存

#### 为什么 0.1 + 0.2 !== 0.3? 你如何解决这个问题？

- 因为计算器底层进行计算的是否会把值转换为二进制,而0.1的二进制无法整除,而存储空间是有限的,但是位数是无限的,只能取一个近似值

#### 实战购物车小数计算精度丢失如何解决？

- 将两边同时乘以10的小数点位数的次方,进行运算,运算完成后,除以之前的10的小数点位数的次方
- es6的方法
  - es6提供了一个Number.EPSILON,这个值等于2^-52,无限等于0,我们判断这个误差值是否在这个范围内,就可以说明是相等的
  
    ```js
    function numbersequal(a,b){
     return Math.abs(a-b)<Number.EPSILON
    }
    var a = 0.1 + 0.2;
    var b = 0.3;
    console.log(numbersequal(a, b))
    // true
    ```
  
    
- 四舍五入法
  
  ````js
  function numToFixed(num){
      if(typeof num == 'number'){
          num = parseFloat(num.toFixed(10))
      }
      return num
  }
  
  numToFixed(0.1+0.2)
  ````
  
- 使用第三方库

  - math.js
  - bignumber.js



### 其他听写内容

#### day01 注释jsdoc(了解)

- 在.js文件中输入/**
- 或者使用jsdoc插件

#### day01 谈谈你对变量的理解,也就是什么是变量

- 变量就是临时存放数据的地方,网页关闭销毁

#### day02 什么是运算符、什么是表达式

- 运算符
  - 代码里面进行运算的时候使用的符号
- 表达式
  - n个符号,n个数字有意义的组合

#### day02 判断有几种,如何选

- 判断种类
  1. if...else
  2. switch
  3. 三元运算符
- 判断的选择
  - 什么时候用if
    - 常用于范围判断(固定值也行 而且可以控制 值相等和全等)
  - 什么时候使用switch(常用于固定值判断 超过3个)
    - 固定值判断 全等
    - break不写 case穿透 
    - 当小括号为true 可以范围判断
  - 什么时候使用三元运算符
    - 使用if...else想要减少代码行数

#### day03 循环有几种,如何选

- 循环种类
  - for循环
  - while循环
  - do...while循环
- 循环的选择
  - 当不确定循环次数的时候我们选择while循环和do...while循环,确定循环次数我们选择for循环
  - 如果需要无条件执行一次,我们选择do...while,反之选择while

#### day04 函数封装公式，比如利用函数封装随机数、获取非行内样式等等

```js
先写主体代码，然后写一个函数，把代码放进去，最后如果需要参数就加上参数（形参）,需要返回值就写返回值
1、先完成功能
2、搞一个空函数
3、将1放到2里面
4、微调（例如形参等)
```



#### day05 写出下述名词的理解 作用域、作用域链、全局变量、局部变量、生命周期

- 作用域
  - js变量可以用的区域
- 作用域链
  - 多个作用域的集合
  - 特性
    - 当变量没加var时,会先找自身的同名带var的
    - 找不到回去上一个作用域去找
      - 找到了直接修改
      - 找不到继续向上寻找
    - 直到找到顶级作用域
      - 找到了直接修改
      - 找不到自己创建修改
- 全局变量
  - 函数体外
  - 函数体内不写var(隐式声明)
  - 全局变量的生命周期
    - 网页关闭销毁
- 局部变量
  - 函数体内
  - 形式参数
  - 局部变量的生命周期
    - 随函数的调用而创建,随函数的销毁而销毁
