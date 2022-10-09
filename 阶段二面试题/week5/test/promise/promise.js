function Promise(callback) {
    this.PromiseState = "pending"
    this.PromiseResult = undefined

    const resolve = res => {
        if (this.PromiseState !== "pending") {
            return
        }
        this.PromiseState = "fulfilled"
        this.PromiseResult = res
    }
    const reject = error => {
        if (this.PromiseState !== "pending") {
            return
        }
        this.PromiseState = "rejected"
        this.PromiseResult = error
    }
    try {
        callback(resolve, reject)
    } catch (error) {
        reject(error.toString())
    }
}

Promise.prototype.then = function (resolve, reject) {
    let data = undefined
    if (this.PromiseState === "fulfilled") {
        data = resolve(this.PromiseResult)
    }
    if (this.PromiseState === "rejected") {
        data = reject(this.PromiseResult)
    }
    // 链式调用
    return new Promise((resolve, reject) => {
        if (data instanceof Promise) {
            data.then(
                res => {
                    resolve(res)
                },
                error => {
                    reject(error)
                }
            )
        } else {
            resolve(data)
        }
    })
}
Promise.prototype.catch = function () {}
// 主要用于关闭loading
Promise.prototype.finally = function (callback) {
    callback()
}
Promise.resolve = function (data) {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}
Promise.reject = function (data) {
    return new Promise((resolve, reject) => {
        reject(data)
    })
}

Promise.all = function (arr) {
    return new Promise((resolve, reject) => {
        
    })
}

Promise.allSettled = function () {}

Promise.race = function (arr) {
    arr.forEach(item => {
        item.then(
            res => {
                resolve(res)
            },
            error => {
                reject(error)
            }
        )
    })
}
Promise.any = function () {}
