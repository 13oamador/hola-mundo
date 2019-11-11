//Modo estricto para mejor manejo de la informacion
'use strict'

//Variables

var pais = "CR";
var continente = "America";
var antiguedad = 2019;
var pais_continente = pais + ' - ' + continente;

//let - var sirven para declarar variables
//let son variables locales
//var variables globales
let prueba = "Hola";

pais = "Holanda";
continente = "Europa";

alert(prueba);
console.log(pais, continente, antiguedad);
alert(pais_continente);
