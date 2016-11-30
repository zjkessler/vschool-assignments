var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());

// When we get to doing the frontend, we'll put it in a folder called
// 'public' and we'll let express serve up the static files for us.
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database");
});

// Make the app use the express-jwt authentication middleware on anything starting with "/api"
app.use("/api", expressJwt({secret: config.secret}));

// The "/api" at the beggining of this route makes it so incoming requests
// must go through the express-jwt middleware before accessing any todos.
app.use("/api/todos", require("./routes/todoRoutes"));

// We can't have this starting with /api, because otherwise express-jwt would require
// the user to be logged in. But how can they log in if they're required
// to be logged in?! They can't, so we don't begin these routes with /api.
app.use("/auth", require("./routes/authRoutes"));

app.listen(port, function () {
    console.log("Server listening on port " + port);
});
