function array(palabras) {
    let array = palabras.split(' ')

    document.write("Lista de palabras: " + array + "<br>")

    let busqueda = prompt("¿Desea buscar alguna palabra en específico? (deja vacío para salir)")

   
    do {
        busqueda = prompt("¿Desea buscar alguna palabra en específico? (deja vacío para salir)") 

        if (busqueda !== "") {
            if (array.includes(busqueda)) {
                document.write("La palabra '" + busqueda + "' sí está en la lista.<br>")
            } else {
                document.write("La palabra '" + busqueda + "' no se encuentra en la lista.<br>")
            }
        }
    } while (busqueda !== "")
}

let lista = prompt("Dime una lista de palabras separadas por un espacio")
array(lista)
