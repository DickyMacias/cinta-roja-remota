const miArregloDeObjetos = [
  {id:1, nombre: 'Luis', edad:16},
  {id:2, nombre: 'Carlos', edad:17},
  {id:3, nombre: 'Andrea', edad:18},
  {id:4, nombre: 'Arlette', edad:19},
  {id:5, nombre: 'Juan', edad:20},
];

const miNuevoArreglo = miArregloDeObjetos.filter((element,index,array) => {
  return element.edad > 17;
})

//console.log(miNuevoArreglo);

const miNuevoArregloDeNombre = miArregloDeObjetos.filter((element,index,array) => {
  return element.edad > 17;
}).map((element) => {
  return element.nombre;
});

const miNuevoArregloComprimido = miArregloDeObjetos.filter(e => e.edad > 17).map(e => e.nombre);

console.log(miNuevoArregloComprimido);