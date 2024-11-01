function imagenes (){
    let texto=""
    const cartas = new Set()
    
    while (cartas.size < 4) {
        numero = parseInt(Math.random()* 20 +1)
        cartas.add(numero)
    }
    
    for(let carta of cartas){
        texto += "<img src = \""+ carta + ".jpg\">"
    }
    

    document.getElementById("Imagenes").innerHTML=texto // reconoce etiqueta html

}



