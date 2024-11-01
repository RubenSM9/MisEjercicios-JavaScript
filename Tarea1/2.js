let nombre = prompt ("Escribe un nombre")
let apellido1 = prompt("Escribe el primer apellido:");
let apellido2 = prompt("Escribe el segundo apellido:");
let salario = prompt ("Escribe tu salario")
let edad = prompt ("Edad")


alert("Tu nombre es " + nombre + " Tus apellidos son " + apellido1 + " " + apellido2 + " Tu salario es " + salario + " Tu edad es " + edad);

if (salario > 2000) {
    salario == salario 
}
if(salario>=1000 && salario<=2000){
    if (edad > 45){
    salario = salario*1.03
    }else{
    salario = salario*1.1
    }
    }else if(salario < 1000){
    if (edad < 30){
    salario = 1100
    }else if (edad >= 30 && edad <= 45){
    salario = salario*1.03
    }
    else{
    salario = salario*1.15
    }
 }


document.write(nombre + " " + apellido1 + apellido2 +" con " + edad + " años cobra " + salario + " €")
console.log(nombre + " " + apellido1 + apellido2 + " con " + edad + " años cobra " + salario + " €")
// alt +  96 comillas raras

