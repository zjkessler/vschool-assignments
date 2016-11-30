//run Mongod first in seperate window to intialize MONGODB

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 9000;
var config = require('./config');
var expressJwt = require("express-jwt");
var util = require('./utilities')

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join("./public/")));

app.listen(port, function () {
	console.log(`Listening on port ${port}...`);
});

//routes\\
app.use("/api", expressJwt({
	secret: config.secret
}));
//app.use("/admin", expressJwt({
//	secret: config.secret
//}), adminCheck)
app.use("/api/user", require("./routes/person_routes"));
app.use("/auth", require("./routes/auth_routes"));

//database connection\\
mongoose.connect(config.database, function () {
	console.log("Connected to the database");
});