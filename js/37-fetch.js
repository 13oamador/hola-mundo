'use strict'

/*FETCH(AJAX) Y PETICIONES A SERVICIOS / APIS REST*/

//LISTADO DE USUARIOS

var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario");
var div_profesor = document.querySelector("#profesor");

getUsuarios()
	.then(data => data.json())
	.then(users => {
		listadoUsuarios(users.data);
		return getInfo();				
	})
	.then(data => {
		mostrarProfesor(data);
		return getUsuario();
	})
	.then(data => data.json())
	.then(user => {
		mostrarUsuario(user.data);	
	})
	.catch(error => {
		alert("Error en las peticiones");
	});

function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

function getUsuario(){
	return fetch('https://reqres.in/api/users/2');	
}

function getInfo(){
	
	var profesor = {
		nombre: 'Oscar',
		apellido: 'Amador',
		email: 'oamador10@gmail.com'
	};

	return new Promise((resolve, reject) => {
		
		var jsonProfesor = "";

		setTimeout(() => {
			jsonProfesor = JSON.stringify(profesor);	

			if(typeof(jsonProfesor) != 'string' || jsonProfesor == '') { return reject('ERROR'); }

			return resolve(jsonProfesor);
		}, 1000);
	});	
}

function listadoUsuarios(usuarios){
	usuarios.map((user, i) =>{
		let nombre = document.createElement('h3');
		nombre.innerHTML = (i + 1) + ". " + user.first_name + " " + user.last_name;			
		div_usuarios.appendChild(nombre);
		document.querySelector(".loading").style.display = 'none';
	});
}

function mostrarUsuario(user){
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');

	nombre.innerHTML = "1. " + user.first_name + " " + user.last_name;			
	avatar.src = user.avatar;
	avatar.width = '100';
	div_usuario.appendChild(nombre);
	div_usuario.appendChild(avatar);
	document.querySelector("#usuario .loading").style.display = 'none';	
}

function mostrarProfesor(profe){	
	var jsonProf = JSON.parse(profe);
	let profesor = document.createElement('h4');	
	profesor.innerHTML = "1. " + jsonProf['nombre'] + " " + jsonProf['apellido'];					
	div_profesor.appendChild(profesor);	
	document.querySelector("#profesor .loading").style.display = 'none';	
}