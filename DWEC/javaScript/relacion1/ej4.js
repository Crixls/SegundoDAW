/*
    @author: Cristina Luque Santaella
    @description: Debemos unir varios arrays en uno solo
*/

/**
 * Función que sirve para unir varios arrays en uno solo
 * @param  {...Arrays} arrays 
 * @returns {Array}
 */
const unirArrays = (...arrays) => arrays.reduce((resultado, arr) => resultado.concat(arr), []);


const arr1=[1,2,3,4];
const arr2=[7,8,9];
const arr3=[11,12];

const resultado = unirArrays(arr1,arr2,arr3);
console.log(resultado);
