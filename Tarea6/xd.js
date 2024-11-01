const alumnos = new Map([[1,"Jose"],[2,"Alvaro"],[3,"Joaquín"],[4,"María"]]);

console.log(alumnos);
let claves = alumnos.keys();
console.log(claves)
let valores = alumnos.values();
console.log(valores)

console.log("--CLAVES----");
for (let clave of claves){
    console.log(clave);
}

console.log("--VALORES----");
for (let valor of valores){
    console.log(valor);
}
