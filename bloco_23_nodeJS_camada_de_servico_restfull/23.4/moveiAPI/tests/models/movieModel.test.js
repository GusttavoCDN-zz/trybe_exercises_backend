const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../models/db');
const moviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releseYear: '1999',
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(db, 'execute').resolves(execute);
  });

    // Restauraremos a função `execute` original após os testes.
    after(async () => {
      db.execute.restore();
    });

  describe('Quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const result = await moviesModel.create(payloadMovie);
      expect(result).to.be.an('object');
    });

    it('tal objeto possui um "id" do novo filme inserido', async () => {
      const response = await moviesModel.create(payloadMovie);
      expect(response).to.have.property('id');
    });
  });
});