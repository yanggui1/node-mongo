var express = require("express");

var app = express();

app.set("view engine","ejs");

// 让服务器识别外部样式表
app.use("/assets",express.static("assets"));

app.get("/",(req,res) => {
    console.log(req.url);
    res.render("index");
});

app.get("/contact",(req,res) => {
    console.log(req.url);
    res.render("contact");
});

app.get("/open/:id",(req,res) => {
    console.log(req.url);
    var data = [{age:29,name:["Henry","Tony"]},{age:20,name:["Monkey","Elyse","John"]}];
    res.render("profile_self",{websiteName:req.params.id,data:data});
});

app.listen(8888);