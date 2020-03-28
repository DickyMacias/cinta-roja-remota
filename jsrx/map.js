const miArreglo = ['Bocho','Mustang','BMW','Áveo','Sentra'];
const miArregloDeObjetos = [
  {id:1, nombre: 'Luis', edad:16},
  {id:2, nombre: 'Luis', edad:17},
  {id:3, nombre: 'Luis', edad:18},
  {id:4, nombre: 'Luis', edad:19},
  {id:5, nombre: 'Luis', edad:20},
];

const nuevoArregloFor = [];
for (let i = 0; i < miArregloDeObjetos.length; i++) {
  nuevoArregloFor.push(miArregloDeObjetos[i].nombre);
}
console.log(nuevoArregloFor);

const nuevoArreglo = miArregloDeObjetos.map((elemento,indice,arreglo)=>{
  console.log(elemento.nombre + ' ' + indice);
});

console.log(nuevoArreglo);

