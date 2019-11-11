'use strict'

/*Transformacion de textos*/

var numero = 13;
var texto1 = "Bienvenido al curso MasterJS - Oscar Amador";
var texto2 = "Buen curso";

/*
var dato = numero.toString();

//Mayusculas
dato = texto1.toUpperCase();
//Minusculas
dato = texto1.toLowerCase();

console.log(dato);

//Calcular longitud del texto
var nombre = "Oscar Amador";

//Cantidad de elementos en un vector variables.length
nombre = ["Oscar", "Amador"];

console.log(nombre.length);


//Concatenar - Unir textos
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);
textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);
*/

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//Ultima aparicion de la palabra
busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

busqueda = texto1.match("curso");
console.log(busqueda);

busqueda = texto1.substr(14, texto1.length-1);
console.log(busqueda);

busqueda = texto1.charAt(14);
console.log(busqueda);

busqueda = texto1.startsWith("Bienvenido");
console.log(busqueda);

busqueda = texto1.endsWith("Amador");
console.log(busqueda);

busqueda = texto1.includes("Amador");
console.log(busqueda);

busqueda = texto1.replace("Amador", "Bermudez");
console.log(busqueda);

busqueda = texto1.slice(14);
console.log(busqueda);

busqueda = texto1.split(" ");
console.log(busqueda);

busqueda = texto1.trim();
console.log(busqueda);