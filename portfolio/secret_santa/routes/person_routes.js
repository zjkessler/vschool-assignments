 var express = require("express");
 var personRouter = express.Router();
 var Person = require("../model/person")

 personRouter.route("/")
 	.get(function (req, res) {
 		Person.find({
 			user: req.user._id
 		}, function (err, user) {
 			if (err) res.status(500).send(err);
 			res.send(user);
 		})
 	})
 	.post(function (req, res) {
 		var person = new Person(req.body);
 		console.log(person);
 		person.user = req.user._id;
 		person.save(function (err, newUser) {
 			if (err) res.status(500).send(err);
 			res.status(201).send(newUser);
 		})
 	})

 personRouter.route("/:userId")
 	.get(function (req, res) {
 		Person.findOne({
 			_id: req.params.userId,
 			user: req.user._id
 		}, function (err, user) {
 			if (err) req.status(500).send(err);
 			res.send(user);
 		})
 	})
 	.put(function (req, res) {
 		Person.findOneAndUpdate({
 			_id: req.params.userId,
 			user: req.user._id
 		}, req.body, {
 			new: true
 		}, function (err, updatedUser) {
 			if (err) req.status(500).send(err);
 			res.send(updatedUser);
 		})
 	})
 	.delete(function (req, res) {
 		Person.findOneAndRemove({
 			_id: req.params.userId,
 			user: req.user._id
 		}, function (err, deletedUser) {
 			if (err) req.status(500).send(err);
 			res.send(deletedUser);
 		})
 	})

 module.exports = personRouter;