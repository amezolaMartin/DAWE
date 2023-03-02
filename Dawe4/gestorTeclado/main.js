function inicializarGestorTeclado() {
    
    document.addEventListener("keydown", (event) => {

        if ([37,38,39,40].includes(event.keyCode)){
            event.preventDefault();
            console.log("Ha pulsado " + event.key);
            document.getElementById("ejercicio4b").innerHTML = "Ha pulsado " + event.key;
        }

    })
}

window.onload = inicializarGestorTeclado();