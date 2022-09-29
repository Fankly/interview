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

> 面试：HTTP是超文本传输协议，规定了客户端和服务端如何通信，然后由两个部分组成分别是请求、响应
>
> 学习：就是一个规则，你必须按照这个规则才可以和后端交互拿数据

####  HTTP周边：HTTP动词(请求方式)

- get 查询数据
- post 增加数据
- put 修改数据
- delete 删除数据

####  HTTP周边：状态码

> 2xx  200 成功  201 成功并且服务器创建了新数据
>
> 3xx  301 站内跳转   302 站外跳转   304  浏览器缓存
>
> 4xx  400 你传递给后端的参数   401 密码错误  403 没有权限  404文件不存在  405 请求方式有误
>
> 5xx  500 服务器有误



#### HTTP周边：请求头参数

> ua(浏览器标识)、content-type、token、cookie

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
 * 发送get异步请求
 * @param {stirng} url 请求地址
 * @param {object} params 请求参数，格式  {参数名:数据,....,参数名:数据}
 * @param {function} callback 回调函数
 * @param {object} headers 自定义请求头   {键:值, token: '数据', 'content-type': '数据'}
 */
function get(url, params, callback, headers = {}) {
  // 一、创建xhr对象
  const xhr = new XMLHttpRequest();
  // 二、设置请求方式、请求地址
  let temp = [];
  for (let key in params) {
    temp.push(`${key}=${params[key]}`);
  }
  xhr.open("get", `${url}?${temp.join("&")}`);
  // 三、监听请求状态
  xhr.onreadystatechange = () => {
    // 判断返回
    if (xhr.readyState === 4) {
      // 判断状态
      if (xhr.status === 200) {
        // 获取数据
        let res = JSON.parse(xhr.responseText);
        // 逻辑处理
        // console.log(res);
        callback(res);
      } else {
        console.log(xhr.status);
      }
    }
  };
  // 四、发送
  for (let key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }
  xhr.send();
}
```

#### function+ajax+promise

```js
/**
 * 发送get请求
 * @param {stirng} url 请求地址
 * @param {object} params 请求参数
 * @param {object} headers 自定义请求头
 * @returns 
 */
function get(url, params, headers = {})
{
    const p = new Promise((resolve, reject) => {
        // 一、创建xhr对象
        const xhr = new XMLHttpRequest
        // 二、设置请求方式、请求地址
        let temp = []
        for (let key in params) {
            temp.push(`${key}=${params[key]}`)
        }
        xhr.open('get', `${url}?${temp.join('&')}`)
        // 三、监控请求状态
        xhr.onreadystatechange = () => {
            // 返回
            if (xhr.readyState === 4)
            {
                // 状态码
                if (xhr.status === 200)
                {
                    // 获取数据
                    let res = JSON.parse(xhr.responseText)
                    // 逻辑处理
                    // console.log(res)
                    resolve(res)
                } else {
                    // console.log(xhr.status)
                    reject(xhr.status)
                }
            }
        }
        // 四、发送请求
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key])
        }
        xhr.send()
    })

    return p  // 后期谁调用get就会拿到promise对象 通过then就可以获取数据 实现不同的业务逻辑
}
```

### day3

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
        // c 
const p = new Promise((resolve, reject) => {
	resolve(数据1)
	reject(数据2)
})

```

#### 说一下promise为什么状态不可逆

> 底层Promise构造函数中会先判断当前是否是pending(进行中状态),不会就会终止代码执行,所以不可逆

#### 说一下promise状态之间怎么转换

> 通过promise的then机制，来实现状态切换
> const p = new Promise((resolve, reject) => {
> 	resolve(数据1)
> })
>
> p
> .then(res => {
> 	return Promise.resolve('失败的')
> })

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
    - 一个跨域的解决方案，需要前端后端一起配合
    - JSONP方案后端：得返回调用函数，函数的实参是JSON数据格式
    - JSONP方案前端：不能用ajax技术请求，而是改成script引入接口
  - websocket
  - postMessage
    - 监控iframe加载完毕
    - 通过postMessage H5 新增的API 推送数据

#### 谈谈你对 同步异步的理解

>会被加入到浏览器队列的代码称之为异步代码，例如  ajax、setTimeout/setInterval、Promise.then 等等
>
>按照书写顺序执行打印的代码称之为同步代码

#### 谈谈你generator的理解

> es6新增的语法(异步编程解决方案)，通过*号修饰函数，当调用函数的时候返回一个generator对象，通过next函数迭代获取函数内部的数据，当遇到yield就会暂停，再次写next才会继续

- yield无赋值
  - yield会暂停代码需要next()才会继续向下执行
  - yield会返回数据
    - 数据格式{value:yield后面的数据,done:true/false}
      - done
        - true generator函数走完了 也就是遇到return
        - false generator函数还没走完还有代码
- yield有赋值
  - yield后面的数据不管结果是什么都默认赋值undefined ;但是下一个next的实参可以改变【上一个yield赋值结果】

#### 谈谈你对async，await的理解

> async和await是generator的语法糖,通过async修饰function,await修饰Promise,底层将await后面的表达式先执行一遍,再将await下一行代码加入到微任务中
>
> await作用:将promise中的then或者catch取出
>
> async和await封装原理:generator函数+执行器(基于generator封装)
>
> 函数只要加async就返回promise对象


#### 说出浏览器运行机制

> 浏览器主进程:负责创建和销毁tab进程、负责交互前进后退、负责网页文件下载等
>
> 渲染进程：每个tab对应一个渲染进程，下面有GUI渲染线程、JS引擎线程、事件线程、定时器线程、异步请求线程
>
> GPU进程：负责3D图绘制
>
> 第三方插件进程：负责第三方插件处理，例如跨域、广告拦截插件等

#### 说出浏览器输入网址干了啥

> 浏览器输入网址回车
> 去DNS服务器找网址对应的IP地址 
> 根据IP地址加端口访问服务器软件 
> 服务器返回数据
> 浏览器通过renderer渲染进程处理，
> 其中GUI线程负责页面渲染、JS引擎线程负责解析JS代码

#### 说出JS为什么是单线程

> 进程：是cpu分配资源的最小单位；（是能拥有资源和独立运行的最小单位）
>
> 线程：是cpu调度的最小单位；（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）
>
> #### 浏览器是多进程的
>
> 放在浏览器中，每打开一个tab页面，其实就是新开了一个进程，在这个进程中，还有ui渲染线程，js引擎线程，http请求线程等。 所以，浏览器是一个多进程的
>
> js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题

#### 说出JS是单线程 为什么不存在执行效率问题

> JS是单线程执行程序代码，形成一个执行栈，挨个处理；
>
> 但是遇到特别耗费时间的代码 ，例如异步请求，事件等
>
> 不会堵塞等待执行，而是交给浏览器其他线程处理后，再丢到执行栈中处理，从而保证还行效率

#### 谈谈你对Event Loop的理解

> `Event Loop`即事件循环
>
> 是指浏览器或`Node`的一种确保javaScript单线程运行时不会阻塞的一种机制，
>
> 也就是我们经常使用**异步**的原理。    
>
> 种类：浏览器的Event Loop、Node.js中的Event Loop

#### 谈谈你对浏览器的Event Loop理解

> 浏览器输入网址服务器响应数据后，
>
> 浏览器会通过render进程开始解析工作
>
> GUI线程负责页面渲染
>
> JS引擎线程负责执行JS代码
>
> 遇到异步代码会交给其他线程处理，然后放到队列中，
>
> 事件循环主要是从队列中取出代码放到执行栈中交给js引擎线程处理

#### 说出宏任务、微任务各有哪些

> 宏任务:Script整体代码、setTimeout、setInterval、I/O操作(DOM事件、AJAX异步请求)、setImmediate(node环境)、requestAnimationFrame(浏览器环境)
>
> 微任务:Promise.then、catch 、finally、async/await（底层还是promise）、process.nextTick（node环境） 、MutationObserver（浏览器环境）

#### 说出先执行宏任务还是微任务

- 算整体代码script：1宏n微
- 不算整体代码script：先n微，再1宏 ->  n微，再1宏 ->  n微

#### 谈谈你对Symbol的理解(了解)

> es6中用来生成独一无二的值,他有很多的属性和方法,可以用来改变数组是否展开,以及给for...of提供消费的接口等
>
> 给对象增加一个独一无二的属性,正常的方法获取不到

#### 如何获取Symbol属性(了解)

> Object.getOwnPropertySymbols(obj)
>
> Reflect.ownKeys(obj)
>
> 或者通过Symbol.for创建

### day5

#### 前端存储有几种

> 常用的2种，主要是cookie、h5存储；浏览器其实还有web sql、indexdb
>
> H5
> cookie
> web sql
> indexdb

#### cookie和h5的区别

- 性能角度
  - 相对而言H5存储性能比COOKIE高
- 存储空间
  - H5单条数据5M左右、COOKIE单条数据4KB
- 生命周期
  - cookie 自己设置,如果不设置浏览器关闭销毁
  - localStorage 永久
  - sessionStorage 窗口

#### h5可以存储对象类型吗(拓展)

> h5不可以存储对象类型,但是可以使用JSON.stringify()转换成字符串,这样就可以存储

#### 如何实现localStorage7天过期

```js
doucment.cookie.  1*1000*60*60*24*7(设置的世界时间)


login.html

步骤1：存数据的时候 也额外存一个键叫 expires  记录时间
	localStorage.setItem('uname', 'value')
	localStorage.setItem('expires', (new Date).getTime() + 1*1000*60*60*24*7 )
member.html
步骤2：使用的时候增加判断
	// 公式：当前使用时间 > 存储时间 （过期了）
	// 举例：比如你是2月1号存 
	// 然后：你加了7天  2月8号过期
	// 最后： 2月5号 > 2月8号   不成立 没过期
	// 最后： 2月11号 > 2月8号  成立  过期
```

#### 如何实现七天免登录

1. 登录的时候存一个时间       当前时间+7天时间戳

   ```js
   localStorage.setItem('uname', 'value')
   localStorage.setItem('expires', (new Date).getTime() + 1*1000*60*60*24*7 )
   ```

2. 后期用的时候判断是否过期

   ```js
   <h1>会员中心</h1>
   
   <div></div>
   
   <script>
   // 获取
   // let localUname = localStorage.getItem('uname')
   // 明确：上一行代码有瑕疵
   // 因为：永久
   // 解决：加时间判断
   // let localUname = 当前时间>存储时间 ? 过期了null : 没过期使用
   // 分析：
   // 存储时间：今天8.1登录 存7天   8.8不可以
   // 当前时间：8.1    8.3   8.6   8.9
   
   let localUname = (new Date).getTime()>localStorage.getItem('expires') ? null : localStorage.getItem('uname')
   let sessionUname = sessionStorage.getItem('uname')
   
   let uname = localUname || sessionUname
   // 判断
   if (uname)
   {
       document.querySelector('div').innerHTML = `<h1>${uname}</h1><a href="./logout.html">退出</a>`
   } else {
       document.querySelector('div').innerHTML = `<a href="./login.html">登录</a>`
   }
   </script>
   ```

#### 登录是如何实现的

> 步骤1：登录按钮绑定点击事件
>
> 步骤2：事件处理函数中  获取表单数据，请求接口
>
> 步骤3：失败-弹框提示，成功-存储、提示、跳转