/**
 * get请求方式
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @param {Object} headers
 */
function get(url, params, callback, headers = {}) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText)
                callback(res)
            } else {
                console.log(xhr.status)
            }
        }
    }
    for (const key in headers) {
        xhr.setRequestHeader(key, headers[key])
    }
    xhr.open("get", `${url}?${params}`)
    xhr.send()
}

/**
 * post异步请求方式
 * @param {String} url
 * @param {Object} params
 * @param {Function} callback
 * @param {Object} headers
 */
function post(url, params, callback, headers = {}) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText)
                callback(res)
            } else {
                console.log(xhr.status)
            }
        }
    }
    for (const key in headers) {
        xhr.setRequestHeader(key, headers[key])
    }
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.open("post", url)
    xhr.send(params)
}
