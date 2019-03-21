var express = require("express");

var app = express();

app.use("/docs",express.static("docs"));

app.listen(8888);