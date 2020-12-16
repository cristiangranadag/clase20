'use strict'
export var vector = ['Perro','Caballo','Gato','Gallina','Pato','Vaca'];
function sequentialSearch(element, vector){
    for (let index = 0; index < vector.length; index++) {
        if (vector[index] == element) {
            console.log("El elemento " + element + " esta en la posición " + index)
            return index; 
        } 
    }
    console.log("Elemento no encontrado" + element )
}