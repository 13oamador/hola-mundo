'use strict'

window.addEventListener('load', () => {
	console.log("DOM cargado");

	var formulario = document.querySelector("#formulario");
	var boxDashed = document.querySelector(".dashed");

	boxDashed.style.display = "none";

	formulario.addEventListener('submit', () =>{
		console.log("Formulario - Capturado")

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if(nombre.trim() == null || nombre.trim().length == 0){
			//alert("El nombre no es valido");
			document.querySelector("#errorNombre").innerHTML = "Nombre no es valido <br>";
			document.querySelector("#errorNombre").style.color = "red";
			return false;
		}else{
			document.querySelector("#errorNombre").style.display = "none";
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0){
			//alert("Los Apellidos no son validos");
			document.querySelector("#errorApellidos").innerHTML = "Apellidos no son validos <br>";
			document.querySelector("#errorApellidos").style.color = "red";
			return false;
		}else{
			document.querySelector("#errorApellidos").style.display = "none";
		}

		if(edad == null || edad <= 0 || isNaN(edad)){
			//alert("La edad no es valida");
			document.querySelector("#errorEdad").innerHTML = "Edad no es valida <br>";
			document.querySelector("#errorEdad").style.color = "red";
			return false;
		}else{
			document.querySelector("#errorEdad").style.display = "none";
		}


		boxDashed.style.display = "block";

		/*
		var datos_usuario = [nombre, apellidos, edad];
		for(var indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);	
			boxDashed.append(parrafo);	
		}
		*/

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;
	});
});