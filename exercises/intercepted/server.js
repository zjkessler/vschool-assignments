var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var middleware = require("./middleware.js");
app.use("/middle", middleware);

app.listen(8000, function () {
	console.log("listening on port 8000...")
})

app.get("/middle", function (req, res, next) {
	res.send(req.middleware);
	next();

})