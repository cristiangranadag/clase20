'use strict'
import {burbuja,puntos} from './burbuja.js'

export var puntosS =1;  
puntosS = puntos +1;

var vector = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

function sequentialSearch(element, vector){

    for (let index = 0; index < vector.length; index++) {
        if (vector[index] == element) {
            console.log("El elemento " + element + " esta en la posición " + index)
            return index; 
        } 
    }
    console.log("Elemento no encontrado" + element )
}
sequentialSearch("k",vector);


// var vector = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

// function BusquedaSecuencial(element, array){

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] == element) {
//             console.log("El elemento esta ubicado: " + index)
//             return index; 
//         } 
//     }
//     console.log("El elemento no esta en el vector ")
// }
// BusquedaSecuencial("o",vector);