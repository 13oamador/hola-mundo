'use strict'

/*
PARAMETROS
REST y SPREAD
*/


//REST
function listadoFrutas(fruta1, fruta2, ...resto_Frutas){
	console.log("Fruta 1 ", fruta1);
	console.log("Fruta 2 ", fruta2);
	console.log("Resto de Frutas ", resto_Frutas);

}
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Jocote", "Melon");

//SPREAD
var frutas = ["Naranja", "Manzana", "Sandia", "Pera", "Jocote", "Melon"];
listadoFrutas(...frutas);

/*****************************************************************************/