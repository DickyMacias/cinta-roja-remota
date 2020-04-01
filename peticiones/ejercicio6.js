// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     // http://openlibrary.org/search.json?q=i+robot) 

const peticionLibro = q => 'http://openlibrary.org/search.json?q='+ q;

const request = require('request');

URL = peticionLibro('i robot');
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  const getLucky = json.docs[0].author_name.map((elemento)=>{
      console.log(elemento);
  });
});