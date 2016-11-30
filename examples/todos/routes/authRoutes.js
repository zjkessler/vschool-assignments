var express = require("express");
var authRouter = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

// These routes deal specifically with how to create new users (signup) and log users in (login)

authRouter.post("/signup", function (req, res) {

    // When someone new signs up, we should first check if a user with that username already exists
    // Technically, the "unique: true" option in our user model does this too, but this way we can
    // have a little more control over the kind of message that gets returned when they try to register
    // a user with a username that's already taken
    User.find({username: req.body.username}, function (err, existingUsers) {
        if (err) return res.status(500).send(err);

        // Because .find() returns an array, no matter what it finds (if anything), we need to see if it
        // was able to find anything at all. If the array length ISN'T 0, that means it was able to find
        // a user with the username the person is trying to sign up with, meaning it's already been taken.
        if (existingUsers.length !== 0) {
            return res.status(400).send({success: false, message: "That username is already taken."});
        }

        // Otherwise, create the new user with the provided username and password!
        var user = new User(req.body);
        user.save(function (err, newUser) {
            if (err) return res.status(500).send(err);

            // Notice we're also sending along the user object here, just in case our frontend app needs
            // to use it, such as allowing it to display a message like "Welcome, Bill!"
            return res.send({success: true, message: "Registered a new user", user: newUser});
        });
    });
});

authRouter.post("/login", function (req, res) {

    // Try to find a user with both the provided username AND password.
    User.findOne({username: req.body.username, password: req.body.password}, function (err, user) {
        if (err) return res.status(500).send(err);

        // If it can't find a user with the provided username and password, return a response letting them
        // know they got something wrong.
        if (user === null) {
            return res.status(401).send({success: false, message: "Username or password provided does not match anything in our system."});
        }

        // If username and password both match an entry in the database,
        // create a JWT! Add the user object as the payload and pass in the secret.
        // This secret is like a "password" for your JWT, so when you decode it
        // you'll pass the same secret used to create the JWT so that it knows
        // you're allowed to decode it.
        var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});

        // Send the token and the user object to the client.
        res.send({token: token, user: user.toObject(), success: true, message: "Here's your token!"});
    });
});

module.exports = authRouter;