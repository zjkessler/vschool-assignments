var express = require("express");
var blogRoutes = express.Router();
var Blog = require("../models/blog");

// Because of the app.use("/blog", blogRoutes) line in server.js,
// I don't need to specify the "/blog" part anymore. Instead, I can
// just specify what comes AFTER the "/blog" part now.

// This is when a GET or POST request comes in to "/blog":
blogRoutes.route("/")

    // When there's an incoming GET request to "/blog":
    .get(function (req, res) {

        // Since I'm not providing any search parameters to the .find method,
        // it will find EVERYTHING in the blogs collection in the database.
        Blog.find(function (err, blogs) {

            // If the database has some kind of error while trying to read.
            // This DOESN'T include if there are no blogs in the blogs collection
            if (err) return res.status(500).send(err);

            // Send the array of blogs to the client, even if it's an empty array
            res.send(blogs);
        });
    })

    // When there's an incoming POST request to "/blog":
    .post(function (req, res) {

        // Create (instantiate) a new blog document using mongoose's Blog model
        // This model is like a constructor that creates new MongoDB documents
        // What we pass in (req.body) is the object we want turned into a Mongo document
        var newBlog = new Blog(req.body);

        // Save the new document to the database...
        newBlog.save(function (err) {
            if (err) return res.status(500).send(err);

            // ...and send it back to the client
            res.send(newBlog);
        });
    });

// Now we're dealing with incoming requests to "/blog/<some blog ID here>"
blogRoutes.route("/:id")

    // Incoming GET to "/blog/<blog id>" should get ONE blog.
    .get(function (req, res) {

        // Special shortcut method to find a single document based on the id passed in
        // Notice we use whatever ID was in the URL of the request, the ":id" from the
        // route above
        Blog.findById(req.params.id, function (err, blog) {
            if (err) return res.status(500).send(err);

            // The blog that was found (if any) with the specified id
            res.send(blog);
        });
    })

    // Update this one blog
    .put(function (req, res) {

        // Special method that finds the blog and updates it all in one db operation
        Blog.findByIdAndUpdate(

            // The ID of the blog to update
            req.params.id,

            // The updated version of the blog to replace the existing one with
            // (This will keep old properties if you didn't include them in req.body)
            req.body,

            // An option - asking that the next callback function give us back
            // the NEW version of the blog, with all the updated info we just added
            // Otherwise it'll give you the old one, even though it really updated
            // it in the database. Not sure why this isn't the default
            { new: true },

            // Once the above operation is finished, run this function.
            // The "blog" parameter below is the new, updated blog since
            // we added the {new: true} option above.
            function (err, blog) {
                if (err) return res.status(500).send(err);

                // Send the new version of the blog to the client
                res.send(blog);
            });
    })

    // Delete this one blog
    .delete(function (req, res) {

        // Another helpful method that finds and deletes a blog all in one operation
        Blog.findByIdAndRemove(req.params.id, function (err, blog) {
            if (err) return res.status(500).send(err);

            // Send the deleted blog back to the user, in case they need
            // to do something with it on their end for some reason.
            res.send(blog);
        });
    });

// This route ("/blog/<blogID>/comment") deals with comments
// of this one particular blog.
blogRoutes.route("/:id/comment")

    // Push a new comment to the comments array of this one blog
    .post(function (req, res) {
        Blog.findByIdAndUpdate(

            // The id of the blog we're adding a comment to
            req.params.id,

            // Using the underlying MongoDB driver (which mongoose is built
            // on top of) to push something to the comments array of the blog
            // The only reason we're doing this is so that we don't have to
            // include the ENTIRE blog entry (with only one new comment added
            // to the comments array), which allows our request body to be smaller
            // (imagine if this blog entry had 10,000 words and 500 comments, and
            // all we want to do is add a single comment. Updating the entire
            // blog object would be a lot of extraneous info to pass to the db)
            {$push: {comments: req.body}},

            // Give us the new, updated blog in the callback function please!
            { new: true },
            function (err, blog) {
                if (err) return res.status(500).send(err);
                res.send(blog);
        });
    });

// This is the route ("/blog/<blog id>/comment/<comment id>")
// to deal with a specific comment from that specific blog.
blogRoutes.route("/:id/comment/:commentId")

    // Update one comment from this one blog
    .put(function(req, res) {
        Blog.findById(req.params.id, function(err, blog) {
            if (err) return res.status(500).send(err);

            // Since there is an array of comments, we need a way to find
            // the correct one. MongoDB gave an "_id" property to every
            // comment in the comments array, and mongoose gives us the
            // ".id()" method to help us find the correct one.
            var comment = blog.comments.id(req.params.commentId);

            // Now that we have the correct to update, we use mongoose's
            // ".set" method to change it to the comment we submitted in
            // the request body. (It knows to keep any properties we didn't
            // include too!)
            comment.set(req.body);

            // We've updated the comment, and now we need to save the parent
            // object (the blog document) to the database with this new change
            // included
            blog.save(function(err) {
                if (err) return res.status(500).send(err);
                res.send(blog);
            });
        });
    })

    // Delete the one comment from the one blog
    .delete(function(req, res) {
        Blog.findById(req.params.id, function(err, blog) {
            if (err) return res.status(500).send(err);

            // Again, we use the ".id" method to find the correct comment
            // from the array of comments
            var comment = blog.comments.id(req.params.commentId);

            // Use the mongoose ".remove()" method to remove (splice) it
            // from the array
            comment.remove();

            // Save the blog
            blog.save(function(err) {
                if (err) return res.status(500).send(err);
                res.send(blog);
            });
        });
    });

// Export the router so it can be set up as middleware on the server.js file.
module.exports = blogRoutes;
