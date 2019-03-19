var fs = require("fs");
var http = require("http");

/* //stream实现读取和存入
var myReadStream = fs.createReadStream(__dirname + "/readme.txt","utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");
myReadStream.on("data",(chunk) => {
    console.log(chunk);
    myWriteStream.write(chunk);
});
*/

/* //pipe实现存储
var myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeme2.txt");

myReadStream.pipe(myWriteStream);
*/

//http请求

var server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/plain"});
    fs.createReadStream(__dirname + "/readme.txt", {encoding: 'utf8'}).pipe(res);
});

server.listen(8888,"127.0.0.1");
console.log("server is running >>>");
