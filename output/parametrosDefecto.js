"use strict";

function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no especificado';
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 123456;
  return "nombre: ".concat(nombre, ", pais: ").concat(pais, ", correo: ").concat(correo, ", telefono: ").concat(telefono);
}

console.log(registrarUsuario('carlos', undefined, 'car@car.com'));