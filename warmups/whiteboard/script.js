//Array Sort Whiteboard
//04 NOVEMBER 2016
//Write a function that takes one array and returns an object with values of arrays.
//
//Each value array will be of only it's one type.
//
//Example of returned object:
//
//{ 
//    numbers: [1, 4, 3, 23],
//    strings: ["candy", "corn", "is", "the, "best"],
//    arrays: [[1],["dogs", 2]],
//    objects: [{ keys: "values", numbers: 7}]
//}
	var mixArray = [1, 4, 3, 23, "candy", "corn", "is", "the", "best", [1], ["dogs", 2], {
		keys: "values",
		numbers: 7
	}]

	function objReturn(arr) {
		//	loop array and search by type
		//sort array

		//push to object

		var sorted = {
			string: [],
			number: [],
			array: [],
			object: []
		}

		for (var i = 0; i < arr.length; i++) {

			if (typeof arr[i] === "string") {

				sorted.string.push(arr[i]);

			} else if (typeof arr[i] === "number") {

				sorted.number.push(arr[i]);

			} else if (Array.isArray(arr[i])) {

				sorted.array.push(arr[i]);

			} else if (typeof arr[i] === "object") {

				sorted.object.push(arr[i]);
			}
		}

		console.log(sorted);
	}

	objReturn(mixArray);