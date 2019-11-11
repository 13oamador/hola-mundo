'use strict'

//Switch

var edad = 18;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acaba de cumplir la mayoria de edad";
		break;

	case 25:
		imprime = "Ya eres un adulto";
		break;

	case 40:
		imprime = "Crisis de los 40";
		break;

	case 70:
		imprime = "Anciano";
		break;

	default:
		imprime = "Edad neutra"
		break;
}

console.log(imprime);