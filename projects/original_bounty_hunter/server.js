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

var bounties = [
	{
		firstName: "Boba",
		lastName: "Fett",
		living: true,
		bountyAmount: 20000,
		type: "Sith",
		id: uuid.v4()
	},
	{
		firstName: "Jango",
		lastName: "Fett",
		living: false,
		bountyAmount: 10000,
		type: "Sith",
		id: uuid.v4()
	},
	{
		firstName: "Obi-Wan",
		lastName: "Kenobi",
		living: true,
		bountyAmount: 100000,
		type: "Jedi",
		id: uuid.v4()
	},
]

app.listen(8000, function () {
	console.log("Listening on Port 8000...");
})


app.get("/bounties", function (req, res) {

	res.send(bounties);

});

app.post("/bounties", function (req, res) {

	var bounty = req.body;
	bounty.id = uuid.v4();
	bounties.push(bounty);
	res.send(bounties);

});

app.put("/bounties/:bountyId", function (req, res) {
	bounties.forEach(function (bounty, index) {

		if (req.params.bountyId === bounty.id) {
			bounties[index] = req.body;
			console.log(bounties[index])
			res.send(bounties);
		}
	})
});

app.delete("/bounties/:id", function (req, res) {

	bounties.forEach(function (bounty, index) {

		if (req.params.id === bounty.id) {

			bounties.splice(index, 1);
			res.send(bounties);
		}
	})

});