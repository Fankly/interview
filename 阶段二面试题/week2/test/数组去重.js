/* 
    方式一
*/
var arr = [1, 2, 3, 2, 3]
console.log(...new Set(arr))

/* 
    方式二
*/
var newArr = arr.filter((item, i) => {
    return i === arr.indexOf(item)
})

console.log(newArr)

/* 
    方式三
*/
var arrNew = []
arr.forEach(item => {
    if (arrNew.indexOf(item) === -1) {
        arrNew.push(item)
    }
})
console.log(arrNew)

/* 
    方式四
*/

var newArrOne = []
var obj = {}
arr.forEach(item => {
    if (!obj[item]) {
        obj[item] = item
        newArrOne.push(item)
    }
});

var arr = [1, 2, 3, 2, 3]
var newArrTwo = []
arr.forEach(item => {
    if (!newArr.includes(item)) {
        newArr.push(item)
    }
})
console.log(newArr)







