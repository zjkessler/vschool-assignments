Angular Views and Routing
01 JUNE 2015 on Angular, Week 9, Web Applications, Level 2, Lesson
Often, a website's functionality cannot be limited to a single page. For example, when going through the checkout process on an e-commerce site, you may go through many different views to submit and verify information. Traditionally, each new view would require a new page load from the server, which is unpleasant for the user and difficult to manage for the developer. Fortunately, Angular solves this problem by facilitating view-switching without leaving the page. This is ideal for working with RESTful APIs, and the user experience is much faster as well.

Routes
Each view of the app is defined as a route, a controller, and a template. Angular routes look almost identical to express routes. The site root is /, and you can define any type of routes you want, like /turkey or /banana/pudding (It even supports route parameters like /user/:id). The controller is just a normal angular controller. And the template is just the HTML that goes along with the controller. Here is an example of a single route:

// home.js
angular.module('homeView', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider.when('/home', {
    controller: 'homeController',
    templateUrl: 'home.tpl.html'
  });
})

.controller('homeController', function ($scope) {
  $scope.name = 'The Postal Service';
});
$routeProvider comes from the ngRoute module which is included in index.html (you'll see that soon). controller just references the controller we define in the file. templateUrl references a separate file entirely. You don't have to end the template file with .tpl.html but it helps distinguish template HTML files from full HTML files. Here is home.tpl.html:

// home.tpl.html
<h4>Welcome to the home page of {{ name }}</h4>  
{{ name }} references the scope variable defined in homeController.

We also have an index.html file:

// index.html
<!doctype html>

<html ng-app="myApp">  
<head>  
  <title>My App</title>
</head>

<body>  
  <div>
    (This part can be seen in every view)
    <a href="/#/home">Home page</a>
  </div>

  <ng-view></ng-view>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.js"></script>
  <script src="app.js"></script>
  <script src="home.js"></script>
</body>  
</html>  
This is where we include angular, ngRoute, and our other js files. The most interesting portion of this file is the <ng-view> tag. When you visit /home the template HTML is automatically inserted into the <ng-view> tag, and the corresponding controller is linked to the <ng-view> tag as well.

Finally, we have to define the app.js file. This is the easiest part:

// app.js
angular.module('myApp', ['homeView']);  
All we do is define the parent app (myApp) and load in the homeView app (defined in home.js). Now run an http-server and visit the site.

When you visit the / route, this is all there is:

/

But when you visit the /#/home route, it shows the template and controller you defined with $routeProvider:

/home

The # is how angular distinguishes front-end routes from server routes. It is possible to remove it with the correct server configuration

Multiple Routes
Now let's add another view. Here are the files for an about page:

// about.js
angular.module('aboutView', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider.when('/about', {
    controller: 'aboutController',
    templateUrl: 'about.tpl.html'
  });
})

.controller('aboutController', function ($scope) {
  $scope.yearFormed = 2001;
});
// about.tpl.html
<h4>The Postal Service was formed in {{ yearFormed }}</h4>  
Don't forget to add the aboutView module to the dependencies of myApp in app.js. Also, make sure to include about.js in a script tag in index.html. I'll also add a link to /#/about in index.html. Here is what the about page looks like. (The views can be switched with the links, which go to their respective routes.)

/about

One more thing ... This is how you define a default route:

// app.js
angular.module('myApp', ['ngRoute', 'homeView', 'aboutView'])

.config(function ($routeProvider) {
  $routeProvider.otherwise('/home');
});
The otherwise function sets a route to fallback on if the route that the user enters is not registered. (So if you go to / in the browser, it will redirect to /#/home.)