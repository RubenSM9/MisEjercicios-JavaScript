let numero = prompt ("Dame un numero")

while (numero < 0 || isNaN(numero)) {
    console.log("Escriba algo correcto")
    numero = prompt("Inserte un número positivo:");  
}
if (numero >= 0) {
    let factorial = 1;

    // Calcular el factorial
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.write("el factorial de " + numero + " es " +  factorial)
    console.log("El factorial de " + numero + " es: " + factorial);
}