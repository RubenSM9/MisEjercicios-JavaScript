let array = []
const lista = new Map ([[1,0],[2,0], [3,0], [4,0] ,[5,0], [6,0] , [7,0], [8,0] ,[9,0], [10,0]])

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
 for(let [key, value] of lista) { // te rcorre el map da igual el nombre 
     document.write(`Número ${key}: ${value} <br>`)
 }


// se actualizo el rep 
