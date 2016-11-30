// We COULD put everything dealing with authentication inside our regular TodoApp Angular module,
// but it's a good idea to create a separate module for this too. This way, technically, we could
// pull this whole authentication piece out and use it inside another app if we wanted, with only
// a few modifications to the other app. So for that reason, we're creating this as a new
// angular module. Hence the "[]" on this next line:
var app = angular.module("Auth", ["ngStorage"]);  // ngStorage is just a slightly easier way to deal with localStorage

app.config(["$routeProvider", function ($routeProvider) {

    // Adding authentication-specific routes to our app
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        });
}]);

// This service exclusively helps us deal with the token we receive from the server
// Sepcifically, it helps us store, retrieve, and remove the token from
// our browser's localStorage. For more info on localStorage, check out
// http://coursework.vschool.io/localstorage-and-sessionstorage/

// The $localStorage service comes from the 3rd-party module ngStorage we loaded in our app
app.service("TokenService", ["$localStorage", function ($localStorage) {

    this.setToken = function (token) {

        // We can treat $localStorage like an object we can add properties to
        // This sets a new localStorage item called "token" and sets the value
        // to the token that was passed into this method
        $localStorage.token = token;
    };

    // Get the token from localStorage and return it to wherever this method was called
    this.getToken = function () {
        return $localStorage.token;
    };

    // Delete the token from localStorage. This is how we'll effectively "log out".
    this.removeToken = function () {
        delete $localStorage.token;
    };
}]);


// This service deals specifically with user-related things, such as signing up, logging in, and logging out
// There's also a simple method for determining if the user is logged in, which helps us know how
// to best display the buttons of our navbar.
app.service("UserService", ["$http", "TokenService", function ($http, TokenService) {

    // Send a request to the server to add a new user to the database. We'll send the credentials
    // they used to sign up (name, username, password, whatever else you want to save about a "User"
    // in your database) in order to create a new user.
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    // Our whole purpose in "logging in" is to get a token back from the server. This token is like our
    // access key card to have access to the data on the server. (Anything that begins with "/api"). If we make
    // a request to the server without having that access card with us, we will be rejected with an "Unauthorized"
    // error. So we ask the server for a key card (by logging in), and then we're saving that key card in a "safe
    // place" (localStorage, using the TokenService.setToken method) so that we can use it in the future for
    // outgoing requests. (Look below at the AuthInterceptor and you'll see where we are adding the token to every
    // outgoing request.)
    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {

            // Now that we have a token (in the response data), save it to localStorage
            TokenService.setToken(response.data.token);
        });
    };

    // Logging out simply consists of removing our token. Since our server requires a token to be included
    // in the request of anything that is protected (in our case, anything that begins with /api), if we take
    // away the token, we make it so the user no longer has access to the protected data.
    this.logout = function() {
        TokenService.removeToken();
    };

    // This little method simply checks if there is a token saved. If so, we know the current user is logged in.
    // With this method, we can set the navigation bar to display "Login" and "Signup" only when no token exists
    // (when this method returns false) and for the "Logout" to display if there is a token (when this method
    // returns true) using a combination of ng-show and ng-hide in our navbar HTML.
    this.isAuthenticated = function() {

        // Turn the value into a boolean
        return !!TokenService.getToken();
    };

}]);

// This is an HTTP interceptor. We write it as a normal angular service, but it's going to be implemented in
// a slightly different way. Instead of injecting this into another service or controller somewhere, instead
// we push it to an array of interceptors in the $httpProvider.

// It's job is to "intercept" outgoing requests and incoming responses before they get to the rest of our
// application. We're using it to make sure our outgoing requests (in the this.request method below) have
// an Authorization header, with the value set to "Bearer <token-string-goes-here>", which is exactly how
// express-jwt expects the token to come into the server.
app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};

            // If there is a Token saved in localStore, set the header of any outgoing requests to have
            // the token included in it.
            config.headers.Authorization = "Bearer " + token
        }
        return config;
    };

    // This is a handy method where we can tell Angular what to do if one of our requests gets returned
    // a response with an error code of some kind. If we sent a request to a protected resource without
    // the token included, or if our token has expired, express-jwt will send back a response with an error
    // status of 401, which means unauthorized. If this happens, this method will try to remove the Token
    // from localStorage (just in case it's an expired token that's no good anymore, we might as well get
    // rid of it) and then redirect the user to the login page so they can get another, valid token from
    // the server.
    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    }
}]);

// Don't worry if this doesn't make sense. We're pushing our service onto an array of interceptors,
// all of which will run before requests go out and responses come in.
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});