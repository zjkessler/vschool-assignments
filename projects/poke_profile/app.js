var app = angular.module("myApp", []);

app.service("PokemonService", ["$http", function ($http) {

	this.getPokemonInfo = function (pokemonNumber) {
		//$http GET for the pokemon info
		var baseURL = "http://pokeapi.co/api/v1/pokemon/";
		var pokemon = {};

		return $http.get(baseURL + pokemonNumber)
			.then(function (response) {
				pokemon.name = response.data.name;
				pokemon.attack = response.data.attack;
				pokemon.ability = response.data.abilities[0].name;
				//pokemon.image = response.data.sprites[0].resource_uri;
				return $http.get("http://pokeapi.co" + response.data.sprites[0].resource_uri);
			}).then(function (response) {
				pokemon.image = response.data.image;
				return pokemon;
			})
			//once it comes back 
	}
}]);

app.controller("myCtrl", ["$scope", "PokemonService", function ($scope, PokemonService) {

	$scope.getPokemon = function (pokemonNum) {
		var newNum = parseInt(pokemonNum);
		PokemonService.getPokemonInfo(newNum)
			.then(function (pokemon) {
				console.log(pokemon.name)
				$scope.pokemon = pokemon;
			});
	}
}]);