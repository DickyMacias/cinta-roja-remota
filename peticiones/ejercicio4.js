// 4.- Hacer una función que pida como parámetro el id del pelicula y devuelva el nombre de los personajes que aparecen
// https://swapi.co/

const request = require('request');

const getId = id => 'https://swapi.co/api/films/'+id;

URL = getId(1);
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  //console.log(json.films[0]);
    const peliculas = json.characters.map((elemento)=>{
    request.get(elemento, (error,response,body) => {
      const json2 = JSON.parse(body);
      console.log(json2.name);
    });
  });
});

