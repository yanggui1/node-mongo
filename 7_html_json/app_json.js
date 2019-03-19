var fs = require("fs");
var http = require("http");

var server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"application/json"});
    var jsonData = fs.createReadStream(__dirname + "/person.json");

    jsonData.pipe(res);
});

server.listen(3000,"127.0.0.1");
console.log("server is running >>>");