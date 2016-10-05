var box = document.getElementById("boxbox");

box.addEventListener("mouseover", onHover);
box.addEventListener("mousedown", down);
box.addEventListener("mouseup", up);
box.addEventListener("dblclick", double);
window.addEventListener("scroll", scroll);

function onHover() {
	box.style.backgroundColor = "blue";
}

function down() {
	box.style.backgroundColor = "red";
}

function up() {
	box.style.backgroundColor = "yellow";
}

function double() {
	box.style.backgroundColor = "green";
}

function scroll() {
	box.style.backgroundColor = "orange";
}