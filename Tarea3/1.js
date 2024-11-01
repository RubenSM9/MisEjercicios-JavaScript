let frase = prompt("Inserte una frase pallico")
let clave = parseInt(prompt("Inserte una clave"))

let terminal = ""
for (let i = 0; i < frase.length; i++) {
   original = clave + frase.charCodeAt(i) 
   terminal = terminal + String.fromCharCode(original)

}

document.write("La frase tarsformada seria = " +  terminal)