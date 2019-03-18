var addFun = function (a, b) {
    return a+b;
}

var subFun = function (a,b) {
    return a-b;
}

var mulFun = function (a,b) {
    return a*b;
}

var divFun = function (a,b) {
    return a/b;
}

module.exports = {
    Add : addFun,
    Sub : subFun,
    Mul : mulFun,
    Div : divFun
}