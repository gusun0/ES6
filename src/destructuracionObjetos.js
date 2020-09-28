const usuario = {
	nombre: 'Carlos',
	correo: 'car@carlos.com',
	edad: 23,
	pais: 'Mexico',
	// profesion: 'Desarrollador'
}

const {edad,pais,profesion="no especificado"} = usuario;

// console.log(edad,pais,profesion);

const mostrarInfo = ({nombre,profesion="estudiante"}) => console.log(`${nombre} es ${profesion}`);



mostrarInfo(usuario);



