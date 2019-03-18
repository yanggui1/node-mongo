var counter = function (arr) {
    return "一共有" + arr.length + '个元素在数组中';
}

var adder = function (a,b) {
    return `您需要计算的两个值得和为: ${a+b}`;
}

var pi = 3.142;

//module

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
}