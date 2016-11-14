var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var logger = require("morgan");
var uuid = require("uuid");

var app = express();
var port = 9000;

app.use(bodyParser.json());
app.use(cors());
app.use(logger("dev"));

app.use(express.static("../frontend"));

var bounties = [{
    firstName: "Rey",
    lastName: null,
    living: true,
    amount: 1000000,
    type: "Jedi",
    id: uuid.v4()
}, {
    firstName: "Luke",
    lastName: "Skywalker",
    living: true,
    amount: 10000000,
    type: "Jedi",
    id: uuid.v4()
}];

app.get("/bounties", function (req, res) {
    console.log("bounties");
    res.send(bounties);
});


app.post("/bounties", function (req, res) {
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);
});

app.put("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i].id) {
            bounties[i] = req.body;
            res.send(bounties[i]);
        }
    }

});
app.delete("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i].id) {
            var deleted = bounties[i];
            bounties.splice(i, 1);
            res.send(deleted);
        }
    }

});

app.listen(port, function () {
    console.log("You got served on port " + port);
});