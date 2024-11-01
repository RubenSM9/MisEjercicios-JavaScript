let numero = prompt("Inserte un numero: ")
let real // inicializa fuera 
let valor

if (numero >= 0 ) {
    real=numero
} else if (numero < 0 ) {
    real  = numero * (-1) 
    
}

if (numero % 2 === 0) {
    valor = "par"
} else {
    valor = "impar"
}

document.write("El valor absoluto de tu numero es: "  + real  + " es " + valor  )