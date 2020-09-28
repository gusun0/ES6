const crearObjeto = (nombre,edad) => {
	return {
		// EN ECMASCRIPT 6 se puede quitar el duplicado si son iguales:
		// nombre : nombre,
		// edad: edad
		nombre,
		edad,

	//	mostrarInfo: () =>{
	//		return `${nombre} tiene ${edad} años`;
	//	
	//	}

		// USANDO ES6 DE FUNCIONES EN METODOS
		mostrarInfo(){
			return `${nombre} tiene ${edad} años`;
		}
        	
	} 
}

console.log(crearObjeto('arturo',22).mostrarInfo());



