## week2掌握知识点

#### day1 变量赋值什么时候传值、什么时候传地址

- 变量赋值的时候是原始数据类型的时候传的是值
- 变量赋值是引用类型的时候传的是地址

#### day1 对象通过索引增删改查

- 增
  - obj.新键 = 值
- 删
  - delete obj.旧键
- 改
  - obj.旧键 = 值
- 查
  - obj.旧键
- 当键时变量的时候使用obj[变量名] 

#### day2 写出当对象的键是变量时为啥要用数组语法,不用会怎么样(注:和Object的区别特殊场景.mp4 这个视频)

- 

#### day2 数组通过索引增删改查语法

- 增
  - arr[新索引] = 值
- 删
  - arr.slice(索引,个数)
- 改
  - arr[旧索引] = 值
- 查
  - arr[旧索引]

#### day3 随机数公式

```js
Math.floor(Math.random() * (max - min + 1) - min)
```



#### day5 获取非行内样式的封装,offset、client、scroll的位置信息写出

## week2的面试题

#### 说出变量在内存中的分配

- 栈：存 原始类型【名字】&【数据】、对象类型的【名字】&【堆地址】
- 堆：对象类型数据

#### 说出变量赋值内存分配

- 原始类型：变量赋值，栈开辟内存直接存数据   ->  数据互不影响
- 对象类型：变量赋值，栈开辟内存，存放堆地址  -> 数据相互影响


#### 判断是否是数组

- 通过语法Array.isArray()
- instanceof
- 原型链(constructor)

#### 如何交换两个变量的值

- 临时变量法
- 加减法
- 解构赋值法
- 数组法
- 对象法

#### 说出数组有哪些方法

- 数据操作
  - shift 删除**第一个**元素
  - unshift 将元素添加到开头
  - pop
  - push
- 遍历操作
  - forEach
  - map 
  - filter 
  - find 
  - findIndex
- 工作常用
  - concat 
  - join
  - indexOf
  - includes
- 学习常用
  - reverse
  - splice
- 了解
  - sort

#### 说出数组哪些方法会改变原数据

- 数据操作 shift unshift pop push
- 学习常用 reverse splice
- 了解 sort

#### 如何实现数组去重  

- 通过es6新增的Set数据结构、和解构赋值去重     [...new Set(重复数组)]    week3
- 通过filter配合indexOf实现数组去重
- 定义空数组，通过forEach遍历重复的数组，通过indexOf判断当前值是否在数组中，不在就push
- 定义空数组，通过forEach遍历重复的数组，通过includes判断当前值是否在数组中，不在就push
- 利用对象的属性去重

#### 说出字符串常用方法

- 数组、查找、替换、截取、大小、空格
- split、find、replace、replaceAll、substr、subString、toUpperCase/toLowerCase、trim

####  JS如何去空格

- trim 只能去两边
- replaceAll
  - 'a b c'.replaceAll(' ','')
- 通过正则
  - 'a b c'.replace(/\s\g,'')

#### 伪数组

- 长得像数组，能用少部分的属性 例如length  但是所有方法都不可以使用，在js中常见的伪数组有

  document.qsa、arguments等等

#### 谈谈你对this指向的理解

- 普通函数 window
- 对象函数 对象本身
- 事件函数 事件源
- 定时器函数 window
- 箭头函数 父function中this,父没有function就是window
- 自定义 call apply bind
- 构造函数 this === 实例化对象 === 公共空间/原型对象上的方法中的this
- 其他：事件、构造函数、公共空间/原型对象上方法-优先使用普通函数写法，当需要明确改变this指向的时候再换箭头函数，
  其他全不优先使用箭头函数。

#### 图片懒加载原理

#### 性能优化：网站首屏加载过慢如何解决