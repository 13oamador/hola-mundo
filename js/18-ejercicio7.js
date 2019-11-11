'use strict'

/*
Tabla de multiplicar de un numero por pantalla
*/

var numero = parseInt(prompt('De que numero quiere la tabla', 1));

for (var i = 1; i <= 10; i++) {
	console.log(numero + " x " + i + " = " + (numero*i));
}