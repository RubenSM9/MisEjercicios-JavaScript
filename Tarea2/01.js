let array = [];  
let numero = parseInt(prompt("Inserta un número positivo (número negativo para terminar): "));

// Pedir números hasta que se ingrese uno negativo
while (numero >= 0) {
    array.push(numero);  // Agregamos los números positivos al array
    numero = parseInt(prompt("Inserta otro número positivo (número negativo para terminar): "));  
}

let suma = 0;  // Inicializamos la variable suma en 0

// Bucle para sumar todos los elementos del array
for (let i = 0; i < array.length; i++) {
    suma += array[i];  // Sumamos cada elemento del array
}

// Calcular la media
let media = suma / array.length;

// Mostrar el resultado en la página
document.write("Los números insertados son: " + array + "<br>La media es: " + media);
