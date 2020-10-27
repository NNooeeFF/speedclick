
let result = 11
let level = 1
let time = 0
let readyToLeave = false

alert ("Vous allez jouer à un jeu addictif, continuer ?");


var myVar = setInterval(printResult, 1000);
var myVar = setInterval(timer, 1000);


function timer(){
	if (result < 100){
		time += 1;
	} else {
		time += 0;
	}
}


function endLevel(){
	readyToLeave = true;
}

function nextLevel(){
	window.open ('level2.htm','_self',false)
}


function addOne(){
	if (result < 100){
		result += 1;
		document.getElementById("textResultat").innerHTML = result;
	} else {
		result += 0;
		/*if (readyToLeave = true) {
			nextLevel();
		}*/
	}
}

function printResult(){
	if (result < 30) {
		result -= 1;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 30 && result < 45){
		result -= 3;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 45 && result < 60){
		result -= 4;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 60 && result < 95){
		result -= 5;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 95 && result < 100){
		result -= 6;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result = 100){
		document.getElementById("titleText").innerHTML = "Bravo, vous avez réussi en " + time + " secondes !";
		/*document.getElementById("buttonText").innerHTML = "Next =>";
		setTimeout(endLevel, 1800);*/
	}
}

