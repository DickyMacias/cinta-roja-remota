// la definicion de var cambia por let
//var x = '3';
//let x = '3';

function equisLet(){
  let word = 'Hola cita roja';
  word = 'Hello';
  return word;
}

function equisConst(){
  const word = 'Hola cita roja';
  word = 'Hello';
  return word;
}

//let resultado = equisLet();
//let resultado = equisConst();
//console.log(resultado);

function suma(a,b){
  return a + b;
}


const sumaArrow = (a,b) => {
  return a + b;
}

let resultadoSuma = suma(10,30);
console.log(resultadoSuma);

