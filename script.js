// ------To change background color-----

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// -----Click-to-copy-----

const div1 = new ClipboardJS('.clickcopy1');

clipboard.on('success', function(e) {
	console.log(e);
});

clipboard.on('error', function(e) {
	console.log(e);
});