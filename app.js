var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.render("index");
});

app.get("/category", function(req, res) {
    res.render("category");
});

app.get("/product", function(req, res) {
    res.render("product");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});



app.listen(3000);