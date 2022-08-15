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

describe.only('Pega um filme pelo ID no DB', () => {
  const id = 1;

  const expectedResult = {
    id: 1,
    nome: 'A volta dos que não foram',
    direcao: 'Gustavo da SIlva',
    data_de_lancamento: '1999',
  };

  describe('Quando é passado um ID existente', async () => {
    before(async () => {
      const execute = expectedResult; // retorno esperado nesse teste
      sinon.stub(db, 'execute').resolves(execute);
    });

    after(async () => {
      db.execute.restore();
    });

    it('O resultado deve ser um objeto', async () => {
      const result = await moviesModel.getById(id);
      expect(result).to.be.an('object');
    });

    it('O resultado deve ser o objeto esperado', async () => {
      const result = await moviesModel.getById(id);
      expect(result).to.be.deep.equal(expectedResult);
    });

    describe('Quando é passado um ID inexistente', async () => {
      before(async () => {
        const execute = [[]]; // retorno esperado nesse teste
        sinon.stub(db, 'execute').resolves(execute);
      });

      after(async () => {
        db.execute.restore();
      });

      it('retorna null', async () => {
        const result = await moviesModel.getById(100);
        expect(result).to.be.equal(null);
      });
    });
  });
});
