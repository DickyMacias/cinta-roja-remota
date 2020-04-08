const mongoose = require('mongoose');

const schemaSuperheroe = mongoose.Schema({
  nombre:{
    type: String
  },
  edad:{
    type: Number
  },
  sidekick:{
    type: Boolean,
    default: false
  },
  debilidad:{
    type: String,
    required: true
  },
  identidad:{
    type: String,
    enum: ['PUBLICA', 'SECRETA']
  },
  superPoderes:{
    type: [String]
  }
});

const superHeroe = mongoose.model('superheroe', schemaSuperheroe);

module.exports = superHeroe;