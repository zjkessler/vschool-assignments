function firstRepeat(str) {
	for (var i = 0; i < str.length; i++) {
		var repeat = false;
		for (var j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				repeat = true;
			}
		}
		if (!repeat) {
			console.log(str[i]);
			break;
		}
	}
}

firstRepeat("ggggggggxkljfvlsjkfg");