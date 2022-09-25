## week4

### 原型、原型链概念

- 原型
  - JavaScript给每个函数分配的公共空间,减少内存占用
- 原型链
  - 多个原型的集合,当调用对象的属性或方法时,先找自身,如果自身没有找到,去原型链上找,一直找到Objec构造函数的原型链
    - 对象的属性在原型链上没有找到,返回一个undefined
    - 对象的方法在原型链上没有找到,报错


### 构造函数new干了啥

- 创建一个obj空对象
- 给obj增加\_\_proto\_\_属性并且指向构造函数的prototype
- 将构造函数this中的数据全部放入到obj对象中
- 返回obj对象

```js
function _new(constructorFn){
    //创建一个obj空对象
    let obj ={}
    //给obj增加\_\_proto\_\_属性并且指向构造函数的prototype
    obj.__proto__ = constructorFn.prototype
    //获取将前两个合并成一个表达式
    //let obj = Object.create(constructorFn.prototype)
    //将构造函数this中的数据全部放入到obj对象中
    constructorFn.call(obj)
    //返回obj对象
    return obj
}
```



### 箭头函数与普通函数区别？能不能作为构造函数

### 更精确判断数据类型

- typeof

  - typeof 原始类型：除了null是object其他都是自身

  - typeof 对象类型：除了function是function其他都是object

  - 缺点

    - 无法根据不同类型做不同逻辑处理

  - 解决办法

    - Array.isArray()等等单独处理

    - 也可以统一处理

      - 语法

        - Object.prototype.toString.call(数据)
          - 返回的数据格式
            - [object 数据类型]

        ```js
        function getType(data){
            let result = Object.prototype.toString.call(data)
            //return result.subStr(8,result.length -1 -8)
            return result.slice(8,-1)
        }
        ```

        

### Object构造函数上有哪些语法

- 重要
  - Object.defineProperty()
  - Object.keys() 获取对象所有的key 返回数组
  - Object.values() 获取对象所有的值 返回数组
  - Object.create() 创建对象 （特色 基于指定原型造对象     场景1：new原理优化，场景2：三阶段vue ）
- 记忆
  - 属性
    - Object.prototype.constructor 所属构造函数
  - 方法
    - Object.assign() 合并对象
    - Object.prototype.toString() 转字符串