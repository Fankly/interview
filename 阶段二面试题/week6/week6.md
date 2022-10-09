### XHR、$.get、$.ajax区别

#### 问题1:XMLHttpRequest和JQ代码的区别

- 相同点
  - 都可以发送异步请求
- 不同点
  - JQ是基于XMLHttpRequest封装了
    - 更简单
    - 解决兼容问题

#### 问题2:$.get、$ajax区别

- 一样,唯一区别$.ajax比$.get语法上更强

### jq操作

- 获取标签
  - CSS选择器、筛选选择器、过滤选择器等
- 操作标签
  - 样式css方法、类addClass、属性attr/prop、内容val/html、节点append/remove
- 事件
  - $().事件类型()     $().on(事件类型，子，处理函数)
- 异步请求
  - $.get、$.post、$.ajax
- 动画
  - $.animate() 
- 网页加载完毕
  - $(function(){})    （留心：和window.onload区别 
- 对象相互转换
  - $()[索引]   或者  $(JS标签对象