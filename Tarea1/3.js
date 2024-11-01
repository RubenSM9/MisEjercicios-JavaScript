let numeroUsuario = parseInt(prompt ("Inserta un numero:"))

while (numeroUsuario < 0 || isNaN(numeroUsuario)) {
    console.log("Escriba algo correcto")
    numeroUsuario = parseInt(prompt("Inserte un número positivo:"));  
}

if (numeroUsuario >= 0) {
    for (let i = 1; i <= numeroUsuario; i++) {
        document.write("<br>");
        for (let j = 0; j < i; j++) {
            document.write("*");
            
        }
        
    }
} 



