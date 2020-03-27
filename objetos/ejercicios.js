
class myPinguin {

  constructor(){
    this.nombre    = 'Sparky the Wonder Penguin';
    this.origin    = 'This Modern World';
    this.creator   = 'Tom Tomorrow';
    this.notes     = 'A fast-talking penguin (sometimes identified as an auk) who wears a red visor and offers political commentary.';
  }

  puedeVolar(){
    this.volar = false;
  }

  graznar(){
    return 'kaww kaww!!';
  }

  saludar(){
    return "Hola, soy un pingüino y mi nombre es " + this.nombre;
  }
 
  cambiarNombre(nombre){
    this.nombre = nombre;
    console.log(this.saludar());
  }

  volando(){
    if (this.volar === true){
      return 'Puedo volar ;)';
    }
    return 'no puedo volar :('
  }

  setPuedeVolar(){
    if (this.volar !== true){
      this.volar = true;
    }else{
      this.volar = false;
    }
  }
}

const pingu = new myPinguin();
console.log(pingu);
console.log(`Hola, soy un pingüino y mi nombre es ${pingu.nombre}`);
pingu.puedeVolar();
console.log(pingu.graznar());
console.log(pingu.saludar());
pingu.cambiarNombre("Senor Pingu");
console.log(pingu.volando());
pingu.setPuedeVolar();
console.log(pingu.volando());
pingu.setPuedeVolar();
console.log(pingu.volando());
console.log(pingu);













