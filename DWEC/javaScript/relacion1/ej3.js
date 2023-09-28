/*
    @author: Cristina Luque Santaella
    @description: Debemos crear una función que tome un array y devuelva uno
    nuevo con valores solo pares
*/

/**
 * Esta función filtra los pares de un array
 * @param {Array} arr 
 * @returns{Array}
 */
const filtrarPares = arr => {
     return arr.filter(num => num%2===0);

}

const arr=[1,4,5,2,6,7];
const resultado = filtrarPares(arr);
console.log(resultado);


