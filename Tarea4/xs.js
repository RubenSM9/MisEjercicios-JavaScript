let vocales = new Map();
vocales.set("A", 0).set("E", 0).set("I", 0).set("O", 0).set("U", 0); // Inicializar el Map con 0

let texto = prompt("Introduce texto: ");
texto = texto.toUpperCase();

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i]; // Obtener cada letra
    // Comprobar si la letra está dentro del Map
    if (vocales.has(letra)) {
        vocales.set(letra, vocales.get(letra) + 1); // Sumar 1 en el conteo
    }
}

// Imprimir en pantalla
document.write(`<h2>Texto: ${texto}</h2><br>`);

// Mostrar tabla
document.write(`<table border="1">`);
document.write(`<tr><th>Vocales</th><th>Nº repeticiones</th></tr>`);

for (let [vocal, repeticiones] of vocales) { // Recorrer el Map
    document.write(`<tr><td>${vocal}</td><td>${repeticiones}</td></tr>`);
}
document.write(`</table>`);

// Eliminar repetidos
let textoSinRepeticionesSet = new Set(texto); // Crear un Set a partir del texto
let textoSinRepeticiones = ""; 
document.write(`<h2>Texto sin repeticiones:</h2>`);

// Recorrer el Set y eliminar espacios
for (let caracter of textoSinRepeticionesSet) {
    if (caracter !== " ") { // Ignorar espacios
        textoSinRepeticiones += caracter; // Construir el texto sin repeticiones
    }
}

document.write(`<h3>${textoSinRepeticiones}</h3>`);
