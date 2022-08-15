const httpStatus = {
  badRequest: {
    code: 400,
    error: { code: 'invalidData', message: 'CEP inválido' },
  },
  notFound: {
    code: 404,
    error: { code: 'notFound', message: 'CEP não encontrado' },
  },
  OK: {
    code: 200,
  },
  alreadyExists: {
    code: 409,
    error: { code: 'alreadyExists', message: 'CEP já existe' },
  },
  created: {
    code: 201,
  },
};

module.exports = httpStatus;
