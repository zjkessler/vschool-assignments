var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [{
        body: {
            type: String,
            required: true
        }
    }]
    /*
    The "timestamps: true" option adds "createdAt" and "updatedAt"
    properties on all documents created from this schema.
    Anytime a new one is created, those fields are set to the time
    at which they were created. Anytime an existing document is updated
    the "updatedAt" property is set to that time, but "createdAt" stays
    the same.
    */
}, { timestamps: true });

module.exports = mongoose.model("Blog", BlogSchema);

/*
Below is the version of the model we wrote when we were learning
about embedded documents vs. references. Notice the blog's "author"
and the comments "author" properties are referencing another model
called "User" (found in models/user.js), and the "type" is the
"ObjectId" type which comes from mongoose.Schema.Types.ObjectId. That
id will end up being the ID of some user saved in the database.

However, because comments will pretty much always be included with the
specific blog posts they're tied to, we decided just to embed them right
into the blog post itself without having to create a separate collection
for them.
*/

//var mongoose = require("mongoose");
//var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;
//
//var BlogSchema = new Schema({
//    author: {
//        type: ObjectId,
//        ref: "User"
//    },
//    title: {
//        type: String,
//        required: true
//    },
//    body: {
//        type: String,
//        required: true
//    },
//    comments: [{
//        body: {
//            type: String,
//            required: true
//        },
//        author: {
//            type: ObjectId,
//            ref: "User"
//        },
//        postDate: Date
//    }]
//}, { timestamps: true });
//
//module.exports = mongoose.model("Blog", BlogSchema);
