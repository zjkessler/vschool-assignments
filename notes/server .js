var express = require("express");

var app = express();

app.get("/", function (req, res) {
	console.log(req);
	res.send({
		message: "you did it!",
		success: true
	})
});

app.listen(8000, function () {
	console.log("Server is running on port 8000")
});