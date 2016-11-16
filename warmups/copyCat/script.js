//Create a user object that has at least 5 properties.

//Create a function that takes an object as a parameter and returns a new object that has the same properties and values of the parameter.

//The new object that is returned should be able to be edited without affecting the original user object.

var fruitObject = {
	name: "apple",
	type: "fruit",
	color: "red",
	numberOf: 4,
	delicious: "yes"
}

function copy(obj) {
	var newFruitObj = Object.assign({}, obj);
	return newFruitObj;
}


var newFruitObj = copy(fruitObject)
console.log(fruitObject);
console.log(newFruitObj);


//var numA = 1;
//var numB = numA;
//
//console.log('numA', numB);