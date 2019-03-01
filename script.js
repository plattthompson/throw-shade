// ------To change background color-----

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// -----Clipboard.js click-to-copy-----

const div1 = document.getElementById('clickcopy1');
const clipboard1 = new ClipboardJS(div1, {
	text: function() {
		return document.querySelector('.color1').value;
	}
});

const div2 = document.getElementById('clickcopy2');
const clipboard2 = new ClipboardJS(div2, {
	text: function() {
		return document.querySelector('.color2').value;
	}
});