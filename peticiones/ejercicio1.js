// 1.- Hacer una función que pida como parámetro el id del personaje y devuelva su nombre
// https://swapi.co/

//funcion en ES6 Arrow
const getId = id => 'https://swapi.co/api/people/'+id;

// funcion convencional
// function getId(id){
//   return 'https://swapi.co/api/people/'+id;
  
// }

const request = require('request');

URL = getId(14)
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  console.log(json.name);
});
