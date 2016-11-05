//HTTp requests have 4 parts:
//1. URL
//2.Headers
//3.[BODY]
//4.Method(GET, POST, PUT, Delete)

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var puppies = [
	{
		name: "Fido",
		breed: "Beagle",
		id: 1
	},
	{
		name: "Hamilton",
		breed: "Labradoddle",
		id: 2
	},
	{
		name: "Emma",
		breed: "Bernese Mountain Dog",
		id: 3
	},
]

app.get("/", function (req, res) {
	res.send("Hi")
});

app.get("/puppies", function (req, res) {
	res.send(puppies);
});

app.post("/puppies", function (req, res) {
	puppies.push(req.body);
	res.send(req.body);
});
app.delete("/puppies/:puppyId", function (req, res) {
	console.log(req.params.puppyId);
	console.log(puppies);
});
//http:// localhost:8000

app.listen(8000, function () {
	console.log(" Server is listeing on port 8000");
});