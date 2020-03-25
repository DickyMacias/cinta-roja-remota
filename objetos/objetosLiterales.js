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


