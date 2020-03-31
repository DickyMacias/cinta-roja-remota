//manda llamar la biblioteca request
const request = require('request');

//URL, Callback
URL = 'https://swapi.co/api/people/14'
request.get(URL, (error,response,body) => {
  console.log(error);
  //console.log(response);
  console.log('Termino la petición');
  console.log(body);
  const json = JSON.parse(body);
  console.log(json);
});