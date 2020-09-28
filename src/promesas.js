// UNA PROMESA ES UNA SENTENCIA QUE NOS PERMITE ESPERAR A QUE SUCEDEA ALGO
//una promesa tiene como argumento una funcion

const promesa = new Promise((resolve,reject) => {
	// ACCION QUE SE EJECUTARA
	
	setTimeout(()=>{
		const exito = true;
		if (exito){
			resolve('La operacion tuvo éxito');

		
		}else{
			reject('La operacion no tuvo éxito');
		}
	
	},2000);
	

});

promesa.then((mensaje)=>{
	console.log(mensaje);

});

promesa.catch((mensaje)=>{

	console.log(mensaje);

});
