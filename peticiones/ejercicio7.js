// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

const peticionAutor = author => 'http://openlibrary.org/search.json?author='+ author;

const request = require('request');

URL = peticionAutor('asimov');
request.get(URL, (error,response,body) => {
  const json = JSON.parse(body);
  const libros = json.docs.map((elemento)=>{
      console.log(elemento.title_suggest);
  });
});