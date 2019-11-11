'use strict'

//Arrays - Arreglos
var nombre = "Oscar Amador";
var nombres = ["Oscar Amador", "Emi Fernandez", "Fany Bermudes"];

var lenguajes = new Array("PHP", "JS", "C#", "JAVA");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);


/*Array Avanzados*/
var elemento = parseInt(prompt("Que elemento del array quiere?", 0));
if(elemento >= nombres.length){
	alert("Numero incorrecto");
}else{
	alert("Usuario seleccionado -> " + nombres[elemento]);	
}

document.write("<h1>Lenguajes de Programacion </h1>")
document.write("<ul>");
/*for (var i = 0; i < lenguajes.length; i++) {
	document.write("<li>" + lenguajes[i] + "</li>");
}*/

lenguajes.forEach((elemento, index, data)=>{
	console.log(data);
	document.write("<li>" + index + " - " + elemento + "</li>");
});
document.write("</ul>");

/*FOR IN*/
for (let indice in lenguajes) {
	document.write("<li>" + lenguajes[indice] + "</li>");
}


/*BUSQUEDAS*/
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);

busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda);

var precios = [10, 20, 50, 30];
busqueda = precios.some(precio => precio >= 20);
console.log(busqueda);