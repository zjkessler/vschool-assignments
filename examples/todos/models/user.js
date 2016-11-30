var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// The structure of any user objects we want to save. Normally we would also have other info about
// the user, such as their name, their email, etc. We're just keeping it simple here for now.
var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,

        // This will automatically lowercase whatever the original input was. This way our database doesn't
        // think that "starlord" and "StaRLorD" are different usernames. (Usernames are usually case-insensitive)
        lowercase: true,

        // Don't allow someone to create another user with the same username as one that already exists.
        // Usernames must be unique.
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
