//IMPLEMENTA LAS FUNCIONES QUE FALTAN PARA:

//1. Insertar un elemento delante de otro indicando su posición con un numero.
//   Si no se marca la posición se insertará al principio

//2. Poder eliminar un nodo indicado por una posición con un número.
//   Si no se especifica posicion se elimina la primera

//3. Poder reemplazar un elemento por otro. Intoducimos los datos de una tarea y el número de la tarea a reemplazar

//4. Poder insertar una tarea especificando su atributo id y su atributo class.
//   Por defecto se insertarán en la sección <main> pero si le indicamos otra zona o sección del HTML que la inserte
//   en la zona dada

//5. Poder visualizar los elementos del DOM de una zona dada. Ahora siempre saca el <main>



//obtiene los elementos hijos de un elemento pasado como parámetro
function obtenerDom(elemento){
    let salida="";
    let nodo = document.getElementById(elemento);
    for(let n of nodo.childNodes){
        //dfohiusdbjkYdocument.write(`NodeType:${n.nodeType} NodeName:${n.nodeName} NodeValue:${n.nodeValue} <br>`);
        if (n.nodeType==1){
            salida+=n.nodeName+';';
        }
    }
     document.getElementById("salidaDom").innerHTML=salida;
    }
     

// añade una tarea en el main del documento HTML
function nuevaTarea(){
 let nodoNuevo = document.createElement("p");
 nodoNuevo.innerHTML='<h3>'+document.getElementById("tarea").value+'</h3>'+document.getElementById("descripcion").value;
 //nodoNuevo.setAttribute("class","tareas")
 let nodoPosicion=document.getElementById("posicion");
 nodoPosicion.appendChild(nodoNuevo);
 limpia();
}

// elimina la última tarea
function quitaTarea(){
    // obtenemos el nodo de la tarea a eliminar -- en es caso main
    let nodoPadre = document.getElementById("principal");
    //obtenemos el nodo a eliminar
    let nodoHijo = document.querySelectorAll("main p:last-child")[0];
    //o bien ---  let nodoHijo = document.querySelector("main p:last-child");

    //nodo Padre elimina el nodo Hijo
    nodoPadre.removeChild(nodoHijo);
  }





function limpia(){
    document.getElementById("tarea").value="";
    document.getElementById("descripcion").value="";
   
}