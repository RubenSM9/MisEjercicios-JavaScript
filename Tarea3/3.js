let coleccion = []
let suma = 0             
let media               
let intentos = 0        
let numero = null   

while (numero !== 0) {  // Se pone asi para qeu el valor null del numero no corte el bucle al iniciarse
    numero = parseInt(prompt("Inserte un número (0 para terminar):")); 

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido."); 
        continue; // Volver al inicio del bucle si no es un número
    }
    
    if (numero !== 0) {   
        coleccion.push(numero);  
        intentos++;              
        suma += numero;          
    }
}

// Calcular la media solo si hay intentos
if (intentos > 0) {
    media = suma / intentos; 
} else {
    media = 0; 
}


document.write("Colección de números: " + coleccion + "</br>");
document.write("Suma total: " + suma + "</br>");
document.write("Media: " + media + "</br>");
