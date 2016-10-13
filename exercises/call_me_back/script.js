var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

for (var i = 0; i < names.length; i++) {
	attemptCall(names[i], dontCall, call, sendText)
}

function dontCall(name) {
	console.log("you didn't call " + name);
}


function call(name) {
	console.log("you called " + name);
}


function sendText(name) {
	console.log("You sent a text to " + name);
}

function attemptCall(name, dontCall, call, sendText) {
	var aName = name.match(/a/gi);
	if (!aName) {
		aName = "";
	}
	if (aName.length >= 2) {
		sendText(name);
	} else if (name.length % 2 === 0) {
		dontCall(name)
	} else if (name.length % 2 !== 0) {
		call(name)
	}
}