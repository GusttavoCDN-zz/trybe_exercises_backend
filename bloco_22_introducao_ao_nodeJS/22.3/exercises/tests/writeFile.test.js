const { expect } = require('chai');
const writeFile = require('../src/writeFile');
const sinon = require('sinon');
const fs = require('fs');

describe('Testa o funcionamento da função writeFile', () => {
  beforeEach(() => sinon.stub(fs, 'writeFileSync'));
  afterEach(() => fs.writeFileSync.restore());

  it('Verifica se a função retorna "OK" quando a escrita é feita com sucesso', () => {
    const output = writeFile('teste.txt', 'teste');
    expect(output).to.be.equals('ok');
  });

  it('Verifica se o retorno é uma string', () => {
    const output = writeFile('teste.txt', 'teste');
    expect(output).to.be.a('string');
  });
});
