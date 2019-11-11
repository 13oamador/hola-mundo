'use strict'

/*
Indicar si un numero es par o impar
1. Ventana prompt
2. Si no es valido que vuelva a pedir el numero
*/

var numero = parseInt(prompt('Introduzca un numero', 0));

while(isNaN(numero)){
	numero = parseInt(prompt('Introduzca un numero', 0));	
}

if(numero%2 == 0){
	alert("El numero " + numero + " es par");
}else{
	alert("El numero " + numero + " es impar");
}

