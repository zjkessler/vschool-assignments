var trash;
$("form").submit(function () {
	return false;
});
$("#submit").click(function () {

	$(".form-group").validate();

	var name = $("#name").val();
	var game = $("#game").val();
	var date = $("#date").val();
	var score = $("#score").val();
	var time = $("#time").val();

	var scoreTime;

	if (name === "" || game === "" || date === "" || $(".form-group").valid() == false || (score != "" && time != "")) {

	} else {
		if (score === "") {
			scoreTime = time;
		} else {
			scoreTime = score;
		}

		var table = $("#table");
		trashTalk();
		table.append("<tr>" + "<td>" + name + "</td>" + "<td>" + game + "</td>" + "<td>" + date + "</td>" + "<td>" + scoreTime + "</td>" + "<td>" + trash + "</td>" + "</tr>");
	}
});

function trashTalk() {
	if ($("#trash").prop('checked')) {
		var roll = Math.floor(Math.random() * 3);
		switch (roll) {
		case 0:
			trash = "All the trash talk";
			break;
		case 1:
			trash = "*insert trash talk here*";
			break;
		case 2:
			trash = "trashy trash talk";
			break;
		}

	} else {
		trash = "weak trash talk";
	}
}