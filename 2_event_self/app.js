//引入
var events = require('events');

//创建实例化对象
var myEmitter = new events.EventEmitter();

//注册
myEmitter.on("eventName",function(msg){
    setImmediate(function(){
        console.log(msg);
    });
    console.log(2);

})

//触发
myEmitter.emit("eventName","Hello NodeEvent");

console.log("1");