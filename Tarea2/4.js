let a = 0
let b = 1
let fivo
let resultado = a + ", " + b

for (let i = 3; i <= 20; i++) {
    fivo = a + b
    resultado += ", " + fivo
    a = b
    b = fivo
}

document.write(resultado)
