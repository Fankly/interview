function get(url, params, headers = {}) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let res = JSON.parse(xhr.responseText)
                    resolve(res)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.open("get", `${url}?${params}`)
        for (const key in headers) {
            xhr.setRequestHeader(key, headers[key])
        }
        xhr.send()
    })
    return p
}

function post(url, params, headers = {}) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let res = JSON.parse(xhr.responseText)
                    resolve(res)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.open("post", url)
        xhr.setRequestHeader(
            "content-type",
            "application/x-www-form-urlencoded"
        )
        for (const key in headers) {
            xhr.setRequestHeader(key, headers[key])
        }
        let temp = []
        for (let key in params) {
            temp.push(`${key}=${params[key]}`)
        }
        xhr.send(temp.join("&"))
    })
    return p
}
