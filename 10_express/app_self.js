var express = require("express");

var app = express();

app.get("/",(req,res) => {
    res.send("This is home page !");
});

app.get("/contact",(req,res) => {
    res.send("This is contact page !");
});

app.get("/profile/:id", function(req,res){
    res.send("您请求的参数为: " + req.params.id);
});

app.listen(8000);
