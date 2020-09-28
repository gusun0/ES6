function registrarUsuario(nombre,pais = 'no especificado',correo,telefono = 123456){
	return `nombre: ${nombre}, pais: ${pais}, correo: ${correo}, telefono: ${telefono}`;
}

console.log(registrarUsuario('carlos',undefined,'car@car.com'));