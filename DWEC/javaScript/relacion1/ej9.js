/*
    @author: Cristina Luque Santaella
    @description: tomar un array y elemnto y devolver la primera aparición del elemento o -1
    en caso negativo
*/

/**
 * Función que devuelve el índice en el que se encuentra ese número en un array
 * @param {Array} arr 
 * @param {Num} elemento 
 * @returns {Num}
 */
const buscarElemento = (arr,elemento) => {
    if(!arr.includes(elemento)){
        return -1;
    }else {
        return arr.indexOf(elemento);
    }
}

const array= [3,5,7,2,1,5];
const resultado=buscarElemento(array,2);
console.log(resultado);