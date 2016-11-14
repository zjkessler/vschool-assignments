var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var cors = require("cors");

app.listen(8000, function () {
	console.log("listening on port 8000...")
});

var fruit = [{
	name: "apple",
	color: "red"
}, {
	name: "banana",
	color: "yellow"
}, {
	name: "strawberry",
	color: "red"
}, {
	name: "kiwi",
	color: "green"
}]

app.get("/fruits", function (req, res) {
	var newArr = [];
	for (var i = 0; i < fruit.length; i++) {
		if (fruit[i].color === req.query.color) {
			newArr.push(fruit[i])
		}
	}
	res.send(newArr);
});