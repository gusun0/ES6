"use strict";

// UNA PROMESA ES UNA SENTENCIA QUE NOS PERMITE ESPERAR A QUE SUCEDEA ALGO
//una promesa tiene como argumento una funcion
var promesa = new Promise(function (resolve, reject) {
  // ACCION QUE SE EJECUTARA
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve('La operacion tuvo éxito');
    } else {
      reject('La operacion no tuvo éxito');
    }
  }, 2000);
});
promesa.then(function (mensaje) {
  console.log(mensaje);
});
promesa["catch"](function (mensaje) {
  console.log(mensaje);
});