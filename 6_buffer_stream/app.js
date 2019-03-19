var http = require("http");
var fs = require("fs");
// 读取文件流
// var myReadStream = fs.createReadStream(__dirname + "/readme.txt","utf-8");

// 写入文件流
// var myWriteStream = fs.createWriteStream(__dirname + "/writeme2.txt")
// console.log(myReadStream);

// myReadStream.pipe(myWriteStream);

// var times= 0;
// myReadStream.on("data",(chunk) => {
//     times ++ ;
//     console.log("----------正在接受 " + times + " 部分数据---------");
//     // console.log(chunk);
//     //写入数据
//     myWriteStream.write(chunk);
// });

var server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/plain"});
    var myReadStream = fs.createReadStream(__dirname + "/readme.txt","utf-8");
    myReadStream.pipe(res);
});

server.listen(8888,"127.0.0.1");
console.log("server is running >>>");