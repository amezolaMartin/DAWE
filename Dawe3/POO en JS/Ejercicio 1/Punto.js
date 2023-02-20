class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    suma(punto) {
        var x = this.x + punto.x;
        var y = this.y + punto.y;
        console.log("Punto {x: " + x + " , y: " + y + " }");
    }
}


console.log(new Punto(1, 2).suma(new Punto(2, 1)));
