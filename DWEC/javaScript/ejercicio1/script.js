/*
    @author: Cristina Luque Santaella
    @description: Calcular el factorial de un número mayor o igual que 1.

*/

// RECURSIVO


function factorialUno(num){

    if(num <1){
        console.log("Tiene que ser mayor o igual a uno");
    }
    else if(typeof num !== "number"){
        console.log("Debes escribir un número");
    }else if(num ===1){
        return 1;
    }
    else{
        return num * factorialUno(num-1);
    }

 }
//  console.log(factorialUno(4));

// CON FOR


 function factorial2(num){

    let sol=1;

    if(typeof num !== "number"){
       console.log("Se debe de poner un número")
    }else if(num<1){
        console.log("Tiene que ser mayor o igual a uno");
    }else{
        for(let i=1;i<num+1;i++){
           sol *=i;
        }
    }
    return sol;
}

//console.log(factorial2(4));


// CON WHILE

function factorial3(num){

    let fac=1;
    if(typeof num !== "number"){
        console.log("Se debe de poner un número")
    }
    else if(num<1){
        console.log("Tiene que ser mayor o igual a uno");
    }else{
        while(num>0){
            fac= fac*num;
            num--;
        }
        return fac;
    }

}

// console.log(factorial3(4));


// VALIDADOR DNI

function letraDni(numDni){
    let letra;

    if(typeof numDni !== "number"){
        console.log("Se debe de poner un número")
    }else if(numDni === 1){
        console.log(`El número de DNI no puede ser ${numDni}`)
    }else if(numDni>99999999){
        console.log("El número DNI debe tener 8 dígitos")
    }else{
        letra=numDni%23;

        const abc= ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

        let letraDni= abc[letra].toString();

        console.log(`El dni que tenemos es ${numDni}${letraDni}`)
    }
}

// console.log(letraDni(99999999));


// ECUACIÓN DE SEGUNDO GRADO

//segundo grado(a,b,c) se llama la función

function segundoGrado(a,b,c){
    let suma;
    let resta;
    let resultado='';

    suma=(-b+(Math.sqrt((Math.pow(b,2)-4*a*c))))/(2*a);
    resta=(-b-(Math.sqrt((Math.pow(b,2)-4*a*c))))/(2*a);

    if (!isNaN(suma) && !isNaN(resta)) { // Verificamos que suma y resta sean números válidos
        if(suma===0 && resta===0){
            resultado="No hay solución"
        }else if(suma===0){
            resultado=`Solo tenemos como resultado de x:${resta} de la resta`
        }else if(resta==0){
            resultado=`Solo tenemos como resultado de x:${suma} de la suma`
        }else{
            resultado = `Tenemos como resultado x:${suma} por parte de la suma y x:${resta} de la resta`;
        }
    }else{
        resultado=`Los datos introducidos son incorrectos deben ser números`
    }

    return resultado;
}
console.log(segundoGrado(1,2,-8));


// calcular la función con más o menos 

//Soluciones reales
//Si no hay indicarlo
// Si hy una solución doble