var firstName, lastName, age, gender, local, diet;

document.getElementById("submit").addEventListener("click", function () {
	firstName = document.myForm.fname.value;
	lastName = document.myForm.lname.value;
	age = document.myForm.age.value;
	gender = document.myForm.gender.value;
	local = document.myForm.location.value;
	var x = document.myForm.diet;
	for (var i = 0; i < x.length; i++) {
		if (x[i].checked) {
			diet = x[i].value;
		}
	}
});

document.getElementById("submit").addEventListener("click", function () {

	function Person(fName, lName, age, gender, local, diet) {
		this.firstName = fName;
		this.lastName = lName;
		this.age = age;
		this.gender = gender;
		this.location = local;
		this.diet = diet;
	}
	var person1 = new Person(firstName, lastName, age, gender, local, diet);

	for (var index in person1) {
		var personView;
		personView += index + " : " + person1[index] + "\n";
	};
	alert(personView);

});
