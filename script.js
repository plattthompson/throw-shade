const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const colorCombo = document.querySelector("h3");
const body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// function logValue("input", function() {
// 	console.log(color2.value);
// }

// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// })