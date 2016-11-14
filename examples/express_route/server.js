var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join()));
app.use()

app.get("/fruits", function (req, res) {

});

app.get("/fruits/:fruitId", function (req, res) {});
app.post("/fruits", function (req, res) {});
app.put("/fruits/:fruitId", function (req, res) {});
app.delete("/fruits/:fruitId", function (req, res) {});