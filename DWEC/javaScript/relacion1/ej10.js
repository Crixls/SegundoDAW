/*
    @author: Cristina Luque Santaella
    @description: tomar un array y elemnto y devolver la primera aparición del elemento o -1
    en caso negativo
*/

/**
 * Esta función divide un array dependiendo del tamaño dado
 * @param {Array} arr 
 * @param {Number} tamano 
 * @returns {Array}
 */
const dividirFragmento = (arr, tamano) =>{
    const newArr= [];

    for (let i = 0; i < arr.length; i += tamano) {
        const fragmento = arr.slice(i, i + tamano);
        newArr.push(fragmento);
    }

    return newArr;

}

const array = [3,5,7,8,4,3,5];
const resultado = dividirFragmento(array,3);
console.log(resultado);