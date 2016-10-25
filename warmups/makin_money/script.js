function formatDanero(num) {
	var numArray = [];
	var sNum = num.toString();


	for (var i = 0; i < sNum.length; i++) {
		numArray.push(sNum[i]);
	}

	var flip = numArray.reverse();

	flip.splice(2, 0, ".");

	for (var j = 6; j < flip.length; j + 3) {
		flip.splice(j, 0, ",");
	}

	console.log(flip);

}

formatDanero(123456789);