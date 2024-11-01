let apuesta = prompt("Inserte tu numero de apuesta del (1 al 10):")
let array = []
const lista = new Map ([[1,0],[2,0], [3,0], [4,0] ,[5,0], [6,0] , [7,0], [8,0] ,[9,0], [10,0]]) // concatenado
// otar forma numeros.set(1,0).set(2,0)

// si fueron muchos numeros
// for (let i = 1; i< 10; i++)
// numeros.set(i, 0)

for (let i = 1; i <= 10000; i++) {
    numero = Math.floor(Math.random() * 10) + 1 
    array.push(numero)                             
}

for(let numero of array) {
    let valor = lista.get(numero)
    valor = valor + 1
    lista.set(numero, valor)
    
 }

document.write("Ocurrencias de cada número: <br>" + lista)
for(let [key, value] of lista) {
    document.write(`Número ${key}: ${value} <br>`)
}
let mayor = 0
let NumeroMasRepetido = null

 for (let [key, value] of lista){
     if (value > mayor) {
         mayor = value
         NumeroMasRepetido = key
     }
 }
 
document.write("El numero que mas se repite es: " + NumeroMasRepetido )
if (NumeroMasRepetido === numero) {
    document.write("Usted gana, acerto el nuemro quqe mas se repite") 
} else if(NumeroMasRepetido !== numero){
    document.write(" Perdiste, perdedor!!")}

 