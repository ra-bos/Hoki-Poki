var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.render("index");
});

app.get("/product", function(req, res) {
    res.render("product");
});

app.listen(3000);