
let result = 10

alert ("Vous allez jouer à un jeu addictif, continuer ?");


var myVar = setInterval(lessOne, 1000);


function addOne(){
	if (result < 100){
		result += 1;
		document.getElementById("printResultat").innerHTML = result;
	} else {
		result += 0;
	}
}

function lessOne(){
	if (result < 30) {
		result -= 1;
		document.getElementById("printResultat").innerHTML = result;
	} else if (result >= 30 && result < 45){
		result -= 3;
		document.getElementById("printResultat").innerHTML = result;
	} else if (result >= 45 && result < 60){
		result -= 4;
		document.getElementById("printResultat").innerHTML = result;
	} else if (result >= 60 && result < 95){
		result -= 5;
		document.getElementById("printResultat").innerHTML = result;
	} else if (result >= 95 && result < 100){
		result -= 7;
		document.getElementById("printResultat").innerHTML = result;
	}
}

