'use strict'

//EVENTOS

window.addEventListener('load', () => {

	function cambiaColor(){
		var bg = boton.style.background;
		if(bg == "green"){
			boton.style.background = "red";

		}else{
			boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";
		return true;
	}

	var boton = document.querySelector("#boton");

	//Evento Click
	boton.addEventListener('click', function(){
		cambiaColor();
		this.style.border = "10px solid black";
	});

	//Funcion de flecha
	/*boton.addEventListener('click', () => {
		cambiaColor();
	});*/

	//Evento MouseOver
	boton.addEventListener('mouseover', function(){
		boton.style.background = "#ccc";
	});

	//MouseOut
	boton.addEventListener('mouseout', function(){
		boton.style.background = "yellow";
	});


	var input = document.querySelector("#campo_nombre");

	//Focus
	input.addEventListener('focus', function(){
		console.log("Foco en el input");
	});

	//Blur
	input.addEventListener('blur', function(){
		console.log("Saliste del input");
	});

	//Keydown
	input.addEventListener('keydown', function(event){
		console.log("[keydown] Pulso una tecla en el input " + String.fromCharCode(event.keyCode));
	});

	//Keypress
	input.addEventListener('keypress', function(event){
		console.log("[keypress] Presiono una tecla en el input " + String.fromCharCode(event.keyCode));
	});

	//Keyup
	input.addEventListener('keyup', function(event){
		console.log("[keyup] Levanto una tecla en el input " + String.fromCharCode(event.keyCode));
	});
	
});//EndLoad