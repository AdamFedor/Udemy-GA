Array.prototype.map = function (callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr;
}

String.prototype.reverse = function () {
    var newStr = '';
    for (var i = this.length - 1; i >= 0; i--) {
        newStr += this[i]
    }
    return newStr;
}