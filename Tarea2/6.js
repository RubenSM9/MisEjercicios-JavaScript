let dni = prompt("Inserte Numeros DNI: ")


if (dni.length !== 8 || isNaN(dni)) {
    document.write("El DNI debe tener exactamente 8 cifras.");
} else {
    
    let numeroDNI = parseInt(dni)

    let resto = numeroDNI % 23

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    let letra = letras[resto]

   
    document.write("DNI completo: " + dni + "-" + letra)
}
