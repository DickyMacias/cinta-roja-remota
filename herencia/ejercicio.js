class Cine {
  constructor(pantallas,salas,butacas){
    this.pantallas = pantallas;
    this.salas = salas;
    this.butacas = butacas;
  }
  reproducir(largometraje){
    return `se esta reproduciendo ${largometraje.titulo}`;
  }
}

class Largometraje {
  constructor(titulo){
    this.titulo = titulo;
  }
}

class Pelicula extends Largometraje {
  constructor(duracion, genero, titulo){
    super(titulo);
    this.duracion = duracion;
    this.genero = genero;
  }
}

class Documental extends Largometraje {
  constructor(titulo, duracion, investigador, sponsor){
    super(titulo);
    this.duracion = duracion;
    this.investigador = investigador;
    this.sponsor = sponsor;
  }
}

class Evento extends Largometraje {
  constructor(duracion, titulo, tipo){
    super(titulo);
    this.duracion = duracion;
    this.tipo = tipo;
  }
}

const titanic = new Pelicula('120 min', 'romantica', 'Titanic');
const theMinimalist = new Documental('50 min', 'Un investigador', 'Natgeo');
const partido = new Evento('120 minutos', 'Real Madrid vs Barcelona', 'Partido de Futbol')

const cinepolis = new Cine(5,5,500);

const resultado = cinepolis.reproducir(partido);

//const resultado = cinepolis.reproducir(titanic);
console.log(resultado);