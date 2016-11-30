var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	username: {
		required: true,
		type: String,
		unique: true,
		lowercase: true
	},
	password: {
		required: true,
		type: String
	},
	isAdmin: {
		default: false,
		required: true,
		type: Boolean
	}

});

module.exports = mongoose.model("User", userSchema);