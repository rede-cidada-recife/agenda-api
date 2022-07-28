const mongoose = require('mongoose');

const Contato = mongoose.model('Contato', {
    nome: String,
    sobrenome: String,
    telefone: String
});

module.exports = Contato;