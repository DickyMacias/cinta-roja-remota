
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
const result = isPasswordValid('mipassword');
console.log(result);