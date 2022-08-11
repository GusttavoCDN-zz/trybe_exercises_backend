const cepModel = require('../models/cepModel');

async function exists(cep) {
  console.log(cep);
  const cepObj = await cepModel.getCep(cep);
  if (cepObj) return true;
  return false;
}

async function getCep(cep) {
  const cepObj = await cepModel.getCep(cep);
  return cepObj;
}

async function addCep(cepSchema) {
  const cepExists = await exists(cepSchema.cep);
  if (cepExists) return null;

  const affectedRows = await cepModel.addCep(cepSchema);
  return affectedRows;
}

module.exports = {
  getCep,
  addCep,
};
