function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(ele)[attr]
    } else {
        return ele.currentStyle[attr]
    }
}