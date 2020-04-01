// 3.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
// https://pokeapi.co/

request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  console.log(json.types[0].type.name);
});

const request = require('request');

const getName = name => 'https://pokeapi.co/api/v2/pokemon/ditto/'+name;

URL = getName('ditto');
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