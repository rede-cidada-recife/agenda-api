const contatoController = require('../app/controllers/contatoController');
const cors = require('cors')

module.exports = (app) => {
    app.post('/contato', contatoController.post);
    app.put('/contato/:id',contatoController.put);
    app.delete('/contato/:id', contatoController.delete);
    app.get('/contatos', contatoController.get);
    app.get('/contato/:id', contatoController.getById);
}