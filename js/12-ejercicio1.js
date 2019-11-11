'use strinct'

/*
Programa que pida dos numeros y que diga cual es mayor o si son iguales
PLUS: si los datos no son un numero o son menores o iguales a 0, que vuelva a pedir info
*/

var numero1 = parseInt(prompt('Introduzca el primer numero', 0));
var numero2 = parseInt(prompt('Introduzca el segundo numero', 0));

while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2))
{
	numero1 = parseInt(prompt('Introduzca el primer numero', 0));
	numero2 = parseInt(prompt('Introduzca el segundo numero', 0));
}


if(numero1 == numero2)
{
	alert("Numeros son iguales");
}else if(numero1 > numero2){
	alert("El numero mayor es " + numero1);
	alert("El numero menor es " + numero2);
}else if(numero2 > numero1)
{
	alert("El numero mayor es " + numero2);
	alert("El numero menor es " + numero1);
}else{
	alert("Introduzca numeros correctos");
}

console.log(numero1, numero2);

