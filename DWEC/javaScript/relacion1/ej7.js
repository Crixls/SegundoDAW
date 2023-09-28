/*
    @author: Cristina Luque Santaella
    @description: Debemos eliminar la primera aparición de un elemento en un array
*/

/**
 * Función que elimina el elemento dado
 * @param {Array} arr 
 * @param {Num} elemento 
 * @returns {Array}
 */
const eliminarElemento = (arr,elemento) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==elemento){
            arr.splice(i,1);
        }
    }
    return arr;
}

const array = [1,7,3,5];
const elem = 5;

const resultado = eliminarElemento(array,elem);
console.log(resultado);