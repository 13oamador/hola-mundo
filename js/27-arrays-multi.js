'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La vida es bella", "La verdad duele", "Gran Torino"];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);

/*OPERACIONES CON ARRAYS*/
var elemento = " ";
do{
	elemento = prompt("Introduce la pelicula");
	peliculas.push(elemento);	
}while(elemento != "ACABAR")

peliculas.pop();
console.log(peliculas);

var indice = peliculas.indexOf("La verdad duele");
if(indice > -1){
	peliculas.splice(indice, 1);
}
console.log(peliculas);

var peliculas_String = peliculas.join();
console.log(peliculas_String);

/*String en Array*/
var cadena = "Text1, Text2, Text3";
var cadena_Array = cadena.split(", ");
console.log(cadena_Array);
