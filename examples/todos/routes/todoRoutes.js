var express = require("express");
var todoRouter = express.Router();
var Todo = require("../models/todo");

todoRouter.route("/")
    .get(function (req, res) {

        // Instead of finding ALL todos (which is what we get when we either put {} or nothing at all
        // in the first parameter of the .find() method), we now want to filter out the todos we get from
        // the database by the creator of the todo item.
        // The express-jwt package we set up as middleware (in server.js) is checking for tokens on incoming
        // requests like a bouncer at a club checking for IDs. If you don't have a valid token, you're not
        // allowed access to the protected resource. (In our case, any incoming request beginning with "/api")
        // Once the express-jwt middleware validates your token, it creates the "req.user" property, which we
        // then use anywhere in our app for things such as what we see below: filter todos by their creator
        // property of req.user._id. (The id of the currently-logged-in user).

        Todo.find({creator: req.user._id}, function (err, todos) {
            if (err) res.status(500).send(err);
            res.send(todos);
        });
    })
    .post(function (req, res) {
        var todo = new Todo(req.body);

        // The only thing we need to change here is adding the creator property to the todo item we're about
        // to save. Set the creator property to the id of the currently-logged-in user. That way, in the
        // future, we can search for todos based on this property, like in the GET handler above.
        todo.creator = req.user._id;

        todo.save(function (err, newTodo) {
            if (err) res.status(500).send(err);
            res.status(201).send(newTodo);
        });
    });

todoRouter.route("/:todoId")
    .get(function (req, res) {

        // Todo.findById(<id>) is a shortcut method for saying Todo.findOne({_id: <id>}). If we were only
        // filtering by the id property alone, we would be fine using it. But now we want to not just filter
        // by the id property, but by the person who created that todo item as well! (Otherwise we could enter
        // a different todo's id and possibly see a todo item that belongs to someone else in our database.

        // So we change findById to findOne to allow us to add additional query parameters to our database search
        Todo.findOne({_id: req.params.todoId, creator: req.user._id}, function (err, todo) {
            if (err) res.status(500).send(err);
            if (!todo) res.status(404).send("No todo item found.");
            else res.send(todo);
        });
    })
    .put(function (req, res) {

        // Same as how we changed findById above, we're changing this from findByIdAndUpdate to findOneAndUpdate.
        // Again, this allows us to add an additional query parameter to our query - the creator property
        Todo.findOneAndUpdate(

            // The query now includes the todo item's id as well as the id of the creator of this todo item
            // Since "req.user" references the currently-logged-in user, this is saying "look in the Todo
            // collection for the todo with the _id property of req.params.id (the one in the URL of the request
            // and which was created by the person who is currently logged in."
            {_id: req.params.todoId, creator: req.user._id},

            // The new todo item with the updates the user wants to make to it
            req.body,

            // returns the new, updated version of the todo item in the callback function below
            {new: true},
            function (err, todo) {
                if (err) res.status(500).send(err);
                res.send(todo);
            });
    })
    .delete(function (req, res) {

        // In similar fashion, this is now findOneAndRemove instead of findByIdAndRemove
        Todo.findOneAndRemove(
            {_id: req.params.todoId, creator: req.user._id},
            function (err, todo) {
                if (err) res.status(500).send(err);
                res.send(todo);
            });
    });

module.exports = todoRouter;