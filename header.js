var header = document.getElementById("header");
const completed = "Nathan";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$@#!~€*=_-^%¥";

const charLength = 30;
const diff = charLength/5;

var currentTime = 0;
var currentChar = 0;

var timer = null;

header.innerHTML = "";

window.addEventListener("load", function(){
    

    timer = setInterval(reveal, diff);


});

function reveal() {

	if (currentTime >= charLength) {

		var charPlace = completed.length - ++currentChar;
		header.innerHTML = completed.substring(charPlace, completed.length);
		currentTime = 0;

	} else {

		currentTime += diff;

		var char = characters[Math.floor((Math.random()*characters.length))];

		var  charPlace = completed.length - currentChar;

		header.innerHTML = '<span style="color:darkgray;font-family:Lobster;">' + char + '</span>' + completed.substring(charPlace, completed.length);

	}

	
	if (currentChar >= completed.length)
		clearInterval(timer);

}




