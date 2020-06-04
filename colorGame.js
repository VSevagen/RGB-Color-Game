var square = document.querySelectorAll(".square");
var easy = document.querySelector(".easy");
var colorsHard = [];
var colorsEasy = [];
var winningColor;
var rgb = document.querySelector(".rgb");
var hardMode = true;
//Execute setColors and setHeader in beginning to get initial colors
//and winning color header
setColorsHard();
setHeader();
events();

function setBackground(color) {
	if(hardMode) {
		for(var i=0;i<square.length;i++) {
			square[i].style.visibility = "visible";
			square[i].style.backgroundColor = color;
		}
		document.querySelector(".top").style.backgroundColor = color;
		square[0].removeEventListener("click", squ1);
		square[1].removeEventListener("click", squ2);
		square[2].removeEventListener("click", squ3);
		square[3].removeEventListener("click", squ4);
		square[4].removeEventListener("click", squ5);
		square[5].removeEventListener("click", squ6);

	}

	else {
		for(var i=0;i<3;i++) {
			square[i].style.visibility = "visible";
			square[i].style.backgroundColor = color;
		}
		document.querySelector(".top").style.backgroundColor = color;
		square[0].removeEventListener("click", squ1);
		square[1].removeEventListener("click", squ2);
		square[2].removeEventListener("click", squ3);
	}
}

function setColorsHard() {
	for(var i=0;i<square.length;i++) {
		var red = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		colorsHard[i] = "rgb(" + red + ", " + green + ", " + blue + ")";

		square[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	}
}

function setColorsEasy() {
	for(var i=0;i<3;i++) {
		var red = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		colorsEasy[i] = "rgb(" + red + ", " + green + ", " + blue + ")";

		square[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	}
}

// setting winning color in header.
function setHeader() {
	if(hardMode){
		var chosenColor = colorsHard[Math.floor(Math.random()*6)];
		winningColor = chosenColor;
		rgb.textContent = chosenColor;
		rgb.classList.add("style");
	}

	else {
		var chosenColor = colorsEasy[Math.floor(Math.random()*3)];
		winningColor = chosenColor;
		rgb.textContent = chosenColor;
		rgb.classList.add("style");
	}
}

function colorChange(index) {
	if(hardMode) {
		if(colorsHard[index] == winningColor) {
			setBackground(colorsHard[index]);
		}
		else {
			square[index].style.visibility = "hidden";
		}
	}

	else {
		if(colorsEasy[index] == winningColor) {
			setBackground(colorsEasy[index]);
		}
		else {
			square[index].style.visibility = "hidden";
		}
	}
}

function squ1() {colorChange(0);}
function squ2() {colorChange(1);}
function squ3() {colorChange(2);}
function squ4() {colorChange(3);}
function squ5() {colorChange(4);}
function squ6() {colorChange(5);}
// Event listeners for all the squares present in the html file.
function events() {
	square[0].addEventListener("click", squ1);
	square[1].addEventListener("click", squ2)
	square[2].addEventListener("click", squ3)
	square[3].addEventListener("click", squ4)
	square[4].addEventListener("click", squ5)
	square[5].addEventListener("click", squ6)
}

document.querySelector(".reset").addEventListener("click",function() {
	square[0].style.visibility = "visible";
	square[1].style.visibility = "visible";
	square[2].style.visibility = "visible";
	square[3].style.visibility = "visible";
	square[4].style.visibility = "visible";
	square[5].style.visibility = "visible";
	hardMode = true;
});
document.querySelector(".reset").addEventListener("click",setColorsHard);
document.querySelector(".reset").addEventListener("click",setHeader);
document.querySelector(".reset").addEventListener("click",events);
document.querySelector(".reset").addEventListener("click",function(){
	document.querySelector(".top").style.backgroundColor = "steelblue";
});

easy.addEventListener("click",function(){
	hardMode = false;
	setColorsEasy();
	setHeader();
	square[0].style.visibility = "visible";
	square[1].style.visibility = "visible";
	square[2].style.visibility = "visible";
	square[3].style.visibility = "hidden";
	square[4].style.visibility = "hidden";
	square[5].style.visibility = "hidden";
	document.querySelector(".top").style.backgroundColor = "steelblue"
})
easy.addEventListener("click",events);






