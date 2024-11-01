let numeros = prompt("Inserte un número:")
let array = []
let suma = 0; 

while (numeros >= 0) { 
    array.push(numeros)
    numeros = prompt("Inserte otro número:")
}

if (array.length > 0) { 
    let media = suma / array.length 
} else {
    document.write("Los numeros son " + numeros +"La media es: " + media)
}

