function countCode(str) {
	var n = 0;
	for (var i = 0; i < str.length - 3; i++) {
		var newString = str[i] + str[i + 1] + str[i + 3]
		if (newString === 'coe') {
			n++
		}
	}
	console.log(n);
}

countCode("aaacodebbb");
countCode("codexxxcode");
countCode("cozexxcope");