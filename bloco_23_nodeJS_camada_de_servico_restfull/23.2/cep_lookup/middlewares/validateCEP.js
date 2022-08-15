const { badRequest } = require('../helpers/httpStatus');
const cepSchema = require('../schemas/cepSchema');

function validateCep(req, res, next) {
  const { cep } = req.params;
  const cepRegex = new RegExp(/^\d{5}-?\d{3}$/);
  if (!cepRegex.test(cep)) return res.status(badRequest.code).json(badRequest.error);
  next();
}

function validateCepSchema(req, res, next) {
  const cep = req.body;
  const { error } = cepSchema.validate(cep);
  if (error) return res.status(badRequest.code).json(error.message);
  next();
}

module.exports = {
  validateCep,
  validateCepSchema,
};
