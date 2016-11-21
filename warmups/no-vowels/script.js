var vowelArray = ["K", "e", "s", "s", "l", "e", "r"];

function minusVowel(arr) {

	var noVowel = [];

	for (i = 0; i < arr.length; i++) {
		if (arr[i].search(/[aeiou]/i)) {
			noVowel.push(arr[i]);
		}
	}
	console.log(noVowel);
}

minusVowel(vowelArray);