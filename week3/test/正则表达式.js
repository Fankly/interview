// 匹配检测是否是秋秋号，规则：5~11数字，首字母不能是0
const regQQ = /^[1-9]\d{4,10}$/g
let qq = "123456789101"

console.log(regQQ.test(qq));

// 匹配检测是否是手机号，规则：11数字，首字母不能是0
const regPhone = /^[1]\d{10}$/
let phone = "12345678910";
console.log(regPhone.test(phone))

// 匹配网站账号是否合法，规则：账号由5~12个数字、字母下划线组成，首字母不能是数字
const regAccount = /^\D\w{4,11}$/g
let account = "f12345678910";
console.log(regAccount.test(account))

// 邮箱验证
const regEmail = /^[1-9a-zA-Z]\w{5,17}@(qq|163|126|sina)\.(com|cn|net)$/
// 检测是内容是否为空
const regContent = /^[\s\w]{1,}$/;
let content = "z"
console.log(regContent.test(content));



// 检测是内容是否有空格
