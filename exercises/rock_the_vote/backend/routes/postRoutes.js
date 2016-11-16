var express = require("express");
var postRouter = express.Router();
var Posts = require("../models/posts");

//get all 
postRouter.get("/", function (req, res) {
	Posts.find(function (err, posts) {
		if (err) res.status(500).send(err);
		else res.send(posts)
	});
});

//get one
postRouter.get('/:postId', function (req, res) {
	Posts.findById(req.params.postId, function (err, post) {
		if (err) res.status(500).send(err);
		else res.send(post);
	})
});

//add new
postRouter.post("/", function (req, res) {
	var post = new Posts(req.body);
	post.save(function (err, newPost) {
		if (err) {
			res.status(500).send(err)
		} else {
			res.send(newPost);
		}
	})
})

//update
postRouter.put("/:postId", function (req, res) {
	Posts.findByIdAndUpdate(req.params.postId, req.body, {
		new: true
	}, function (err, newPost) {
		if (err) res.status(500).send(err);
		else res.send(newPost);
	})
})

//delete
postRouter.delete("/:postId", function (req, res) {
	Posts.findByIdAndRemove(req.params.postId, function (err, erasePost) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(erasePost);
		}
	})
})

postRouter.put("/:postId/comments", function (req, res) {

	Posts.findById(req.params.postId, function (err, newPost) {
		console.log(newPost);
		if (err) {
			return res.status(500).send(err);
		} else {
			newPost.comments.push(req.body);
			newPost.save(function (err, newPost) {
				if (err) {
					return res.status(500).send(err);
				} else {
					res.send(newPost);
				}
			})
		}
	});
});

module.exports = postRouter;