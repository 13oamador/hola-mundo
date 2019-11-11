'use strict'

//JSON - JAVASCRIPT OBJECT NOTATION

var pelicula = {
	titulo: "Batman",
	year: "2017",
	pais: "USA"
};

var peliculas = [
	{titulo: "XXX",	year: "2019",	pais: "CR"},
	pelicula
];

var cajaPeliculas = document.querySelector("#peliculas");
for(var indice in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[indice].titulo + " - " + peliculas[indice].year);
	cajaPeliculas.append(p);
}

console.log(peliculas);