"use strict";

var usuario = {
  nombre: 'Carlos',
  correo: 'car@carlos.com',
  edad: 23,
  pais: 'Mexico' // profesion: 'Desarrollador'

};
var edad = usuario.edad,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? "no especificado" : _usuario$profesion; // console.log(edad,pais,profesion);

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "estudiante" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);