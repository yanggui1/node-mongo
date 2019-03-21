// 引入express模块
var express = require("express");

// 实例化express对象
var app = express();

// 配置视图引擎
app.set("view engine", "ejs");

// 通过对象调用对应的方法

// 根据用户请求的地址，返回对应的数据信息
app.get("/", (req,res) => {
    console.log(req.url);
    res.sendFile(__dirname + '/index.html');
});

app.get("/contact", function(req,res){
    console.log(req.url);
    res.send("This is contact page!");
});

// 路由参数
app.get("/profile/:id",function(req,res){
    res.render("profile",{name:req.params.id});
});

// 监听服务器端口号
app.listen(8888);