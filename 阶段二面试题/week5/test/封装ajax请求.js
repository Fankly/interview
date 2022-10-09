function get(url, params) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText);
            } else {
                console.log(xhr.status);
            }
        }
    };
    xhr.open("get", `${url}?${params}`);
    xhr.send(null);
}
