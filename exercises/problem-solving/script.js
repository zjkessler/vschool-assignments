//Given a group of prospective voters ranging from ages 18-55, determine the percentage of those who voted in the last election by the following age groups:
//
//1) 18-25 
//2) 26-35 
//3) 36-55

var voters = [
	{
		name: 'Bob',
		age: 30,
		voted: true
	},
	{
		name: 'Jake',
		age: 32,
		voted: true
	},
	{
		name: 'Kate',
		age: 25,
		voted: false
	},
	{
		name: 'Sam',
		age: 20,
		voted: false
	},
	{
		name: 'Phil',
		age: 21,
		voted: true
	},
	{
		name: 'Ed',
		age: 55,
		voted: true
	},
	{
		name: 'Tami',
		age: 54,
		voted: true
	},
	{
		name: 'Mary',
		age: 31,
		voted: false
	},
	{
		name: 'Becky',
		age: 43,
		voted: false
	},
	{
		name: 'Joey',
		age: 41,
		voted: true
	},
	{
		name: 'Jeff',
		age: 30,
		voted: true
	},
	{
		name: 'Zack',
		age: 19,
		voted: false
	}
];

//Seperate into correspoding age groups

//Loop through array
//	Keep track of how many voted
var young = [];
var middle = [];
var old = [];


for (var i = 0; i < voters.length; i++) {
	if (voters[i].age <= 25) {
		young.push(voters[i]);
	} else if (voters[i].age <= 35) {
		middle.push(voters[i]);
	} else {
		old.push(voters[i]);
	}
}

function votedPercentage(voterArray) {

	var votedCount = 0;
	for (var i = 0; i < voterArray.length; i++) {
		if (voterArray[i].voted) {
			votedCount++;
		}
	}
	return votedCount / voterArray.length * 100;
}

console.log("18-25: " + votedPercentage(young) + " %");
console.log("26-35: " + votedPercentage(middle) + " %");
console.log("36-55: " + votedPercentage(old) + " %");


//Keep trock of votedYoung, votedMiddle, votedOld
//Keep track of numYoung, numMiddle, numOld