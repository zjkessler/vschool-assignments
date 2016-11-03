
Using Bootstrap, Angular, $http, and a custom AngularJS Service create a website that looks similar to this:



A user will enter the number of a Pokemon and the screen will download the information and the image of that Pokemon.

Custom Service
Put any code that uses $http in a custom service with its own methods for calling out to an API and returning information. You're free to structure this however you can make work, but you'll likely need an understanding of how promises work (and promise chaining) in order to complete this in a cleanly-written way.

Helpers
* Use Version 1 of the Pokemon API to complete this exercise. The purpose is to gain a better understanding of "Promise Chaining", and the new version of the API (V2) doesn't help in that aim in the same way.
    * Calling out the the pokedex endpoint will get you a list of all pokemon and their associated resource_uris. This is the url: http://pokeapi.co/api/v1/pokemon/{{ number entered by user }}/
* Click here for a link to the photo that's used as the background. You'll probably have to use Google to learn how to make it your background image without a repeat and have it cover the entire page.
* You'll also probably want to use Bootstrap centering classes to align things in the center. Another Google search should provide you the answers you're looking for.
Hints
Check the API documentation for how to GET pokemon (and what data is sent in the response, including the resource_uri for that pokemon's sprite(s)) as well as how to GET sprites (and what data is sent the response, including an "image" field that has a string that should be appended to http://pokeapi.co, e.g.: http://pokeapi.co/media/img/1383395659.12.png).

The documentation linked above gives a good idea of what a GET request to http://pokeapi.co/api/v1/pokemon/1/ would return, but it seems like the docs are a bit outdated. One of the fields it also returns is a sprites array that looks like this:

"sprites": [
        {
            "name": "bulbasaur",
            "resource_uri": "/api/v1/sprite/2/"
        },
        {
            "name": "bulbasaur",
            "resource_uri": "/api/v1/sprite/1/"
        }
    ]
Another GET request to the resource_uri of either one of these produces a response that contains an image field to be used for getting the actual sprite .jpg file.

Passing Criteria: Code review w/ instructor or TA
You'll meet one on one with an instructor or TA to go over this project in order to check that you're doing promise chaining correctly within the service. Promises and promise chaining help alleviate issues that come with callbacks inside of callbacks, and at least having a basic understanding of what is happening will be important for your future as a developer.

Passing off this project satisfies the requirements to earn the Programming Principles, Level 4 badge.

