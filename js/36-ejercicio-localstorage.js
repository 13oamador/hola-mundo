'use strict'

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit', () =>{
	var titulo = document.querySelector("#addpelicula").value;
	if(titulo.length >= 1){
		localStorage.setItem(titulo, titulo);	
	}	
});


for(var indice in localStorage){
	
	if(typeof(localStorage[indice]) == 'string'){
		var li = document.createElement("li");	
		li.append(localStorage[indice]);
		document.querySelector("#peliculasList").append(li);		
	}	
}


var botonBorrar = document.querySelector("#borrarPeli");
botonBorrar.addEventListener('click', () =>{
	console.log("borrar");
	localStorage.removeItem(document.querySelector("#deletepelicula").value);				
});