//文件系统

//1.引入文件系统模块
var fs = require('fs');

//2.通过对象调用方法
//var readme = fs.readFileSync('readme.txt','utf-8');//同步读取
//console.log(readme);

//fs.writeFileSync('writeme.txt',readme);

//异步读取文件
fs.readFile('readme.txt','utf-8',function(err,data){
    if (err) throw err;
    console.log(data);
});

fs.readFile('readme.txt','utf-8',function(err,data){
    if (err) throw err;
    fs.writeFile('writeme2.txt',data,function(err){
        if(err) throw err;
    });
});