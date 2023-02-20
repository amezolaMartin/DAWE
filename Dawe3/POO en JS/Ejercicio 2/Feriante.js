class Feriante extends Locutor {
    constructor(nombre) {
        super(nombre);
        this.verbo = "grita";
    }

    dice(s) {
        console.log(this.nombre + " " + this.verbo + " '" + s.toUpperCase() + "'")

    }
}

new Feriante("Asier").dice("Soy el feriante.");