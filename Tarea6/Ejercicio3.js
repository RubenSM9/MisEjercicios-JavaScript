function Palabra(palabras) {
    let arrayPalabras = palabras.split(' ');

    if (arrayPalabras.length < 2) {
        document.write("Por favor ingresa dos palabras.")
        return
    }

    let palabra1 = arrayPalabras[0].toLowerCase().split('').sort().join('')
    let palabra2 = arrayPalabras[1].toLowerCase().split('').sort().join('')

    if (palabra1 === palabra2) {
        document.write("Las palabras son anagramas.")
    } else {
        document.write("Las palabras no son anagramas.")
    }
}

let lista = prompt("Dime dos palabras separadas por un espacio")
Palabra(lista);
