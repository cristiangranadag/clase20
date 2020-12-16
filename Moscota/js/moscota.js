'use strict'
export var vector = ['Vaca','Caballo','Gato','Gallina','Pato','Perro'];

function sequentialSearch(element, vector){

    for (let index = 0; index < vector.length; index++) {
        if (vector[index] == element) {
            console.log("El elemento " + element + " esta en la posición " + index)
            return index; 
        } 
    }
    console.log("Elemento no encontrado " + element )
}

function busquedaBinaria(arr, busqueda){
    const puntoMedio = Math.floor(arr.length / 2);

    console.log(arr)
    if (arr[puntoMedio] === busqueda) {
        console.log('Elemento en la parte media')
      return arr[puntoMedio];
    }

    if (arr[puntoMedio] < busqueda && arr.length > 1) {
        console.log('Elemento en la parte baja')
     return busquedaBinaria(arr.slice(puntoMedio), busqueda);
    }

    if (arr[puntoMedio] > busqueda && arr.length > 1) {
        console.log('Elemento en la parte alta')
     return busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
    }
    return "no encontrado :(";   
}

export var busqueda = sequentialSearch("Vaca",vector);
busquedaBinaria(vector,"Vaca")


        // var vector = ['Perro','Caballo','Gato','Gallina','Pato','Vaca'];

        // function sequentialSearch(element, vector){

        //     for (let index = 0; index < vector.length; index++) {
        //         if (vector[index] == element) {
        //             console.log("El elemento " + element + " esta en la posición " + index)
        //             return index; 
        //         } 
        //     }
        //     console.log("Elemento no encontrado" + element )
        // }
        // sequentialSearch("Vaca",vector);