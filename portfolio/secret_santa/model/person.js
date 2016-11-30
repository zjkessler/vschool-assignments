var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstName: {
		required: true,
		type: String
	},
	lastName: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String
	},
	address: {
		StreetName1: {
			required: true,
			type: String
		},
		StreetName2: String,
		unitNum: String,
		city: {
			required: true,
			type: String
		},
		state: {
			required: true,
			type: String
		},
		country: {
			required: true,
			type: String,
			default: "USA"
		},
		zip: {
			required: true,
			type: Number
		},
	},
	description: String,
	assignedTo: {
		type: String,
		default: "You have not been assigned to be a Secret Santa yet...",
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
});

module.exports = mongoose.model("Person", personSchema);