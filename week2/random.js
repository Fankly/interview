
function randomSum(min, max) {
    if (min > max) {
        let temp = max
        max = min
        min = temp
    }
    return Math.floor(Math.random() * (max - min + 1) - min);
}
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))
console.log(randomSum(0, 1))

