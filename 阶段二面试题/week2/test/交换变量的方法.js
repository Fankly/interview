// 临时变量法
/* var a = 1
var b = 2
var temp = a
a = b 
b = temp */

// 加减法
/* var a = 1
var b = 2
a = a + b
b = a - b
a = a - b */

// 解构赋值法
/* var a = 1 
var b = 2
[a, b] = [b, a] */

// 数组法
/* var a = 1
var b = 2
a = [a, b]
b = a[0]
a = a[1] */

// 对象法
var a = 1
var b = 2
a = {
    a: b,
    b: a
}
b = a.b
a = a.a
