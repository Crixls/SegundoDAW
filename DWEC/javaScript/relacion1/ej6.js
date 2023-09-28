/*
    @author: Cristina Luque Santaella
    @description: Debemos tomar un array y ordenarlo de menor a mayor
*/

/**
 * Función que ordena de menor a mayor un array
 * @param {Array} arr 
 * @returns 
 */
const ordenarNumeros = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arreglo = [9, 3, 1, 2];
const resultado = ordenarNumeros(arreglo);
console.log(resultado);
