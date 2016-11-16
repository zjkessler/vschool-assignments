//run Mongod first in seperate window to intialize MONGODB

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 9000;
var cors = require("cors");


app.use(bodyParser.json());

//connect front to back end\\
//express.static to look at the file your index is in\\
app.use(express.static(path.join("../public/")));

app.listen(port, function () {
	console.log(`Listening on port ${port}...`);
});
//routes\\
app.use("/posts", require("./routes/postRoutes"));
//database connection\\
mongoose.connect("mongodb://localhost/rockVote", function () {
	console.log("Connected to the database");
});
