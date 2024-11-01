let contraseña = prompt("Introduce una contraseña:");

let tieneMayuscula = false;
let tieneMinuscula = false;
let tieneNumero = false;
let tieneLongitudSuficiente = contraseña.length >= 8;

//  La contraseña carácter por carácter
for (let i = 0; i < contraseña.length; i++) {
    let caracter = contraseña[i];

    if (caracter >= 'A' && caracter <= 'Z') {
        tieneMayuscula = true;
    }
    
    if (caracter >= 'a' && caracter <= 'z') {
        tieneMinuscula = true;
    }
    
    if (caracter >= '0' && caracter <= '9') {
        tieneNumero = true;
    }
}


if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneLongitudSuficiente) {
    document.write("La contraseña es válida.<br>");
} else {
    document.write("La contraseña no cumple con los requisitos:<br>");
    
    if (!tieneMayuscula) {
        document.write("- Debe contener al menos una mayúscula.<br>");
    }
    if (!tieneMinuscula) {
        document.write("- Debe contener al menos una minúscula.<br>");
    }
    if (!tieneNumero) {
        document.write("- Debe contener al menos un número.<br>");
    }
    if (!tieneLongitudSuficiente) {
        document.write("- Debe tener 8 caracteres o más.<br>");
    }
}
