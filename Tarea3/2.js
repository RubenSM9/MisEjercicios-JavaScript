let numero
let array = [] 


for (let i = 0; i < 20; i++) {
    numero = Math.floor(Math.random() * 50) + 1 
    array.push(numero)

}    
document.write("Tus números son: " + array + "<br>" + "<br>");
document.write("EL DIBUJO SE VE ASÍ: " + "<br>")

array.forEach(function (numero) {
document.write("*".repeat(numero) +  "<br>" )
});

