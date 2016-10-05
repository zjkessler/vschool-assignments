var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


function displayLyric(a) {
	console.log(a.join(" "));
}

function reverseLyric(a) {
	 var backwordArr = a.reverse(a);
	console.log(backwordArr.join(" "));

}

function shortLyric(a) {
	for (var i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			a.splice(i, 1);
		}
	}
	console.log(a.join(" "));
}

function flipLyrics(a) {
	for (var i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			a.splice(i, 1);
		}
}