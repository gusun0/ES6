"use strict";

// METODOS PARA TRABAJAR CON CADENAS DE TEXTO
var text = 'Hola Mundo';
console.log(text, 'empieza con h: ', text.toLowerCase().startsWith('h'));
console.log(text, 'termina con o: ', text.toUpperCase().endsWith('O')); // REVISANDO SI UNA CADENA DE TEXTO INCLUYE UNA PALABRA

console.log(text.includes('persona')); // METODOS PARA ARREGLOS

var amigos = ['carlos', 'alejandro', 'cesar', 'manuel'];
console.log(amigos.includes('Manuel'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
})); // PARA BUSCAR EL INDEX EN EL ARREGLO 

console.log(amigos.findIndex(function (amigo) {
  return amigo === 'manuel';
}));