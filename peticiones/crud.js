const request = require('request');

const createAuthor = (nombre, apellidos, biografia, genero, edad) => {
  const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
  const body = {
        name          : nombre,
        last_name     : apellidos,
        nacionalidad  : 'MX',
        biography     : biografia,
        gender        : genero,
        age           : edad
  }

  const obj = { url: URL, form: body };
  request.post(obj, (err,res,body) => {
    console.log(err);
    console.log(res.statusCode);
    const respuesta = JSON.parse(body);
    console.log(respuesta);
    updateIsAliveByAuthorId(respuesta.id, true)
  });
}


const updateIsAliveByAuthorId = (idAuthor, isAlive) => {
  const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`
  const body = {
        is_alive : isAlive
  }

  const obj = { url: URL, form: body };
  request.patch(obj, (err,res,body) => {
    console.log(err);
    console.log(res.statusCode);
    const respuesta = JSON.parse(body);
    console.log(respuesta);
    getAuthorById(respuesta.id);
  });
}

const getAuthorById = (idAuthor) => {
  const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`;
  request.get(URL, (error,res,body) => {
    console.log(error);
    console.log(res.statusCode);
    console.log(body);
    const respuesta = JSON.parse(body);
    console.log(respuesta);
    if (res.statusCode === 404){
      return 'El autor ya no existe';
    }
    deleteAuthorById(respuesta.id);
  });
}

const deleteAuthorById = (idAuthor) => {
  const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`;
  request.delete(URL, (error,res,body) => {
    if (res.statusCode === 204){
      return console.log('El usuario fue borrado');
    }
    console.log(error);
    console.log(res.statusCode);
    console.log(body);
    const respuesta = JSON.parse(body);
    console.log(respuesta);
    getAuthorById(respuesta.id)
  });
}

createAuthor('CallBack Hell Ejercicio', 'Ejercicio JS', 'Esto si funciono', 'M', 33);
