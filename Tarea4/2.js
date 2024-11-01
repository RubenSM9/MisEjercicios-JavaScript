let alturas = new Map()
let media = 0
let nMayorMedia = 0
let nMenorMedia = 0
let altura
let nombre

altura = Number(prompt("Introduce altura (pulse 0 para terminar)"))
while (!isNaN(altura) && altura > 0) {
    nombre = prompt("Inserte Nombre:")
    alturas.set(nombre, altura)
    altura = Number(prompt("Inserta altura en cm (pulse 0 para terminar) "))
}


if (alturas.size > 0) {
   
    for (let [key, value] of alturas) {
        media += value; // como decir media = media (0) + altura
    }
    media = media / alturas.size
    document.write("La media es: " + media + "<br>")
    
    
    document.write("Mayores de la media<br>")
    for (let [persona, valorAltura] of alturas) {
        if (valorAltura > media) {
            nMayorMedia += 1 // nmayor = nmayor(0) +1
            document.write(`${persona}: ${valorAltura} <br>`)
        }
    }
    document.write(`Nº de personas mayores de la media: ${nMayorMedia} <br><br>`);
    
   
    document.write("Menores de la media<br>");
    for (let [persona, valorAltura] of alturas) {
        if (valorAltura < media) {
            nMenorMedia += 1;
            document.write(`${persona}: ${valorAltura} <br>`);
        }
    }
    document.write(`Nº de personas menores de la media: ${nMenorMedia} <br>`);
} else {
    document.write("No se introdujeron alturas válidas.");
}
