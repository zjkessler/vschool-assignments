Angular Todo Website (Talking to the Server)
04 AUGUST 2015 on Exercise, Angular, Web Applications, HTTP/API, Level 2
You are going to create a Todo list that talks to the server.

Requirements:

You will have a form that allows the user to add new todos
Each todo will have a checkbox where it can be marked complete or incomplete
If a todo item is complete, it should have a strikethrough line on it
A user should be able to delete a Todo item
A user should be able to edit/update the todo item
A user should be able to attach an imgUrl to the item (if there is an imgUrl, the image should be displayed)
A user should be able to give the item a price
A user should be able to give the item a description
Website should be nicely laid out with Bootstrap
API Documentation
The baseUrl is: http://api.vschool.io/<yourname>/todo[/<todoId>]

(Where <yourname> is your actual name, i.e.: http://api.vschool.io/jonsmith/todo) and <todoId> is the _id attribute of an already-existing todo item. (Only to be used for GET (one), PUT, and DELETE requests.) See the Using id section below for more info on how to use _id in your requests.

All todo items are tracked by your name so don't forget to enter it in the url.

GET requests
GET all todos: http://api.vschool.io/<yourname>/todo

GET one todo: http://api.vschool.io/<yourname>/todo/<todoId>

POST requests
POST a new todo: http://api.vschool.io/<yourname>/todo

PUT requests
Update (PUT) an existing todo: http://api.vschool.io/<yourname>/todo/<todoId>

DELETE requests
DELETE an existing todo: http://api.vschool.io/<yourname>/todo/<todoId>

The database model looks like this: 
Note: You won't need to mess with sessionId - that is handled automatically

{
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    imgUrl: String,
    completed: Boolean,
    sessionId: {
        type: String,
        required: true
    }
}
Don't worry if that doesn't look familiar to you yet. All it means is that you can submit a JavaScript object that looks like this:

var newTodo = {  
    title: "Title here", // this one is the only thing that is actually required
    description: "Description here",
    price: 20, // Must be a number of some kind (integer or float)
    imgUrl: "http://www.example.com/some-link-to-a-cool-photo.jpg",
    completed: false // must be a boolean (true or false). If nothing provided, defaults to false.
};
And the JSON you'll get back (or rather, the object that gets saved in the database) will look a little more like this:

{
    "_id": "5630dcfcac2dfab2428b8c02",
    "sessionId": "jonsmith",
    "title": "Title here",
    "price": 20,
    "description": "Description here",
    "completed": false,
    "imgUrl": "http://www.example.com/some-link-to-a-cool-photo.jpg",
    "__v": 0
  }
Using _id

Notice when you perform a GET request of any kind, the object(s) you're given back contain an _id attribute (see above example). This is added by MongoDB for us, and we can use it when performing a GET (one), PUT, or DELETE to access the correct todo item in the database. E.g.:

// Get all the todos from the database and put them on the $scope
// so I can ng-repeat through them in my html file
$http.get("http://api.vschool.io/jonsmith/todo/").then(function(response) {
    $scope.todoList = response.data;
});

// Let's assume I've also added a delete button next to each todo item in my view (inside the ng-repeat="todo in todoList")
// I can add an ng-click="deleteTodo(todo)" and this will pass the entire todo object to the function we called.

$scope.deleteTodo = function(singleTodoObject) {
// This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
// I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
    $http.delete("http://api.vschool.io/jonsmith/todo/" + singleTodoObject._id).then(function(response) {
        // This made a DELETE request to "http://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
        // Assuming I used the object from the example above.
        alert("Your todo was successfully deleted!")
    }, function(response) {
        alert("There was a problem deleting your todo :(");
    });
};
Styling ideas:
If you want some pretty looking ToDo list website examples take a look HERE

