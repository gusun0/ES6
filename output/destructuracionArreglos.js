// destructuracion tradicional
const persona = ['carlos arturo',23,'Mexico'];

// const nombre = persona[0];
// const edad = persona[1];

// console.log(nombre);
// console.log(edad);

// desestructuracion en nuestro arreglo
// se deja un espacio unicamente si no se 
// quiere poner el dato en la forma destructurada

// const [nombre, ,pais,profesion="no especificado"] = persona;
// console.log(edad);


// funcion de tipo flecha destructurada
const [nombre, ,pais,profesion="no especificado"] = persona;
const mostrarInfo = ([nombre,,pais,profesion="no especificado"] = persona) => console.log(nombre,pais,profesion);


mostrarInfo(persona);







