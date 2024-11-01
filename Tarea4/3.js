let texto = ""
let vocales = new Map()
let letra = ""

vocales.set("A", 0).set("E",0).set("I",0).set("O", 0).set("U", 0) // SE PEUDE HACER CON FOR O DIRECTAMENTE EN EL MAP 
texto = prompt("Introduce texto: ")
texto = texto.toUpperCase();

for (let i = 0; i < texto.length; i++) {
    //Obtener ahota el valor de lo que se reccore (la cadena de tetxo)
    letra = texto[i]
    // COmprobamos si esa letra esta dentro del Map
    if (vocales.has(letra)) {
        vocales.set(letra, vocales.get(letra)+1)// VA A LA PSOICION Y SUMA 1 // en la tabla 
    }
}

// Imprimir en pantalla
document.write(`<h2>Texto: ${texto}</h2><br>`);

// Mostrar tabla
document.write(`<table border = "1">`)
document.write(`<tr><th> Vocales </th><th> Nº repeticiones </th> </tr>`)

for(let[vocal,repeticiones]of vocales){  // recorremos el map
    document.write(`<tr> <td> ${vocal} </td> <td> ${repeticiones}</td></tr>`)

}
document.write(`</table>`)

//Eliminamos repetidos
let textoSinRepeticionesSet = new Set(texto) // copia lo que hay en la variable texto y el set solo lee lso caracteres ignora espacios vacios
let textoSinRepeticiones  =""
document.write(`<h2>Texto sin repeticiones:</h2>` )

// Recorrer set y eliminar espacios
for(let caracter of textoSinRepeticionesSet){
    if (caracter!==" ") { // ignorar espacios
        textoSinRepeticiones += caracter
    }

}

document.write(`<h3>${textoSinRepeticiones} </h3>`)


