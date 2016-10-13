function parsePokemon() {
	//create XTR object
	var xhr = new XMLHttpRequest();
	//Check the readystate and status (4 and 200)
	xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//Parse JSON (xhr.responsiveText) to js object
				var data = JSON.parse(xhr.responseText);
				var pokemon = data.objects[0].pokemon;
				//loop through the array of data
				var namesUl = document.getElementById("names");
				pokemon.forEach(function (monster) {
						namesUl.innerHTML += "<li>" + monster.name + "</li>";
					})
					//for (var i = 0; i < name.pokemon.length; i++) {
					//					
					//				}
			}
		}
		//Use xhr to open a request to the API
	xhr.open("GET", "http: //mean.codingcamp.us:6543/pokemon.json", true);
	//send xhr request
	xhr.send();
}