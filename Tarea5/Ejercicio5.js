function arraypalabras() {
    let usuarioPalabra = prompt("Inserta palabra (para salir deje el espacio vacío): ");
    const mapPalabras = new Map();

    while (usuarioPalabra !== "") {
        if (mapPalabras.has(usuarioPalabra)) {
            mapPalabras.set(usuarioPalabra, mapPalabras.get(usuarioPalabra) + 1);
        } else {
            mapPalabras.set(usuarioPalabra, 1);
        }

        usuarioPalabra = prompt("Inserta palabra (para salir deje el espacio vacío): ");
    }

    
    for (let [palabra, conteo] of mapPalabras) {
        document.write(`Palabra: ${palabra}, Veces: ${conteo}<br>`);
    }
}

arraypalabras();
