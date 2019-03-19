var fs = require("fs");
var http = require("http");

var server = http.createServer((req,res) => {
    if (req.url !== "/favicon.ico") {
        console.log("客户端正在发送请求: "+req.url);
        res.writeHead(200,{"Content-type":"text/html"});
        var myhtml = fs.createReadStream(__dirname+"/index.html");
        myhtml.pipe(res);

    }
});

server.listen(3000,"10.112.32.59");
console.log("server is running >>>");