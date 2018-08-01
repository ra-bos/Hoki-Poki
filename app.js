var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// General Routes
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

// Admin routes
app.get("/admin", function(req, res) {
    res.render("admin");
});



app.listen(3000);