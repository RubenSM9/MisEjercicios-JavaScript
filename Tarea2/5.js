let num = prompt("Inserte un número a triangular: ")
num = parseInt(num)
let triangulares = []
let n = 1

while (true) {
    let t = (n * (n + 1)) / 2
    triangulares.push(t)

    if (t >= num) break
    n++
}

let esTriangular = false

for (let i = 0; i < triangulares.length; i++) {
    if (triangulares[i] === num) {
        esTriangular = true
        break
    }
}

if (esTriangular) {
    document.write(num + " es triangular.")
} else {
    let menor = triangulares[triangulares.length - 1]
    let mayor = (n * (n + 1)) / 2
    document.write(num + " no es triangular, menor: " + menor + ", mayor: " + mayor + ".")
}
