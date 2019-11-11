'use strict'

/*
vamos a hacer una calculadora
1. Pida dos numeros por pantalla
2. Pida numeros validos
3. En el cuerpo de la pagina, en un alert y consola el resultado de las operaciones
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero1)){
	numero1 = parseInt(prompt('Introduce el primer numero', 0));
	numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

var resultadoHTML = "La suma es: " + (numero1 + numero2) + "<br/>" +
 					"La resta es: " + (numero1 - numero2) + "<br/>" +
 					"La multiplicacion es: " + (numero1 * numero2) + "<br/>" +
 					"La division es: " + (numero1 / numero2) + "<br/>";

var resultado = "La suma es: " + (numero1 + numero2) + "\n" +
 				"La resta es: " + (numero1 - numero2) + "\n" +
 				"La multiplicacion es: " + (numero1 * numero2) + "\n" +
 				"La division es: " + (numero1 / numero2) + "\n";


console.log(resultado);
alert(resultado);
document.write("<h1> El resultado es " + resultadoHTML + "</h1>");

