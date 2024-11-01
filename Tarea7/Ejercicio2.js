// Función para sumar
function Suma() {
    var num1 = parseFloat(document.getElementById("Primero").value);
    var num2 = parseFloat(document.getElementById("Segundo").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 + num2;
        document.getElementById("Resultado").value = resultado; // Muestra el resultado
    } else {
        document.getElementById("Resultado").value = "Por favor ingrese ambos números";
    }
}

// Función para restar
function Resta() {
    var num1 = parseFloat(document.getElementById("Primero").value);
    var num2 = parseFloat(document.getElementById("Segundo").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 - num2;
        document.getElementById("Resultado").value = resultado; // Muestra el resultado
    } else {
        document.getElementById("Resultado").value = "Por favor ingrese ambos números";
    }
}

// Función para multiplicar
function Multiplicacion() {
    var num1 = parseFloat(document.getElementById("Primero").value);
    var num2 = parseFloat(document.getElementById("Segundo").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado = num1 * num2;
        document.getElementById("Resultado").value = resultado; // Muestra el resultado
    } else {
        document.getElementById("Resultado").value = "Por favor ingrese ambos números";
    }
}

// Función para dividir
function Division() {
    var num1 = parseFloat(document.getElementById("Primero").value);
    var num2 = parseFloat(document.getElementById("Segundo").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            var resultado = num1 / num2;
            document.getElementById("Resultado").value = resultado; // Muestra el resultado
        } else {
            document.getElementById("Resultado").value = "No se puede dividir por 0";
        }
    } else {
        document.getElementById("Resultado").value = "Por favor ingrese ambos números";
    }
}
