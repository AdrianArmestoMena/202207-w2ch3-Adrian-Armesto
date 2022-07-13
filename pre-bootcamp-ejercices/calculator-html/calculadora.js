let ArrayNumerosParaOperaciones = [];
let NumerosSeparados = '';
const SigonesDeOperaciones = [];
const ACclick = [];
const Resultado = document.getElementById('Resultado');

const BotonAC = () => {
    const BotonAC = document.getElementById('botonAC').addEventListener('click',()=>{
        FuncionAC(ArrayNumerosParaOperaciones, NumerosSeparados, SigonesDeOperaciones)
    });
}

let BotonIgual = () => {
    const BotonIgual = document.getElementById('botonIgual').addEventListener('click',()=>{
        MostrarResultado(ArrayNumerosParaOperaciones)
    });
};

let BotonesParaNumeros = () => {
    const BotonesNumeros = document.getElementsByClassName('numeros');
    const ArrayBotonesNumeros = Array.from(BotonesNumeros);
    ArrayBotonesNumeros.forEach(Numero => {
        Numero.addEventListener('click',() => {
            MostrarNumeros(Numero, Resultado)
        })
    });
};

let BotonesParaOperaciones = () => {
    const BotonesOperaciones = document.getElementsByClassName('signos');
    const ArrayBotonesOperaciones = Array.from(BotonesOperaciones);
    ArrayBotonesOperaciones.forEach(Signo => {
        Signo.addEventListener('click', () =>{MostrarSignos(Signo, Resultado)})
    })
}

const MostrarResultado = (ArrayNumerosParaOperaciones) => {
    console.log('sdhisfubfube')
    let ResultadoOperaciones= ArrayNumerosParaOperaciones[0];
    if(NumerosSeparados != ''){ArrayNumerosParaOperaciones.push(NumerosSeparados);};
    if(isNaN(ArrayNumerosParaOperaciones[ArrayNumerosParaOperaciones.length - 1])){ArrayNumerosParaOperaciones.pop();};
    console.log(ArrayNumerosParaOperaciones);
    ArrayNumerosParaOperaciones.forEach(Numero => {
        if(Numero == '+'){
            ResultadoOperaciones = Suma(+ResultadoOperaciones, +ArrayNumerosParaOperaciones[ArrayNumerosParaOperaciones.indexOf(Numero) + 1]);
        }
        else if(Numero == 'X'){
            ResultadoOperaciones = Multiplicacion(+ResultadoOperaciones, +ArrayNumerosParaOperaciones[ArrayNumerosParaOperaciones.indexOf(Numero) + 1]);
        }
        else if(Numero == '/'){
            ResultadoOperaciones = Division(+ResultadoOperaciones, +ArrayNumerosParaOperaciones[ArrayNumerosParaOperaciones.indexOf(Numero) + 1]);
        }
        else if(Numero == '-'){
            ResultadoOperaciones = Resta(+ResultadoOperaciones, +ArrayNumerosParaOperaciones[ArrayNumerosParaOperaciones.indexOf(Numero) + 1]);
        }})
    Resultado.textContent = Number(ResultadoOperaciones.toFixed(3));
    ArrayNumerosParaOperaciones.splice(0)
    NumerosSeparados = ResultadoOperaciones;
    console.log(ArrayNumerosParaOperaciones)
}
const FuncionAC = (ArrayNumerosParaOperaciones, NumerosSeparados, SigonesDeOperaciones) => {
    Resultado.textContent = '';
    ArrayNumerosParaOperaciones.splice(0);
    NumerosSeparados = 0;
    SigonesDeOperaciones.splice(0);
    ACclick.push('x');
    }
    
let MostrarSignos = (Signo, Resultado) => {
    if(SigonesDeOperaciones.length === 0 && NumerosSeparados === '') {
        Resultado.textContent = 0 + Signo.innerHTML;
        ArrayNumerosParaOperaciones.push('0');
        ArrayNumerosParaOperaciones.push(Signo.innerHTML);
        SigonesDeOperaciones.push(Signo.innerHTML);
    }
    else {
        if(NumerosSeparados === '') { }
        else{
        Resultado.textContent = Resultado.innerHTML + Signo.innerHTML;
        ArrayNumerosParaOperaciones.push(NumerosSeparados);
        ArrayNumerosParaOperaciones.push(Signo.innerHTML);
        SigonesDeOperaciones.push(Signo.innerHTML);
        NumerosSeparados = ''; };
}
    console.log(ArrayNumerosParaOperaciones);
}

let MostrarNumeros = (Numero, Resultado) => {
if(ACclick.length > 0){
        NumerosSeparados = '';
        ACclick.pop();
    }
if( Numero.innerHTML === '.' && NumerosSeparados.includes('.')){ }
else {
    NumerosSeparados += Numero.innerHTML;
    Resultado.textContent = Resultado.innerHTML + Numero.innerHTML;
};
}

let Suma = (num1, num2) => {
    let ResultadoSuma = num1 + num2;
    return ResultadoSuma;
}
let Resta = (num1, num2) => {
    let ResultadoResta = num1 - num2;
    return ResultadoResta;
}
let Multiplicacion = (num1, num2) => {
    let Resultadomulti = num1 * num2;
    return Resultadomulti;
}
let Division = (num1, num2) => {
    let ResultadoDivision = num1 / num2;
    return ResultadoDivision;
}

BotonesParaNumeros();
BotonesParaOperaciones();
BotonIgual();
BotonAC();
