// 需求：封装getParams方法获取指定get数据格式参数

// https://search.jd.com/Search?keyword=%E8%A2%9C%E5%AD%90&enc=utf-8&pvid=f53def08af8246b3a7102eafda916991
// decodeURI(地址)
// https://search.jd.com/Search?keyword=袜子&enc=utf-8&pvid=f53def08af8246b3a7102eafda916991

// 1 按照问号划分成数组然后获取后面的get数据格式参数
// let params = decodeURI(location.href).split('?')[1]
let params = decodeURI(location.href).split("?").pop() // 参数名=数据&....&参数名=数据
// 2 按照【&】划分成数组  ['参数名=数据', ...]
// 3 遍历 for 遍历  item='参数名=数据'
// 4 按照【=】划分成数组 temp=[参数名,数据]
// 5 判断
