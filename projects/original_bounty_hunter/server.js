var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

var uuid = require("uuid");


var bounties = [
	{
		firstName: "Boba",
		lastName: "Fett",
		living: true,
		bountyAmount: 20000,
		type: "Sith",
		id: "1"
	},
	{
		firstName: "Jango",
		lastName: "Fett",
		living: false,
		bountyAmount: 10000,
		type: "Sith",
		id: "2"
	},
	{
		firstName: "Obi-Wan",
		lastName: "Kenobi",
		living: true,
		bountyAmount: 100000,
		type: "Jedi",
		id: "3"
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
			return res.send(bounties);
		}
	})
});

app.delete("/bounties/:id", function (req, res) {

	bounties.forEach(function (bounty, index) {

		if (req.params.id === bounty.id) {

			bounties.splice(index, 1);
			return res.send(bounties);
		}
	})

});