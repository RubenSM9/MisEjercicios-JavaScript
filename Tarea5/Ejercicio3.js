function Media(...numero){
    let sumaTotal = 0;
    for (let i = 0; i < numero.length; i++) {
    
    sumaTotal = sumaTotal + numero[i]
    
    
   }
   media = sumaTotal /numero.length;
   console.log("La media es "+ " " + media) 

}

let x = 12
let y = 8
let z = 9
Media(x, y, z,)