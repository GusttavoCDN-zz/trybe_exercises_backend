const cepService = require('../services/cepService');
const { notFound, OK, alreadyExists, created } = require('../helpers/httpStatus');

async function getCep(req, res) {
  const { cep } = req.params;
  const cepObj = await cepService.getCep(cep);

  if (!cepObj) return res.status(notFound.code).json(notFound.error);
  return res.status(OK.code).json(cepObj);
}

async function addCep(req, res) {
  const cep = req.body;
  const affectedRows = await cepService.addCep(cep);
  
  if (!affectedRows) return res.status(alreadyExists.code).json(alreadyExists.error);
  return res.status(created.code).json(cep);
}

module.exports = {
  getCep,
  addCep,
};
