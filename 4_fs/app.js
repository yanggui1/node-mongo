//1.引入文件系统模块
var fs = require("fs");

// 2.使用模块对象调用方法
// fs.unlink("writeme2.txt",(err) => {
//     if(err) {
//         console.error(err.message);
//     } else {
//         console.log("文件删除成功");
//     }
// });

// 创建文件夹 同步
// try{
//     fs.mkdirSync("stuff");
// }catch(err){
//     console.error(err.message);
// }

// //删除文件夹 同步
// fs.rmdirSync("stuff");

// 异步创建和删除文件夹
// fs.mkdir("stuff",(err) => {
//     if(err) {
//         console.error(err.message);
//     }else {
//         fs.readFile("readme.txt","utf-8",(err,data) => {
//             if(err) {
//                 console.error(err.message);
//             }else{
//                 fs.writeFile("./stuff/writeme.txt",data,(err) => {
//                     if(err) {
//                         console.error(err.message);
//                     }else {
//                         console.log("文件写入成功");

//                     }
//                 })
//             }
//         })
//     }
// })

// 异步删除文件夹
// 1.先删除文件夹中的文件 2.再删除外部的文件夹

fs.unlink("./stuff/writeme.txt", (err) => {
    if(err) {
        console.error(err.message);
    }else {
        fs.rmdir("stuff", (err) => {
            if(err) {
                console.error(err.message);
            }else{
                console.log("文件夹删除成功");
            }
        });
    }
});


