function Boton() {
    var textonormal = document.getElementById("IngresaTexto").value;
    var array = [...textonormal];
    var textoinvertido = ""; // para que sepa que es variable string (palabra)

    // i tiene que ser igual al array para que vaya leyendo desde alli para abajo al 
    // poner luego la --i y en 0 se termina el array y muestro
    for (let i = array.length - 1; i >= 0; i--) {
        textoinvertido += array[i]; 
    }

    document.getElementById("Revertir").value = textoinvertido;
}
// Otra forma 
// Invertir el array y convertirlo de nuevo en una cadena
//var textoInvertido = array.reverse().join('');
//document.getElementById("Revertir").value = textoInvertido;