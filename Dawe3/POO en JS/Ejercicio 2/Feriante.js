class Feriante extends Locutor {
    constructor(nombre) {
        super(nombre, "grita");
    }

    dice(text) {
        super.dice(text.toUpperCase());
    }
}

new Feriante("Asier").dice("Soy el feriante.");