
var vector = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
// Recibe un array y el elemento a Buscar. Devolverá el arreglo  si en caso
function busquedaBinaria(arr, busqueda){
    const puntoMedio = Math.floor(arr.length / 2);
    if (arr[puntoMedio] === busqueda) {
        console.log('Elemento en la parte media')
      return arr[puntoMedio];
    }
    if (arr[puntoMedio] < busqueda && arr.length > 1) {
        console.log('Elemento en la parte alta')
     return busquedaBinaria(arr.slice(puntoMedio), busqueda);
    }
    if (arr[puntoMedio] > busqueda && arr.length > 1) {
        console.log('Elemento en la parte baja')
     return busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
    }
    return "no encontrado :(";   
}
console.log(busquedaBinaria(vector,"s"))