//ach item will have a title
//Each item will have a description
//Each item can be upvoted or downvoted
//Items will be ordered by upvotes (the most being at the top).
//Each item should show the total number of votes

var mongoose = require("mongoose");


var postSchema = new mongoose.Schema({
	title: String,
	description: String,
	upVote: {
		type: Number,
		default: 0,
	},
	downVote: {
		type: Number,
		default: 0,
	},
	comments: [{
		comment: String
	}]
});

module.exports = mongoose.model("Post", postSchema);