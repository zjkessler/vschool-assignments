var arrayOfObjects = [
	{
		firstName: "Billy",
		lastName: "Madison",
		age: 32
    },
	{
		firstName: "Tommy",
		lastName: "Pickles",
		age: 32
    },
	{
		firstName: "Ray",
		lastName: "Charles",
		age: 32
    },
	{
		firstName: "Lady",
		lastName: "Gaga",
		age: 32
    },
	{
		firstName: "Elizabeth",
		lastName: "Taylor",
		age: 32
    },
	{
		firstName: "Led",
		lastName: "Zeplin",
		age: 32
    },
	{
		firstName: "Micael",
		lastName: "Johnson",
		age: 32
    },
	{
		firstName: "Keri",
		lastName: "Strug",
		age: 32
    },
	{
		firstName: "Chucky",
		lastName: "Finster",
		age: 32
    },
	{
		firstName: "Angelica",
		lastName: "Pickles",
		age: 32
    }
];

function sortStuff(array, bool) {
	var newArray = array.sort(function (a, b) {
		var nameA = a.lastName.toLowerCase(),
			nameB = b.lastName.toLowerCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		} else {
			if (a.firstName.toLowerCase() < b.firstName.toLocaleLowerCase()) {
				return 1;
			}
		}
		return 0;
	});
	if (bool) {
		return newArray;
	} else {
		newArray.reverse();
		return newArray;
	}
}
var test = sortStuff(arrayOfObjects, true);
console.log(test);