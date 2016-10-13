//var myAjaxObject = {
//    method: "GET",
//    url: "http://swapi.co/api/people/1",
//    success: function(data){
//      console.log(data)
//    },
//    error: function( xhr, status, errorThrown ) {
//        alert( "Sorry, there was a problem!" );
//        console.log( "Error: " + errorThrown );
//        console.log( "Status: " + status );
//        console.dir( xhr );
//      }
//}
//
//$.ajax(myAjaxObject)

$.get("http://pokeapi.co/api/v2/pokemon/", function (response) {
	var pokemon = response.results;
	pokemon.forEach(function (monster) {
		console.log(monster.name);
		var content = $("#newContent");
		content.append("<a href='http://www.google.com/search?q=" + monster.name + "'><h2>" + monster.name + "</a></h2><br>");
	})
});