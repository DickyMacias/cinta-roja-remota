// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
// https://swapi.co/

const getId = id => 'https://swapi.co/api/people/'+id;

const request = require('request');

URL = getId(14);
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  //console.log(json.films[0]);
    const peliculas = json.films.map((elemento)=>{
    request.get(elemento, (error,response,body) => {
      const json2 = JSON.parse(body);
      console.log(json2.title);
    });
  });
});