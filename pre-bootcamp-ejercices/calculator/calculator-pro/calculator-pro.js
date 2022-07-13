function calculatorPro() {
let newNumber;
let numberList = [];
  
    do {
      newNumber = prompt('Enter a number or press cancel to stop');
     if (isNaN(newNumber) || newNumber == ''){
         do{
             alert('No númerico')
             newNumber = prompt('Enter a number or press cancel to stop');
             if(isNaN(newNumber) === false && newNumber != '') {
                numberList.push(parseFloat(newNumber))
             }
         } while(isNaN(newNumber) || newNumber == '')
      }
      else {
        numberList.push(parseFloat(newNumber))
    }
    } while (newNumber !== null)
    
  numberList.pop();
 

// Calculos
if (numberList.length === 1){
 return console.log('La Raiz cuadrada del numero introducido es' + ' ' + RaizCuadrada(numberList[0]))
}
else if(numberList.length === 0){
return console.log('No has introducido ningún número')
}
else {
  return console.log('El resultado de la suma es ' + Suma(numberList) + '. ' + 'El resultado de la resta es ' +  Resta(numberList)+ '. ' + 'El resultado de la multiplicación es ' + multiplicación(numberList) + '. ' + 'El resultado de la división es ' + division(numberList) + '.' )
}
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

function Suma (numberList) {
    let suma = 0
   for (let i = 0; i < numberList.length; i++) {
suma += numberList[i];
   }
   return suma
};

function Resta (numberList) {
    let resta = numberList[0]
   for (let i = 1; i < numberList.length; i++) {
resta -= numberList[i];
   }
   return resta
};

function multiplicación (numberList) {
    let multiplicación = 1
   for (let i = 0; i < numberList.length; i++) {
multiplicación *= numberList[i];
   }
   return  multiplicación
};

function division (numberList) {
    let division = numberList[0]
   for (let i = 1; i < numberList.length; i++) {
division /= numberList[i];
   }
   return  division
};

 
 calculatorPro()

 if( confirm('Quiere realizar otra operación?')){
     calculatorPro()    
} console.log( 'Gracias! Hasta otra!')
 
 
 