function dibujaT(fila=10, columna=4, color="black"){

    document.write(`<table style="border:1px solid ${color};width:100%;">`);

for(let i=1;i<=fila;i++){
    document.write(`<tr>`);
    for(let j=1;j<=columna;j++){
        document.write(`<td>0</td>`);
    }
    document.write(`</tr>`);
 }
document.write(`</table>`);

} 

dibujaT();
document.write(`<br>`);
dibujaT(20,10);
document.write(`<br>`);
for(let i=1;i<=10;i++){
   dibujaT(5,4,"green");
   document.write(`<br>`);
}
