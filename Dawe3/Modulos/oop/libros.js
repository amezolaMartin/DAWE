var _paginaActual = Symbol();
import Producto from './productos.js';
export default class Libro extends Producto {

	constructor(titulo, autor, precio){
		super(titulo, autor, precio);
		this[_paginaActual] = 0;
	}

	marcador(pagina){
		this[_paginaActual] = pagina;
		this.obtenerPagina();
	}

	pasarPagina(){
		this[_paginaActual]++;
	}

	obtenerPagina(){
		console.log("Estoy en la página: " + this[_paginaActual]);
	}
}
