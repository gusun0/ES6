// PERMITE ORGANIZAR NUESTRO CODIGO

class Usuario {
// es una funcion que se ejecuta una vez que se hace una instancia de usuario
	constructor(nombre,edad,correo){
	// PROPIEDADES DE LA CLASE 
		this.nombre = nombre,
		this.edad = edad,
		this.correo = correo;


	}

//UNA FUNCION SE LE LLAMA METODO CUANDO ESTA DENTRO DE UNA CLASE
	mostrarSaludo(mensaje){
		return mensaje;	
	}


	mostrarInfo(){
		return 	`
		<b>${this.nombre}</b> <br />
		<b>${this.edad}</b> <br />
		<b>${this.correo}</b> <br />
		<hr />
							
		`			
	}
	
}

// NUEVA INSTANCIA DE LA CLASE USUARIO 
const carlos = new Usuario('Carlos',23,'a@æ.com');
document.write(carlos.mostrarInfo());


	// HERENCIA EN JS
//

class Estudiante extends Usuario{
	constructor(nombre,edad,correo,carrera){
		super(nombre,edad,correo);

		this.carrera =  carrera;
		
	}
	mostrarInfo(){
		return 	`
		<b>${this.nombre}</b> <br />  
		<b>${this.edad}</b> <br />
		<b>${this.correo}</b> <br />
		<b>${this.carrera}</b> <br />
		<hr /> 
		`;
	}
}



const alejandro = new Estudiante('Alejandro' ,24,'ale@a.com', 'Desarrollador web');
document.write(alejandro.mostrarInfo());









