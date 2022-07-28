const contatoController = require('../app/controllers/contatoController');
const cors = require('cors')

module.exports = (app) => {
    app.post('/contato', cors(), contatoController.post);
    app.put('/contato/:id', cors(), contatoController.put);
    app.delete('/contato/:id', cors(), contatoController.delete);
    app.get('/contatos', cors(), contatoController.get);
    app.get('/contato/:id', cors(), contatoController.getById);
}