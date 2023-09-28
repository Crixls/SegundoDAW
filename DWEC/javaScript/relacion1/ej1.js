/*
    @author: Cristina Luque Santaella
    @description: Devolver un nuevo array que contenga la suma de los dos arrays

*/

 /**
  * Función que suma dos arrays creando otro
  * @param {Array} arr1 
  * @param {Array} arr2 
  * @returns {Array}
  */   
const sumaArrays = (arr1,arr2) => {
    const suma=[];
    if(arr1.length == arr2.length){
        for (let i = 0; i < arr1.length; i++) {
            suma.push(arr1[i]+arr2[i]);
        }
        return suma
    }

}

const arr1=[1,2,3,4];
const arr2=[5,6,7,8];

const resultado = sumaArrays(arr1,arr2);
console.log(resultado);





