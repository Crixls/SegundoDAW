/*
    @author: Cristina Luque Santaella
    @description: Se debe tomar un array y con un objeto devolver el máximo 
    y mínimo valor de ese array
*/

/**
 * Esta función devuelve un objeto con las propiedades max y min de un array
 * @param {Array} arr 
 * @returns {Object}
 */
const encontrarMaxMin = arr => {
    let max = arr[0];
    let min = arr[0];

  

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i];
        }else{
            min=arr[i];
        }
    }
    const maxMin = {
        max: max,
        min: min
    };
    return maxMin;
}

const array = [2,5,8,1,0];
const resultado = encontrarMaxMin(array);
console.log(resultado);