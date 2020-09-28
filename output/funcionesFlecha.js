"use strict";

var nombres = ['carlos', 'alejandro', 'manuel', 'cesar'];
var num_carac = nombres.map(function (nombre) {
  return nombre.length;
});
/*const num_carac = nombres.map(function(nombre){
	return nombre.length;
});*/

console.log(num_carac);