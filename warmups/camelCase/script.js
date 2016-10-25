//function () {
//	var str = readline.question("Please enter a word containing a hyphen, underscore or space: ";)
//	var i = str.search(/[_-\s]/g);
//	if ((str.test(/[_]/) && str.test(/[\s]/) || (str.test(/[_]/) && str.test(/[-]/) || (str.test(/[-]/) && str.test(/[\s]/)) {
//					console.log("need new word.")
//				} else {
//					var strArr = str.split();
//					strArr.pop(i--);
//
//				}
//			}


var original = "hello hi";
var letterArray = original.split('');
var newarr = [];
for (var i = 0; i < letterArray.length; i++) {

	if (letterArray[i] === ' ' || letterArray[i] === '-' || letterArray[i] === '_') {
		var cap = letterArray[i + 1].toUpperCase();
		newarr.push(cap);
		letterArray.splice(i, 1);
	} else {
		newarr.push(letterArray[i]);
	}
}