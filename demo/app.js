var fs = require("fs");

let promise = fs.readFile("readme.txt");

promise.then(function(content){
    console.log(content);
});