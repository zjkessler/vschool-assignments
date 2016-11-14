var express = require("express");
var puppyRouter = express.Router();
var Puppy = require("../models/puppy");

puppyRouter.get("/", function(req, res) {

    // Use the Puppy model (from models/puppy.js)
    // to ask the database for ALL puppies in the "puppies" collection
    // The database will either return an error (having no puppies in the
    // database is NOT an error), OR it will return the array of puppies
    Puppy.find(function(err, puppies) {
        // handle the error, if it exists
        if (err) {
            // set the status of the response to 500 (server error)
            // and send the error object to the client
            res.status(500).send(err);

        // if everything went well...
        } else {
            // send the array of puppies to the client
            res.send(puppies);
        }
    });
});

puppyRouter.get("/:puppyId", function(req, res) {
    // Use mongoose's findById method to find a single puppy instance
    // by it's _id property
    Puppy.findById(req.params.puppyId, function(err, puppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(puppy);
        }
    });
});

puppyRouter.post("/", function(req, res) {
    // create a new puppy
    var puppy = new Puppy(req.body);
    // save the new puppy to the database
    puppy.save(function(err, newPuppy) {
        // handle the error, if it exists
        if (err) {
            res.status(500).send(err);
        } else {
            // send the newly created puppy back to the client
            res.send(newPuppy);
        }
    });
});

puppyRouter.put("/:puppyId", function(req, res) {
    // Use mongoose's findByIdAndUpdate method to find a single puppy instance
    // and update it with the new supplied info (found in req.body)
    // I've split each parameter to the method on its own line so you
    // can more easily see the comments, but it can be formatted however you want
    Puppy.findByIdAndUpdate(
        req.params.puppyId, // this is the _id of the puppy we're updating
        req.body, // this is the new puppy we want saved. It's okay if it's only
                  // the 1 or 2 properties we want changed - mongoose knows to keep the rest in tact
        {new: true}, // this is a "setting" that tells mongoose to send the new object (with the changes
                     // we just made) to the callback function on the next line. Otherwise, it defaults
                     // to sending the old object instead (for some reason I don't know).

        // The callback function like all the other method handlers in this file.
        function(err, newPuppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newPuppy);
        }
    });
});

puppyRouter.delete("/:puppyId", function(req, res) {
    // find the puppy we want to remove by its _id property and remove it
    Puppy.findByIdAndRemove(req.params.puppyId, function(err, soldPuppy) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(soldPuppy);
        }
    });
});

// Now that we've set up the puppyRouter the way we want, we need to export it
// so we can set it up as middleware in our server.js file
module.exports = puppyRouter;
