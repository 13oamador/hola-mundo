'use strict'

/*
FUNCIONES
- Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
*/


//Defino la funcion
function calculadora(numero1, numero2, mostrar = false){

	if(!mostrar){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}	
}

function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1+numero2) + "<br/>");
	document.write("Resta: " + (numero1-numero2) + "<br/>");
	document.write("Multiplicacion: " + (numero1*numero2) + "<br/>");
	document.write("Division: " + (numero1/numero2) + "<br/>");	
}

function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("Division: " + (numero1/numero2));	
}

//Invocacion o llamado de la funcion
//calculadora(parseInt(prompt('Digite el primer numero', 0), parseInt(prompt('Digite el segundo numero', 0))));
calculadora(60, 30);
calculadora(400, 200, true);



