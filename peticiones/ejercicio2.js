// 2.- Hacer una función que pida como parámetro el id del pelicula y devuelva el titulo
// https://swapi.co/

const request = require('request');

URL = 'https://swapi.co/api/films/1'
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  console.log(json.title);
});