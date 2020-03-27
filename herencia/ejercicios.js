// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones	 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un metodo que regresa los metros 
//        cuadrados
//     c. Un metodo debe regresar la direccion
//     d. Un metodo debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia
// 3.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol
// . Crear los getters y setters
//     correspondientes.
// 4.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100
// 5.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.


class Maestro{
  constructor(materia, calificaciones){
    
    
    this.materia = materia;
    this.calificaciones = calificaciones;
  }
  calcularPromedio(){
    let suma = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
      suma += this.calificaciones[i];
    }
    let promedio = suma / this.calificaciones.length;
    return promedio;
  }

}

class MaestroFisica extends Maestro{
  constructor(antiguedad,materia,calificaciones){
  super(materia,calificaciones);
    this.antiguedad = antiguedad;
}
}

class MaestroMusica extends Maestro{
  constructor(edad,materia,calificaciones){
  super(materia,calificaciones);
    this.edad = edad;
}
}

const juan = new MaestroFisica(10,'Fisica',[10,9,8,9,7,5,6]);
console.log(juan.calcularPromedio());


class Construcción {
  constructor(puertas,ventanas,pisos,direccion,altura,largo,ancho){
    this.puertas = puertas;
    this.ventanas = ventanas;
    this.pisos = pisos;
    this.direccion = direccion;
    this.altura = altura;
    this.largo = largo;
    this.ancho = ancho;
  }
  calcularSuperficie(){
    let superficie = this.largo * this.ancho * this.pisos; 
    return superficie;
  }

  setDireccion(direccion){
    this.direccion = direccion;
  }

  getDireccion(){
    return this.direccion;
  }

}

class Edificio extends Construcción{
  constructor(puertas,ventanas,pisos,direccion,altura,largo,ancho){
    super(puertas,ventanas,pisos,direccion,altura,largo,ancho);
  }
}

class Casa extends Construcción{
  constructor(puertas,ventanas,pisos,direccion,altura,largo,ancho){
    super(puertas,ventanas,pisos,direccion,altura,largo,ancho);
  }
}

const casa = new Casa(2,4,2,'Gonzalo de Alvarado 8429',10,30,10);
console.log(casa);
console.log(casa.calcularSuperficie());
console.log(casa.getDireccion());
console.log(casa.setDireccion('Diaz Ordaz 1841'));
console.log(casa.getDireccion());
