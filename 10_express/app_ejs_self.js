var express = require("express");

var app = express();

app.set("view engine","ejs");

app.get("/",(req,res) => {
    console.log(req.url);
    res.sendFile(__dirname + "/index.html");
});

app.get("/open/:id",(req,res) => {
    console.log(req.url);
    var data = [{age:29,name:["Henry","Tony"]},{age:20,name:["Monkey","Elyse","John"]}];
    res.render("profile_self",{websiteName:req.params.id,data:data});
});

app.listen(8888);