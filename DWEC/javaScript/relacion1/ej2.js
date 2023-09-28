/*
    @author: Cristina Luque Santaella
    @description: Devolver un nuevo array que no tenga elementos duplicados manteniendo el orden
    original
*/


/**
 * Función que devuelve un array sin duplicados
 * @param {Array} arr 
 * @returns {Array}
 */
const eliminarDuplicados = arr => {

    const nuevo=[];
    for (let i = 0; i < arr.length; i++) {
        if(!nuevo.includes(arr[i])){
            nuevo.push(arr[i]);
        }
    }
    return nuevo;
}


const arr=[7,1,2,2,3,4,5,6,6,8,1,9,10,10];
const eliminar = eliminarDuplicados(arr);
console.log(eliminar);