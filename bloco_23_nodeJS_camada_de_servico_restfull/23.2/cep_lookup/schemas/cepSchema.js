const Joi = require('joi');

const cepSchema = Joi.object().keys({
  cep: Joi.string()
    .regex(/^\d{5}\d{3}$/)
    .required(),
  logradouro: Joi.string().max(50).required(),
  bairro: Joi.string().max(20).required(),
  localidade: Joi.string().max(20).required(),
  uf: Joi.string().min(2).max(2).required(),
});

module.exports = cepSchema;
