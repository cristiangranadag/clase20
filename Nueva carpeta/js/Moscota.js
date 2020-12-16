'use strict'
export var vector = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

function sequentialSearch(element, vector){

    for (let index = 0; index < vector.length; index++) {
        if (vector[index] == element) {
            console.log("El elemento " + element + " esta en la posición " + index)
            return index; 
        } 
    }
    console.log("Elemento no encontrado" + element )
}

export var busqueda = sequentialSearch("g",vector);