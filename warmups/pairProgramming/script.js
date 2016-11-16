var _ = require("lodash");

function steamrollArray(arr) {
	var newArr = _.flatten(arr);
	console.log(newArr);
}

steamrollArray([1, [2], [3, [[4]]]]);


function pairWise(arr, arg) {

	var total = 0;

	for (var i = 0; i <= arr.length; i++) {
		for (var j = 1; j <= arr.length; j++) {
			if (arr[i] + arr[j] === arg && arr[i] < arr[j]) {

				total += (i + j);
			}
		}
	}
	console.log(total);
};

pairWise([7, 9, 11, 13, 15], 20);