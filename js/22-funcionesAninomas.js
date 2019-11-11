'use strict'

/*
FUNCIONES ANONIMAS
Funcion que no tiene nombre
*/

//Funcion Anonima
var pelicula = function(nombre){
	return "La peli es " + nombre;	
}

function sumame(numero1, numero2, sumaYMuestra, sumaDos){
	var suma = numero1 + numero2;

	sumaYMuestra(suma);
	sumaDos(suma);

	return suma;
}

//Funcion de callback
sumame(5,7, function(dato){
	console.log("La suma es " + dato);
},
function(dato){
	console.log("La suma por dos es " + (dato*2));	
});

//Funcion de flecha
sumame(5,7, dato =>{
	console.log("La suma es " + dato);
},
dato =>{
	console.log("La suma por dos es " + (dato*2));	
});