'use strict'

window.addEventListener('load', () => {
	//TIMERS

	function intervalo(){
		var tiempo = setInterval(function(){
			console.log("Set inteval ejecutado");

			var encabezado = document.querySelector("h1");
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "20px";
			}else{
				encabezado.style.fontSize = "50px";	
			}
			
		}, 1000);	

		return tiempo;
	}	

	var tiempo = intervalo();
	var stop = document.querySelector("#stop");

	stop.addEventListener('click', () =>{
		alert("Intervalo detenido");
		clearInterval(tiempo)
	});

	var start = document.querySelector("#start");
	start.addEventListener('click', () =>{
		alert("Intervalo iniciado");
		intervalo();
	});
});