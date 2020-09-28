// NOS PERMITEN PASARLE A UNA FUNCION UN no. INDEFINIDO DE ELEMENTOS O DE ARGUMENTOS
// Y RECIBIRLSO DE FORMA SIMPLE


// MANERA COMO SE HACIA ANTES

//const mostrarDatos = (nombre,edad,correo,pais) => { 
//	console.log(nombre,edad,correo,pais); 
//}

//mostrarDatos('Carlos',23,'car@car.com','Mexico');

// USANDO REST
// todos los datos de ... datos se guardan dentro de un arreglo

const mostrarDatos = (...datos) => {
	console.log(datos); 
}

mostrarDatos('Carlos',23,'car@car.com','Mexico');
