let altura
let array = []
let map = new Map ()
let suma = 0 // inicializar que la variable es un numneroo
let media = 0

while (true) {
    altura = parseInt(prompt("Inserta altura: "));
        if (altura === 0) {
            break;
        }
    array.push(altura);
}
// ocument.write("Numeros introdcuidos: " +  array)

for (let i = 0; i < array.length; i++) {
    suma += array[i] 
    media = suma / array.length    
}
document.write("La altura media es: " + media)

array = map 
if (altura > media) {
    
}