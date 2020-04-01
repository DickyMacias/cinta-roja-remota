// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

const peticionGenero = banda => 'http://www.theaudiodb.com/api/v1/json/1/search.php?s='+ banda;

const request = require('request');

URL = peticionGenero('queen');
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  const generos = json.artists.map((elemento)=>{
      console.log(elemento.strGenre);
  });
});