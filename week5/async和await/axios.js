/**
 * 发送get请求
 * @param {stirng} url 请求地址
 * @param {object} params 请求参数
 * @param {object} headers 自定义请求头
 * @returns
 */
function get(url, params, headers = {}) {
    const p = new Promise((resolve, reject) => {
        // 一、创建xhr对象
        const xhr = new XMLHttpRequest()
        // 二、设置请求方式、请求地址
        let temp = []
        for (let key in params) {
            temp.push(`${key}=${params[key]}`)
        }
        xhr.open("get", `${url}?${temp.join("&")}`)
        // 三、监控请求状态
        xhr.onreadystatechange = () => {
            // 返回
            if (xhr.readyState === 4) {
                // 状态码
                if (xhr.status === 200) {
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

    return p // 后期谁调用get就会拿到promise对象 通过then就可以获取数据 实现不同的业务逻辑
}

/**
 * 发送post请求
 * @param {stirng} url 请求地址
 * @param {object} params 请求参数
 * @param {object} headers 自定义请求头
 * @returns
 */
function post(url, params, headers = {}) {
    const p = new Promise((resolve, reject) => {
        // 一、创建xhr对象
        const xhr = new XMLHttpRequest()
        // 二、设置请求方式、请求地址
        xhr.open("post", url)
        // 三、监控请求状态
        xhr.onreadystatechange = () => {
            // 返回
            if (xhr.readyState === 4) {
                // 状态码
                if (xhr.status === 200) {
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
        xhr.setRequestHeader(
            "content-type",
            "application/x-www-form-urlencoded"
        )
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key])
        }

        let temp = []
        for (let key in params) {
            temp.push(`${key}=${params[key]}`)
        }
        xhr.send(temp.join("&"))
    })

    return p // 后期谁调用get就会拿到promise对象 通过then就可以获取数据 实现不同的业务逻辑
}
