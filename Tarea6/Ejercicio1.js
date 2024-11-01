function palabra() {
    let stop = true
    const lista = new Set()    

    while (stop) {
        let palabra = prompt("Inserta una palabra")

       
        if (palabra === "" || palabra === null) {
            stop = false
        } else {
            lista.add(palabra) 
        }
    }

    // Convierte el Set en un array y lo ordnamos, ya que el sort no se puede usar con el set 
    const listaOrdenada = Array.from(lista).sort().reverse()

    console.log(listaOrdenada) 
}

palabra()
