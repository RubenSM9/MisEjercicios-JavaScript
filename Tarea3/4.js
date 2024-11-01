let palabra = prompt("Inserte una frase: ");
let fraseOriginal = palabra;  
palabra = palabra.toLowerCase();  

let fraseLimpia = '';
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] >= 'a' && palabra[i] <= 'z') {
        fraseLimpia += palabra[i];
    }
}

// Palíndromo comparando desde los extremos hacia el centro
let longitud = fraseLimpia.length
let esPalindromo = true 

for (let i = 0; i < longitud / 2; i++) {
    if (fraseLimpia[i] !== fraseLimpia[longitud - 1 - i]) {
        esPalindromo = false
        break
    }
}

if (esPalindromo) {
    document.write(`La palabra "${fraseOriginal}" es un palíndromo.`)
} else {
    document.write(`La palabra "${fraseOriginal}" no es un palíndromo.`)
}
