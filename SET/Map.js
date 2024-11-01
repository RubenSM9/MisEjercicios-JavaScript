const provincias = new Map()
provincias.set(30562, "Murcia ").set(342,"Andalucia")
console.log(provincias)


const provincias2 =  new Map([[28, "Madrid"], [30, "Murcia"], [22, "Dani"]])
console.log(provincias2)

//obtener datos get

console.log(provincias2.get(22))

// buscar has
console.log(provincias2.has(22)) // solo funciona con valores clave 

// Keys values

const codigo = provincias2.keys() // te dice las clvaes
const ciudades = provincias2.values() // te devuelve el valor 
console.log(codigo)
console.log(ciudades)

// Sirve para separarlos 

// Ejecutarlo

for(let codigo of provincias2){
    console.log(codigo)
}

for(let ciudad of ciudades){
    console.log(ciudad)
}

const arrayCiudades = [...provincias2];
console.log(arrayCiudades);
console.log(`Codigo: ${arrayCiudades[2][0]} Ciudades: ${arrayCiudades[2][1]}`);

// derecha p clic espacio

// recorrer clave y valor a la ver con un for
 const objeto = {
    ciudad1: 'Madrid',
    ciudad2: 'Barcelona',
    ciudad3: 'Valencia'
};

for (const [clave, valor] of Object.entries(objeto)) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}