$("#submit").click(function () {
	console.log($('#trash').checked)

	var name = $("#name").val();
	var game = $("#game").val();
	var date = $("#date").val();
	var score = $("#score").val();
	var trash = $("#trash").val();

	if (name === "" || game === "" || date === "" || score === "") {
		alert("Please input missing information!")
	} else {

		var table = $("#table");

		table.append("<tr>" + "<td>" + name + "</td>" + "<td>" + game + "</td>" + "<td>" + date + "</td>" + "<td>" + score + "</td>" + "<td>" + trash + "</td>" + "</tr>");
	}
});

//function trashTalk() {
//
//
//	if ($("#trash").checked) {
//		var roll = Math.floor(Math.random() * 3)
//
//
//		switch:
//	}
//}