## week5

### day1

#### 输入网址浏览器干哈了（简单版)

1. 打开浏览器输入网址回车
2. 去DNS服务器找网址对应的IP地址
3. 找不到【无法访问此网站】找到了【根据ip地址去请求服务器】
4. 服务器返回数据
5. 【浏览器解析】

- 留心
  - 浏览器其实返回的是index.html的数据，然后在解析的过程中，遇到link、script、img等 再次发送请求拿数据然后解析

#### 谈谈你对HTTP理解

```js
面试：HTTP是超文本传输协议，规定了客户端和服务端如何通信，然后由两个部分组成分别是请求、响应

学习：就是一个规则，你必须按照这个规则才可以和后端交互拿数据
```



####  HTTP周边：HTTP动词(请求方式)

- get 查询数据
- post 增加数据
- put 修改数据
- delete 删除数据

####  HTTP周边：状态码

```js
2xx  200 成功  201 成功并且服务器创建了新数据
3xx  301 站内跳转   302 站外跳转   304  浏览器缓存
4xx  400 你传递给后端的参数   401 密码错误  403 没有权限  404文件不存在  405 请求方式有误
5xx  500 服务器有误
```



#### HTTP周边：请求头参数

```js
ua(浏览器标识)、content-type、token、cookie
```



#### HTTP周边：强制缓存、协商缓存

- 强制缓存:文件直接从本地缓存中后去,不需要发送请求

> 响应头  Cache-Control : 86400
>
> expires

- 协商缓存/对比缓存

>在响应头部 `Response Headers` 中，**有两种资源标识：**
>
>- `Last-Modified` 资源的最后修改时间，对应请求头为 `If-Modified-Since` ；
>- `Etag` 资源的唯一标识，所谓唯一，可以想象成时人类的指纹，具有唯一性；但 `Etag` 的本质是一个字符串；对应请求头为 `If-None-Match` 。
>
>**Last-Modified 和 Etag**
>
>- 当响应头部 `Response Headers` 同时存在 `Last-Modified` 和 `Etag` 的值时，会优先使用 `Etag` ；
>- `Last-Modified` 只能精确到秒级；
>- 如果资源被重复生成，而内容不变，则 `Etag` 更精确

```js
请求行/响应行：method、url、status

请求头headers、cookie、content-type、ua、if-none-match、if-modified-since 
请求体：请求参数

响应头：content-type 告诉浏览器如何解析数 、etag、last-modified、 Cache-Control...
响应体：响应的数据
```

#### get和post有什么区别

>安全角度：post相对比get安全    原因get会在地址栏 因为在地址栏就有访问历史记录  post请求体不会存在来留痕
>数据角度：post相对传输的数据比get多      get会受到不同浏览器地址栏长度限制，post服务器配置
>
>
>上传图片：2M 一般只能上传png、jpg  gif不允许

#### 谈谈你对http、https的理解，有什么区别

```js
http超文本通讯协议	80
https也是超文本通讯协议  相对http更加安全  443
```

### day2

#### 谈谈你对骨架屏的理解(视频)

- 骨架屏就是在页面数据尚未加载前先给用户展示出页面的大致结构，直到请求数据返回后再渲染页面，补充进需要显示的数据内容
- 常用于文章列表、动态列表页等相对比较规则的列表页面。 很多项目中都有应用:ex:饿了么h5版本,知乎,facebook等网站中都有应用

#### 谈谈你对节流防抖的理解(视频)

- 节流防抖都是用来进行项目优化

- 节流

  - 一段时间内只执行一次

  ```js
  let timer = null
  标签对象.oninput = function(){
      if(timer){
          return 
      }
      timer = setTimeout(() =>{
          console.log(1)
          timer = null
      },3000)
  }
  ```

- 防抖

  - 一段时间内可重复执行,但是要把之前的取消掉

  ```js
  let timer = null
  标签对象.oninput = function(){
      if(timer){
          clearTimeout(timer)
      }
      timer = setTimeout(()=>{
          cosole.log(this.value)
           timer = null
      },1000)
  }
  ```

#### 谈谈你对高阶函数的理解

- 简而言之，高阶函数是那些将其他函数作为参数或返回其他函数的函数。在高阶函数中作为参数传递的函数被称为回调

高阶函数的优势

- 它们可以帮助我们写出简洁的代码
- 由于是简洁的代码，调试工作会更加容易

现在 JavaScript 有一些内置的高阶函数，你可能已经在不知不觉中就使用它们了，例如 `filter()`、`reduce()`、`sort()` 和 `forEach()`。

#### function+ajax+callback

```js
/**
 * 发送GET请求
 * 技术栈：function + ajax + callback
 * @param {String} url 请求地址 
 * @param {String} params 请求参数   格式：参数名=值&....&参数名=值
 * @param {Function} callback  回调函数
 * @param {Function} headersFn 自定义请求头
 * @return undefined
 */
function get(url, params, callback, headersFn = null)
{
    // 一、 创建xhr对象
    const xhr = new XMLHttpRequest
    // 二、 监听请求状态
    xhr.onreadystatechange = function() 
    {
        // 判断后端返回数据后再处理
        if (xhr.readyState === 4)
        {
            // 判断返回的状态200成功在处理
            if (xhr.status === 200)
            {
                // 获取数据
                let res = JSON.parse(xhr.responseText)
                // 不同逻辑处理
                callback(res)
            } else {
                console.log('请求失败：', xhr.status);
            }
        }
    }
    // 三、 设置请求方式，请求地址
    // xhr.open('get', `请求地址?请求参数`)
    xhr.open('get', `${url}?${params}`)

    if (headersFn) headersFn(xhr)
    
    // 四、 发送
    xhr.send(null)
}
```

### day3(视频)

#### 谈谈你对promise的理解

- 概念：ES6异步编程解决方案
- 作用：常用于封装ajax异步请求

#### 说一下promise原理

- 底层创建了Promise构造函数，并且给该构造函数绑定了then、catch、finally等原型方法，和reject、resolve、all、race、allSettled、any等静态方法。

#### 说一下promise几个状态

- 进行中、成功了、失败了

```js
const p = new Promise((resolve, reject) => {
	// 发送异步请求
	// 默认触发的  所以是进行中状态
})


追问:为什么状态不可逆
回答:底层Promise构造函数中会先判断当前是否是pending(进行中状态),不会就会终止代码执行,所以不可逆
// 明确：底层Promise源码大概是这么写的
function Promise(callback) {

    this.PromiseState = 'pending'
    this.PromiseResult = undefined
    
    const resolve = data => {
        if (this.PromiseState != 'pending') return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = data
    }
    const reject = error => {
        if (this.PromiseState != 'pending') return
        this.PromiseState = 'rejected'
        this.PromiseResult = error
    }

    try {
        // callback(参数1, 参数2)
        // callback(() => {}, () => {})
        callback(resolve, reject)
    } catch(error) {
        reject(error.toString())
    }
}

// 然后：你写
const p = new Promise((resolve, reject) => {
	resolve(数据1)
	reject(数据2)
})

追问:状态之间怎么转换
回答：通过promise的then机制，来实现状态切换
const p = new Promise((resolve, reject) => {
	resolve(数据1)
})

p
.then(res => {
	return Promise.resolve('失败的')
})
```

#### Promise.all、Promise.allSettled区别

-  Promise.all( 数组里面是一个个Promise对象 )     有一个失败就走失败
  - 使用场景
    - 添加、或删除等两个异步请求都成功了，再提示成功（极端场景少）
    - 微信小程序上传图片都成功才成功，有一个不行就不行
  - 面试
    - 如何保证两个接口都请求成功，再弹框提示添加成功
-  Promise.allSettled( 数组里面是一个个Promise对象 )      没有失败

#### Promise.race、Promise.any区别

-  Promise.race( 数组里面是一个个Promise对象 )    根据第一个最快返回的决定状态
  - 底层场景
    - ajax异步请求封装，添加用户点击多次发送多个异步请求   第一个成功，后续都取消请求
- Promise.any( 数组里面是一个个Promise对象 )     有一个成功就是then 都失败 才是catch

### day4

#### 跨域相关

- 跨域导致原因
  - 概念
    - 当请求一个url的协议、域名、端口三者之间任意一个与当前页面url不用即为跨域
  - 原因
    - 浏览器安全策略/同源策略
  - 后果
    - 不能跨网站操作发送ajax请求、WEB存储等]
- 跨域解决方案
  - 前端代码 http-proxy-middleware
  - 谷歌插件
  - 谷歌命令
  - jsonp
  - websocket
  - postMessage
    - 监控iframe加载完毕
    - 通过postMessage H5 新增的API 推送数据

#### 谈谈你对 同步异步的理解

- 会被加入到浏览器队列的代码称之为异步代码，例如  ajax、setTimeout/setInterval、Promise.then 等等
- 按照书写顺序执行打印的代码称之为同步代码

#### 谈谈你对async，await的理解(视频)

- 

#### 谈谈你generator的理解(视频)

#### 说出浏览器运行机制

#### 说出浏览器输入网址干了啥

#### 说出JS为什么是单线程

#### 说出JS是单线程 为什么不存在执行效率问题

#### 谈谈你对Event Loop的理解(视频)

#### 谈谈你对浏览器的Event Loop理解(视频)

#### 说出宏任务、微任务各有哪些(视频)

#### 说出先执行宏任务还是微任务(视频)

### day5

#### 前端存储有几种

#### cookie和h5的区别

#### 如何实现localStorage7天过期

#### 如何实现七天免登录

#### 登录是如何实现的