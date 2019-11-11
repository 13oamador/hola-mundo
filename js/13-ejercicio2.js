'use strict'

/*
Utilizar ciclo, mostrar la suma de la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
	var numero = parseInt(prompt('Introducir numeros hasta que metas un negativo', 0));
	if(isNaN(numero))
	{
		numero = 0;

	}else if(numero >= 0)
	{
		suma = suma + numero;
		contador++;
	}
}while(numero >=0)

alert("La suma es " + suma);
alert("El promedio de la suma es " + suma/contador);

