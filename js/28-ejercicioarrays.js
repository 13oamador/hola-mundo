'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero(todos los elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valir introducido por el usuario, que nos diga si lo encuentra y su indice 
(se valorara el usuo de funciones)
*/

function mostrarArray(elementos, customText = ""){
	document.write("<h1> Contenido del Array" + customText +  "</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index)=>{
		document.write("<li>" + elemento + "</li>");
	});
	document.write("</ul>");
}


//Solicitar los numeros del array
var numeros = [];

for (var i = 0; i <= 5; i++) {
	numeros.push(parseInt(prompt("Introduzca un numero", 0)));
}


//Mostrar el array por consola
console.log(numeros);

//Mostrar el array en el cuerpo de la pagina
mostrarArray(numeros);

//Ordenar y mostar 
//Orden ascendente
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, " Ordenados");
//Orden descendente
numeros.sort(function(a, b){return b-a});
mostrarArray(numeros, " Descendente");

//Invertir y Mostrar
numeros.reverse();
mostrarArray(numeros, " Invertido")

//Contar cuantos elementos
document.write("<h3>El array tiene " + numeros.length + " elementos</h3>");

//Busqueda
var num_digitado = parseInt(prompt("Busca el numero", 0));

var posicion = numeros.findIndex(busqueda => busqueda == num_digitado);
if(posicion && posicion != -1){
	document.write("<h1>ENCONTRADO</h1>")
	document.write("<h1>Posicion de la busqueda " + posicion + "</h1>");
}else{
	document.write("<h1>NO ENCONTRADO</h1>")
}