var express = require('express');
var authRouter = express.Router();
var User = require('../model/user');
var jwt = require("jsonwebtoken");
var config = require('../config')

authRouter.post("/signup", function (req, res) {
	User.find({
		username: req.body.username
	}, function (err, existingUsers) {
		if (err) return res.status(500).send(err);
		if (existingUsers.length !== 0) {
			return res.status(400).send({
				success: false,
				message: "that username is already taken."
			});
		}
		var user = new User(req.body);
		user.save(function (err, newUser) {
			if (err) return res.status(500).send(err);
			return res.send({
				success: true,
				message: "New user created!",
				user: newUser
			});
		});
	});
});

authRouter.post("/login", function (req, res) {
	//unhash
	User.findOne({
		username: req.body.username,
		password: req.body.password
	}, function (err, user) {
		if (err) return res.status(500).semd(err);
		if (!user) {
			return res.status(403).send({
				success: false,
				message: "Username or password does not match anything in our system."
			})
		}
		var token = jwt.sign(user.toObject(), config.secret, {
			expiresIn: "24h"
		});
		res.send({
			token: token,
			user: user.toObject(),
			success: true,
			message: "Here's your token!"
		});

	})
})



module.exports = authRouter;