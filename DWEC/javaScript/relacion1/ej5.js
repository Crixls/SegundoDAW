/*
    @author: Cristina Luque Santaella
    @description: Debemos tomar una cadena de texto y que devuelva un objeto 
    que cuente las veces en las que sale una palabra
*/

/**
 * Función que calcula el número de palabras repetidas
 * @param {String} texto 
 * @returns {Object}
 */
const contarPalabras = (texto) => {
    const separado = texto.split(" ");
    const contador = {};

    for (let i = 0; i < separado.length; i++) {
        const palabra = separado[i];
        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }

    return contador; 
}

const texto = "Hola que tal estas tú y tú madre";

const resultado = contarPalabras(texto);

console.log(resultado);
