const numeros = new Set([2, 4, 35, 13])
console.log(numeros)
const arrayNum = [ ...numeros] // de set a array
console.log(arrayNum)
numeros.add(2)
arrayNum[arrayNum.length] = 2
console.log(arrayNum)
const nuevoSet = new Set([... arrayNum]) // creo nuevo conjunto 
console.log(nuevoSet)
