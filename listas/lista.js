const miPrimeraListaDeSaludos = ['Hola','Que onda','Saludos'];
const miSegundaListaDeSaludos = ['string',40,true,20.05,false,'otro string'];

console.log(miPrimeraListaDeSaludos[0]);

for (let i = 0; i< miPrimeraListaDeSaludos.length; i++) {
const element = miPrimeraListaDeSaludos[i];
console.log(element);
}

const objetoUno = {id:1, nombre:'Maria', edad:22};
const objetoDos = {id:2, nombre:'Jorge', edad:33};
const objetoTres = {id:2, nombre:'Raul', edad:16};
const terceraLista = [objetoUno,objetoDos,objetoTres];

for (let i = 0; i < terceraLista.length; i++) {
  console.log(`---- Iteracion ${i} ----'`);
  const result = terceraLista[i].nombre;
  console.log(result);
};

const listaMayoresDeEdad = [];
for (let i = 0; i < terceraLista.length; i++) {
  console.log(`---- Iteracion por edad ${i} ----'`);
  const obj = terceraLista[i];
    if (obj.edad > 17){
        listaMayoresDeEdad.push(obj);
    }
};

console.log(listaMayoresDeEdad);
console.log(terceraLista);


