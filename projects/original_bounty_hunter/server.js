var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var uuid = require("uuid");

var Bounty = function (fname, lname, living, bountyAmount, type) {
	this.firstName = fname;
	this.lastName = lname;
	this.living = living;
	this.bountyAmount = bountyAmount;
	this.type = type;
}

var bounties = []

app.listen(8000, function () {
	console.log("Listeing on Port 8000...");
})


app.get("/bounties", function (req, res) {

	res.send(bounties);

});

app.post("/bounties", function (req, res) {

	bounties.push(req.body);
	res.send(req.body);

});

app.put("/bounties/:id", function (req, res) {

	res.send(bounties)

});

app.delete("/bounties/:id", function (req, res) {

	res.send(bounties)

});