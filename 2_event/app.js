//事件模块

//1.引入事件模块
var events = require('events');

//2.创建EventEmitter对象
var myEmitter = new events.EventEmitter();

//3.注册事件
myEmitter.on('someEvent',function(msg){
    // ES6箭头函数
    // setImmediate(() => {
    //     console.log(msg + " 异步实现");
    // });

    setImmediate(function(){
        console.log(msg + " 异步实现");
    });
});

//4.触发事件
myEmitter.emit("someEvent","实现事件并传递此参数到注册函数的回调函数中");

console.log(1);