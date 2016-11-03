 function array123(arr) {
 	for (var i = 0; i < arr.length - 2; i++) {

 		if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3) {

 			console.log(true);
 		}
 	}
 	console.log(false)
 }

 array123([1, 1, 2, 3, 1]);
 array123([1, 1, 2, 4, 1]);
 array123([1, 1, 2, 1, 2, 3]);