// Calculadora
// Números a introducir
let numero1 = parseFloat(prompt('Número 1. Indica un número.'));
let numero2 = parseFloat(prompt('Número 2. Indica otro número para operar con ambos. Si dejas este espacio en blanco se indicará la raiz cuadrada de Número 1'));
// Arrays resultados.
let ResultadoRaiz = ['El resultado de la raiz  cuadrada es' + ' ' + RaizCuadrada(numero1) ];
let ResultadoSuma = ['El resultado de la suma es' + ' ' + Suma(numero1, numero2) ];
let ResultadoResta = ['El resultado de la resta es' + ' ' + Resta(numero1, numero2) ];
let ResultadoMultipy = ['El resultado de la multiplicación es' + ' ' + Multiply(numero1, numero2) ];
let ResultadoDivision = ['El resultado de la división es' + ' ' + Division(numero1, numero2) ];

// Condicional con un do...while para repetir en búcle el mensaje hasta que se introduzca un valor númerico.
if(isNaN(numero1) === true ) {
    do {
        numero1 = parseFloat(prompt('Introduce un valor númerico para el Número 1'));
    } while(isNaN(numero1))
}
// Condicional para indicar la raiz de Número 1 si falta Número 2 o operar con ambos.
if(isNaN(numero2) === true) {
 alert('En el Número 2  no se indicaba un valor númerico');
 document.write(ResultadoRaiz);
}
else {
    document.write(ResultadoSuma + '<br>' + ResultadoResta + '<br>' + ResultadoMultipy + '<br>' + ResultadoDivision);
}

// Función Raiz

function RaizCuadrada (num1) {
    if (Number.isInteger(Math.sqrt(num1))){
        return Math.sqrt(num1);
    }
    else {
        return Math.sqrt(num1).toFixed(3);
    }
}

// Funciones para suma, multiplicación y división
function Suma (num1, num2){
    if (Number.isInteger(num1+num2)){
       return num1+num2
    }
    else {
       return (num1+num2).toFixed(3)
    }
}

function Resta (num1, num2){
    if (Number.isInteger(num1-num2)){
        return num1-num2
     }
     else {
        return (num1-num2).toFixed(3)
     }
   
}

function Multiply (num1, num2){
    if (Number.isInteger(num1*num2)){
        return num1*num2
     }
     else {
        return (num1*num2).toFixed(3)
     }

}

function Division(num1, num2){
    if (Number.isInteger(num1/num2)){
        return num1/num2
     }
     else {
        return (num1/num2).toFixed(3)
     }
    
}



