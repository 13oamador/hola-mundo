'use strict'

//LOCAL STORAGE


//Verificar que el localstorage esta disponible
if(typeof(Storage) !== 'undefined'){
	console.log("Local storage disponible");
}else{
	console.log("Local storage no disponible");
}


//Guardar datos en el localstorage
localStorage.setItem("Titulo", "XXX");

//Recuperar datos en el localstorage
console.log(localStorage.getItem("Titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

//Guardar Objetos en el localstorage
var usuario = {
	nombre: "Oscar Amador",
	email: "oamador10@gmail.com",
	edad: "32"
};

localStorage.setItem("Usuario", JSON.stringify(usuario));

//Recuperar objeto en el localstorage
console.log(JSON.parse(localStorage.getItem("Usuario")));
document.querySelector("#datos").append(JSON.parse(localStorage.getItem("Usuario")).edad);


localStorage.removeItem("Usuario");
localStorage.clear();
