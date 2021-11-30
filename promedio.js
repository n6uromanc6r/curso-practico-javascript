const lista1 = [
    100,
    200,
    300,
    500
];
function promedio(datos){
/* let sumaLista1 = 0;

    for (i=0; i< datos.length ; i++){
    sumaLista1 = sumaLista1 + datos[i];    
    } */
const sumaLista = datos.reduce(
    function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento
    }
);

const promedioLista1 = sumaLista/datos.length;
return promedioLista1;

}