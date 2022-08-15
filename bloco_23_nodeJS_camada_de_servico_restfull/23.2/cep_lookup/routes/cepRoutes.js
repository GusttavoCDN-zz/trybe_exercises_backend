const { Router } = require('express');
const cepController = require('../controller/cepController');
const { validateCep, validateCepSchema } = require('../middlewares/validateCEP');

const cepRoutes = Router();

cepRoutes.get('/:cep', validateCep, cepController.getCep);
cepRoutes.post('/', validateCepSchema, cepController.addCep);

module.exports = cepRoutes;
