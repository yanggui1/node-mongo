var fs = require('fs');

// var data = fs.readFileSync('readme.txt','utf-8');

// console.log(data);

// fs.writeFileSync("writeme.txt",data);


fs.readFile("readme.txt","utf-8",(err,data) => {
    if (err) throw err;
    fs.writeFile("writeme2.txt",data,function(){
        
    });
})


