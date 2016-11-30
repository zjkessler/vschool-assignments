var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },

    // We now need each todo item that gets created to have a reference to the person (user) who created it
    // It's easy if we just reference the id of the user who created this todo. That way if the system
    // ever needs to look up who this todo belongs to, they use the id and look at the "Users" collection
    // for a user with that ID.
    creator: {

        // This is a special type provided to us by mongoose. Check the top of the file - you'll see
        // this is actually "mongoose.Schema.Types.ObjectId".
        type: ObjectId,

        // We have to tell it which collection the referenced document belongs to
        ref: "User",

        // The creator property is required in order for this whole todo document to be valid
        required: true
    }
});

module.exports = mongoose.model("Todo", todoSchema);