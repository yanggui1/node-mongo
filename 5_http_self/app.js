// 引入http模块创建本地http服务器对象
var http = require("http");

//创建服务器方法
var server = http.createServer((req,res) => {
    console.log("接受到请求: "+req.url);
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Server is working!");
});

server.listen(8888,"127.0.0.1");
console.log("server is running >>>");