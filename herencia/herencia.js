// Super clase o clase padre
class Mascota {
  constructor(patas,nombre){
    this.patas = patas;
    this.nombre = nombre;
    this.pelo = true;
  }
  dormir(){
    return `${this.nombre} esta durmiendo zZzZzZ`;
  }
}

// sub-clase o clase hijo
// Para tener herencia debe extender de clase padre y tener super
class Perro extends Mascota {
  constructor(raza,vacunado,color,nombre){
    super(4, nombre);
    this.raza = raza;
    this.vacunado = vacunado;
    this.color - color;
  }
  ladrar(){
    return `${this.nombre} esta ladrando`;
  }
}

// sub-clase o clase hijo
//los atributos de la clase padre existen en la clase hija.
// se pueden definir en parametros, hardcodear en super o sobreescribir con this.atributo.
class Gato extends Mascota {
  constructor(edad, nombre){
    super(2, nombre);
    this.edad = edad;
    this.vidas = 7;
  }
  ronronear(){
    return `${this.nombre} esta ronroneando rrrrrrrrr`;
  }
}

const snoppy = new Perro('Beagle',true,'Blanco con Negro','Snoopy');
const garfield = new Gato(50,"Garfield");


console.log(snoppy.ladrar());
console.log(garfield.ronronear());
console.log(snoppy.dormir());
console.log(garfield.dormir());