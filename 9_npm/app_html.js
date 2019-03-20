var fs = require("fs");
var http = require("http");

var server = http.createServer((req,res) => {
    if (req.url !== "/favicon.ico") {
        console.log("客户端正在发送请求: "+req.url);
        // 判断用户所访问的页面地址

        if (req.url === "/home" || req.url === "/"){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname+"/index.html").pipe(res);
        } else if (req.url === "/concat") {
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname+"/concat.html").pipe(res);
        } else if (req.url === "/api/docs") {
            var data = [{name:"Henry",age:30}, {name:"Bucky",age:28}];
            res.writeHead(200,{"Content-type":"application/json"});
            res.end(JSON.stringify(data));
        }
    }
});

server.listen(3000,"10.112.32.59");
console.log("server is running >>>");