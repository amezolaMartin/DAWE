class Locutor {
    constructor(nombre) {
        this.nombre = nombre;
        this.verbo = "dice";
    }
    // Funciones


    dice(s) {
        console.log(this.nombre + " " + this.verbo + " '" + s + "'");
    }


}

new Locutor("Ramón").dice("Soy el locutor.");

