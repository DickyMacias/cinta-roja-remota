// Import de Express
const express = require('express');

// creas app
const app = express();
// configruacion para aceptar body via json.
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (request,response)=> {
  const respuesta = {
      mensaje: 'Hola mundo desde express'
      }
      response.send(respuesta);
});

app.get('/users', (req,res)=> {
    const users = [
          {id:1, name:'Dicky'},
          {id:2, name:'Arlette'},
          {id:3, name:'El Negro'},
          // {id:4, name:'Raul'}
        ]
    res.send(users);
});

// app.get('/users/1', (req,res) => {
//       const respuesta = {
//         id:1,
//         name:'Dicky'
//       }
//       res.send(respuesta);
// });

app.get('/users/:id', (req,res) => {
  //Puedes recibir req y leer los parametros de la URL
  if (req.params.id === '1'){
    const respuesta = {
      id:1,
      name:'Dicky'
    };
    res.send(respuesta);
  } else {
    // Agregar un status code
    res.status(404).send({message: 'No encontrado'});
  }
});

// Query --> localhost:3002/search/user?name=Arlette
app.get('/search/user',(req,res) => {
    // query es una propiedad de req para traer los parametros del query
    //console.log(req.query);
    if (req.query.name === 'Arlette'){
    const resp = {
      id: 2,
      name: 'Arlette'
    };
    res.send(resp);
    } else {
      res.status(404).send({ mensaje: 'No encontrado' });
    }
});

//Crear un endpoint
app.post('/create/user', (req,res) => {
  console.log(req.body);
    const respuesta = {
      id: 1,
      name: req.body.name,
      last_name: req.body.last_name,
      age: req.body.age
    };
    res.send(respuesta);
});


// Siempre al final.
// PORT, Callback
app.listen(3002, () => {
  console.log('Server on');
});