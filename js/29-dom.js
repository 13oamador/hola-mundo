'use strict'

//DOM - Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}


/*CONSEGUIR ELEMENTOS POR EL ID*/
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Ahora soy un perro";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola"

console.log(caja);

/*CONSEGUIR ELEMENTOS POR ETIQUETA*/
var todosLosDivs = document.getElementsByTagName('div');

//var contenidoTexto = todosLosDivs[2].textContent;
var section = document.querySelector("#misection");
var hr = document.createElement("hr");

for(var indice in todosLosDivs){
	if(typeof todosLosDivs[indice].textContent == 'string'){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[indice].textContent);
		parrafo.append(texto);
		section.append(parrafo);
	}
}
section.append(hr);


/*CONSEGUIR ELEMENTOS POR CLASE*/
var divsRojos = document.getElementsByClassName('rojo');
for(indice in divsRojos){
	if(divsRojos[indice].className == "rojo"){
		divsRojos[indice].style.background = "yellow";	
	}
}

console.log(divsRojos);


//QuerySelector
var id = document.querySelector("#Encabezado");
console.log(id);

id = document.querySelectorAll(".rojo");
console.log(id);
