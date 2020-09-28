"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    // EN ECMASCRIPT 6 se puede quitar el duplicado si son iguales:
    // nombre : nombre,
    // edad: edad
    nombre: nombre,
    edad: edad,
    //	mostrarInfo: () =>{
    //		return `${nombre} tiene ${edad} años`;
    //	
    //	}
    // USANDO ES6 DE FUNCIONES EN METODOS
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(crearObjeto('arturo', 22).mostrarInfo());