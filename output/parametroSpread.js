"use strict";

var mostrarDatos = function mostrarDatos() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

var arregloDatos = ['Alejandro', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos.apply(void 0, arregloDatos);