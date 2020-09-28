// EL ARCHIVO QUE SE IMPORTA SE PONE SIN LA EXTENSION .js
import {mensajeAlerta,saludo} from './modulos/mensajeAlerta';

// aqui en vez de poner persona podemos poner cualquier nombre en import por que se exporto por defualt 
// en export default se omiten las llaves import { }
import PersonaJ from './modulos/clasePersona';

mensajeAlerta('Hola Carlos');
saludo();

const jorge = new PersonaJ('Jorge',24);
jorge.mostrarInfo();
