const ayudanteDeSanta = {
  ojos: 2,
  patas: 4,
  color: 'cafe',
  nombre: 'Ayudante de Santa',
  color: true,
  ladrar: () => {
    return 'Woof'
  },
  comer: (comida) => {
    if (comida === 'carne'){
      return 'yomi yomi';
    } else {
        return 'Wakala'
    }
  }
}

const snoopy = {
  ojos: 2,
  patas: 2,
  color: 'Blanco con negro',
  nombre: 'Snoopy',
  color: true,
  ladrar: () => {
    return 'mmmmm'
  },
  comer: (comida) => {
      if (comida === 'carne'){
        return 'yomi yomi';
      } else {
          return 'Wakala'
      }
  }

}

//console.log(ayudanteDeSanta.comer('carne'));


// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
// 	https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)
// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
// 3- Añade un método a tu pingüino llamado 'graznar' que muestre en 
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos

const myPinguin = {
  character: 'Sparky the Wonder Penguin',
  origin: 'This Modern World',
  creator: 'Tom Tomorrow',
  notes: 'A fast-talking penguin (sometimes identified as an auk) who wears a red visor and offers political commentary.',
  graznar: () => {
    return 'kaww kaww!!';
  }
}

console.log("Hola, soy un pingüino y mi nombre es " + myPinguin.character + " y hago " + myPinguin.graznar());


