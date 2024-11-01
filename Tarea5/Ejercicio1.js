function par (numero){
modulo = numero %2
    if (modulo === 0) { 
    return "El numero es par";
    }else if (modulo != 0) { 
         return "El numero es impar";
     }
    }

let x = 30
console.log(par(x))

for (let i = 0; i < 100; i++) {
let random = Math.floor(Math.random() * 10000) +1
console.log(`Numero aleatorio: ${random}`)
console.log(par(random)) }
