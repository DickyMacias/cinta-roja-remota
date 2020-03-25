
// Tipo de dato string
var string = "Hola Mundo";
var stringDos = 'A';

// Tipo de dato number
var number = 49;
var numberDos = 43.23;

// Tipo de dato booleano
var booleano = true;
var booleanoDos = false;


// El if solo valida booleanos
// var edad = 20;
// if (edad >= 18) {
//   console.log('Entre al if');  
// } else {
//   console.log('Entre al else');
// }

// Estructura del For
for(var i = 0; i < 99; i++){
  console.log('Se ejecuto una vez ' + i);
}

//RETURN
//El return devuelve un valor especifico de una funcion y rompe la ejecucion
function multiplicacion(num1, num2) {
  let result = num1 * num2;
  return result;
}

const multi = multiplicacion(10,5);
console.log('El resultado es: ' + multi);


// function isPasswordValid(password){
//   if (password === 'passwordseguro'){
//       return 'login';
//   } else {
//       return 'password incorrecto';
//   }
// }

// Esta es la definicion de la funcion
function isPasswordValid(password){
  if (password !== 'passwordseguro'){ // El return tambien es un break para la funcion
    return 'password incorrecto';
  }
  // Doy por echo que el password es correcto
  console.log('se esta ejecutando la funcion');
  return 'login';
}

// Esta es la ejecucion de la funcion
const resultado = isPasswordValid('mipassword');
console.log(resultado);

// IF
// Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.
const exacta = (num1,num2) => {
  if (num1%num2 === 0){
    return 'Es exacta';
  }
  return 'No es exacta';
}

// Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
const iguales = (num1,num2) => {
  if (num1 === num2){
    return 'Son iguales';
  } else if (num1 > num2){
    return 'Numero 1 > numero 2';
  } else if (num1 < num2){
    return 'Numero 1 > numero 2';
  }
}

// Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.
const fechas = (hoy,otro) => {
  let dif  = hoy - otro;
  if (dif > 0){
    return 'son ' + dif + ' al futuro';
  } else if (dif < 0){
    return 'son ' + dif + ' al pasado';
  } else {
    return 'estamos en el mismo año';
  }
} 

// Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.
const tresnum = (a,b,c) => {
  if (a === b && a === c) {
    return 'todos son iguales';
  } else if ((a === b && a !== c) || (a === b && b !== c) || (a === c && b !== c) || (b === c && a !== c)) {
    return 'dos son iguales';
  }
  return 'todos son diferentes'
}

// Pedir tres números y obtener el mayor de ellos.
const ordenar = (a,b,c) => {
  result = []
  if ( a > b  && a > c) {
    result.push(a);
    if (b > c){
      result.push(b,c);
    }else {
      result.push(c,b);
    }
  } else if ( b > a  && b > c) {
      result.push(b);
    if (a > c){
      result.push(a,c);
    }else {
      result.push(c,a);
    }
  } else if ( c > a  && c > b) {
    result.push(c);
    if (a > b){
      result.push(a,b);
    }else {
      result.push(b,a);
    }
  }

  return console.log(result[0]+'>'+result[1]+'>'+result[2]);
}

console.log(ordenar(1,2,3));

// FOR
// Imprimir del 1 al 10000
// Imprimir los números pares del 1 al 10000
// Crea la suma de todos los números pares del 1 al 3000
// Crea una serie Fibonacci hasta el 10000
