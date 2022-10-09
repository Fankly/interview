## week2掌握知识点

#### day1 变量赋值什么时候传值、什么时候传地址

- 变量赋值的时候是原始数据类型的时候传的是值
- 变量赋值是对象类型的时候传的是地址

#### day1 对象通过索引增删改查

- 增
  - obj.新键 = 值

- 删
  - delete obj.旧键

- 改
  - obj.旧键 = 值

- 查
  - obj.旧键


#### day2 写出当对象的键是变量时为啥要用数组语法,不用会怎么样(注:和Object的区别特殊场景.mp4 这个视频)

- 因为对象的键是变量的时候使用数组语法,会解析变量,获取到对象正确的值,如果不使用数组语法,是不会进行变量解析,只会当成对象的键直接去对象中寻找,如果找不到,返回undefined

#### day2 数组通过索引增删改查语法

- 增
  - arr[新索引] = 值
- 删
  - arr.splice(索引,个数)
- 改
  - arr[旧索引] = 值
- 查
  - arr[旧索引]

#### day3 随机数公式

```js
Math.floor(Math.random() * (max - min + 1) - min)
```



#### day5 获取非行内样式的封装,offset、client、scroll的位置信息写出

```js
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(ele)[attr]
    } else {
        return ele.currentStyle[attr]
    }
}

```

- offset
  - 标签对象.offsetParent 
    - 获取最近定位父元素,没有就是body标签
  - 标签对象.offsetLeft/Top
    - 到最近定位父元素距离,没有就是body标签的距离
  - 标签对象.offsetWidth/Height
    - 元素宽高(width/height+padding\*2+border\*2)
- client
  - clientLeft/Top
    - 元素边框

  - clientWidth/Height
    - 元素宽高(width/height + padding * 2)
  - clientWidth + clientLeft * 2 = offsetWidth
- scroll
  - scrollLeft/Top 
    - 元素滚动的距离默认0,最大滚动距离=超出盒模型的内容也就是看不到的内容
    - 可以读取或设置元素滚动条到元素左边的距离/内容垂直滚动的像素数
  - scrollWidth/Height
    - 元素[总] = 元素高度 + 元素padding +超出盒模型的内容也就是看不到内容的高度scrollTop
    - 元素总宽度（含滚动条）

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

>Array.isArray([1, 2 ,3])     	 // true
>[1, 2 ,3] instanceof Array 	   // true
>[1, 2 ,3].constructor === Array // true
>
>Array.isArray('aa')     	 // false
>'aa' instanceof Array 	   // false
>'aa'.constructor === Array // false

#### 如何交换两个变量的值

- 临时变量法

  ```js
  var a = 1
  var b = 2
  var temp = a
  a = b
  b = temp
  ```

- 加减法

  ```js
  var a = 1
  var b = 2
  a = a + b
  b = a - b
  a = a - b
  ```

- 解构赋值法

  ```js
  var a = 1
  var b = 2
  [a,b] = [b,a]
  ```

- 数组法

  ```js
  var a = 1
  var b = 2
  a = [a,b]
  b = a[0]
  a = a[1]
  ```

- 对象法

  ```js
  var a = 1
  var b = 2
  a = {
      a:b,
      b:a
  }
  b = a.b
  a = a.a
  ```

  

#### 说出数组有哪些方法

- 数据操作
  - shift 删除第一个元素
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

- 数据操作 
  - shift 
  - unshift 
  - pop 
  - push

- 学习常用 
  - reverse 
  - splice

- 了解
  - sort


#### 如何实现数组去重  

- 通过es6新增的Set数据结构、和解构赋值去重     [...new Set(重复数组)]    week3

  ```js
  var arr = [1,2,3,2,3]
  console.log([...new Set(arr)])
  ```

  

- 通过filter配合indexOf实现数组去重

  ```js
  var arr = [1,2,3,2,3]
  arr.filter((item,index) =>{
      return index === arr.indexOf
  })
  ```

  

- 定义空数组，通过forEach遍历重复的数组，通过indexOf判断当前值是否在数组中，不在就push

  ```js
  var arr = [1, 2, 3, 2, 3]
  var arrNew = []
  arr.forEach(item => {
      if (arrNew.indexOf(item) === -1) {
          arrNew.push(item)
      }
  })
  
  console.log(arrNew)
  ```

  

- 定义空数组，通过forEach遍历重复的数组，通过includes判断当前值是否在数组中，不在就push

  ```js
  var arr = [1, 2, 3, 2, 3]
  var arrNew = []
  arr.forEach(item => {
      if (!arrNew.includes(item)) {
          arrNew.push(item)
      }
  })
  
  console.log(arrNew)
  ```

  

- 利用对象的属性去重

  ```js
  var arr = [1, 2, 3, 2, 3]
  var obj = {}
  var arrNew = []
  arr.forEach(item => {
      if (!obj[item]) {
          obj[item] = item
          arrNew.push(item)
      }
  })
  console.log(arrNew)
  ```

  


#### 说出字符串常用方法

- 数组、查找、替换、截取、大小、空格
  - split、find、replace、substr(索引,长度)、toUpperCase/toLowerCase、trim

- 学习
  - length属性 获取字符串的长度
  - lastIndexOf 
  - repeat(数量) 重复


####  JS如何去空格

- trim 中间不能去掉
- replaceAll
  - 'a b c'.replaceAll(' ','')
- 通过正则
  - "a b c".replace(/\s/g, '')

#### 伪数组

- 长得像数组，能用少部分的属性 例如length  但是所有方法都不可以使用，在js中常见的伪数组有

  document.querySelectorAll("选择器")、arguments等等

#### 谈谈你对this指向的理解

- 普通函数 window
- 对象函数 对象本身
- 事件函数 事件源
- 定时器函数 window
- 箭头函数 父function中this,父没有function就是window
- 自定义 call apply bind
- 构造函数 this === 实例化对象 === 公共空间/原型对象上的方法中的this
- 其他：事件、构造函数、公共空间/原型对象上方法-优先使用普通函数写法，当需要明确改变this指向的时候再换箭头函数，其他全部优先使用箭头函数

#### 图片懒加载原理

- 好处
  - 减少HTTP请求
- 原理
  1. 监控滚动条滚动
  2. 获取[可见内容]高度 = 默认可见视口 + 滚动高度(注:因为滚动了可以看到更多图片)
  3. 获取所有图片
  4. 遍历步骤3（或这说：遍历伪数组）
  5. 在步骤4中判断，图片.offsetTop <= 步骤2    成立-修改src属性为data-src、失败-不管
  6. 节流防抖优化

#### 性能优化：网站首屏加载过慢如何解决

```js
/*
	1.监视滚动条滚动
	2.计算可见内容高度 = 可视高度 + 滚动高度
	3.获取所有图片
	4.图片遍历
	5.判断图片.scorllTop <= 可见内容高度 改变src的地址
	6.节流和防抖
*/



function lazyLoad(){
     // 可视高度
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // 滚动高度
    const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop
    
    // 获取可见内容高度
    const viewContentHeight = viewHeight + scrollHeight
    
    //获取所有图片
    const imgs = document.querySelectorAll("img")
    
    //图片遍历
    imgs.forEach(item => {
        if(item.scrollTop <= viewContentHeight){
            item.src = item.dataset.src
        }
    })
}
// 缺点:需要滚动一下,才会更新图片,所以需要先执行一次
lazyLoad()
// 注意事项不要使用lazyLoad()这个代码执行lazyLoad函数
window.onScroll = lazyLoad
```



