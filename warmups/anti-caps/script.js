function antiCaps(word) {
	var newWord = [];
	for (var i = 0; i < word.length; i++) {
		newWord.push(word[i]);
		if (isCaps(newWord[i])) {
			newWord[i].toLowerCase();
		} else {
			newWord[i].toUpperCase();
		}
	}
	console.log(newWord);
}

function isCaps(letter) {
	return letter === letter.toUpperCase();
}

function isLower(letter) {
	return letter === letter.toLower();
}