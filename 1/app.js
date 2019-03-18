// console.log("Hello NodeJS!");

// setTimeout(function(){
//     console.log("3 seconds have passed");
// },3000);

// var time = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' second have passed')

//     if(time > 4) {
//         clearInterval(timer);
//     }
// },2000);

//路径

// console.log(__dirname); //不包含文件名
// console.log(__filename);//包含文件名

// //global
// console.log(global);

//require

var stuff = require('./stuff');
console.log(stuff.counter(['1','2','3']));
console.log(stuff.adder(5,6));
console.log(stuff.pi);