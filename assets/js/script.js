/* Hero Text Type Animation */

var string = "I'm a Frontend Web Developer from London (UK). My goal is to develop well designed, functional and accessible websites and web apps that users love."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',80); /* change 70 for speed */

}
frameLooper();