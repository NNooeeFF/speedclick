
let result = 101
let level = 1
let time = 0
let readyToLeave = false

let change = false

alert ("Pour ce niveau, vous aurez besoin d'un 2e pouce, ready ?");


var myVar = setInterval(printResult, 1000);
var myVar = setInterval(timer, 1000);
var myVar = setInterval(changer, 1500);

function timer(){
	if (result < 200){
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


function changer(){
	var random_boolean = Math.random() >= 0.5;
	change = random_boolean;
	if (change){
		document.getElementById("button1").innerHTML = "+1";
		document.getElementById("button2").innerHTML = "-1";
	} else {
		document.getElementById("button1").innerHTML = "-1";
		document.getElementById("button2").innerHTML = "+1";
	}
}


function buttonOne(){
	if (result < 200){
		if (!change) {
			result -= 1;
			document.getElementById("textResultat").innerHTML = result;
		} else {
			result += 1;
			document.getElementById("textResultat").innerHTML = result;
		}
	} else {
		result += 0;
	}
}


function buttonTwo(){
	if (result < 200){
		if (!change) {
			result += 1;
			document.getElementById("textResultat").innerHTML = result;
		} else {
			result -= 1;
			document.getElementById("textResultat").innerHTML = result;
		}
	} else {
		result += 0;
	}
}



function printResult(){
	if (result < 130) {
		result -= 1;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 130 && result < 145){
		result -= 3;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 145 && result < 160){
		result -= 4;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 160 && result < 195){
		result -= 5;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result >= 195 && result < 200){
		result -= 7;
		document.getElementById("textResultat").innerHTML = result;
	} else if (result = 200){
		document.getElementById("titleText").innerHTML = "C'était un peu long, mais vous avez réussi ;) => " + time + " secondes !";
		/*document.getElementById("buttonText").innerHTML = "Next =>";
		setTimeout(endLevel, 1800);*/
	}
}

